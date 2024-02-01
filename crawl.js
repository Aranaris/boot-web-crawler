const {JSDOM} = require('jsdom');

function normalizeURL(inputURL) {
	let normalized = inputURL;
	if (inputURL.slice(-1) != '/') {
		normalized = normalized + '/';
	}
	const urlObject = new URL(normalized);

	return urlObject.hostname + urlObject.pathname;
}

function retrieveURLs(htmlBody) {
	const dom = new JSDOM(htmlBody);
	const retrieved = dom.window.document.querySelectorAll('a');
	const urls = [];
	for (const anchor of retrieved) {
		urls.push(anchor.href);
	}
	return urls;
}

function getURLsFromHTML(htmlBody, baseURL) {
	const bodyURLs = retrieveURLs(htmlBody);
	const urls = [];
	for (const url of bodyURLs) {
		if (url[0] === '/') {
			if (baseURL.slice(-1) === '/') {
				urls.push(baseURL.slice(0, -1) + url);
			} else {
				urls.push(baseURL + url);
			}
		} else {
			urls.push(url);
		}
	}
	return urls;
}

async function crawlPage(baseURL, currentURL, pages) {

	if (new URL(baseURL).hostname != new URL(currentURL).hostname) {
		return pages;
	}

	const normalized = normalizeURL(currentURL);

	if (normalized in pages) {
		pages[normalized]++;
		return pages;
	}

	if (baseURL === currentURL) {
		pages[normalized] = 0;
	} else {
		pages[normalized] = 1;
	}

	try {
		const response = await fetch(currentURL);
		let nextPages = [];
		if (response.status >= 400) {
			console.log(`Error: status code ${response.status} for ${currentURL}`);
		} else if (!response.headers.get('content-type').includes('text/html')) {
			console.log(`Error: content type not text/html for ${currentURL}`);
		} else {
			const data = await response.text();
			nextPages = getURLsFromHTML(data, baseURL);
			console.log(`checking urls on ${currentURL}...`);
			for (const page of nextPages) {
				await crawlPage(baseURL, page, pages);
			}
		}
		return pages;
	} catch (err) {
		console.log(err.message);
	}
}

module.exports = {
	normalizeURL,
	retrieveURLs,
	getURLsFromHTML,
	crawlPage,
};

