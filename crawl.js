const { JSDOM } = require('jsdom')

function normalizeURL(inputURL) {
	let normalized = inputURL
	if (inputURL.slice(-1) != '/') {
		normalized = normalized + '/'
	}
	let urlObject = new URL(normalized)
	
	return urlObject.hostname + urlObject.pathname
}

function retrieveURLs(htmlBody) {
	const dom = new JSDOM(htmlBody)
	retrieved = dom.window.document.querySelectorAll('a')
	const urls = []
	for (let anchor of retrieved) {
		urls.push(anchor.href)
	}
	return urls
}

function getURLsFromHTML(htmlBody, baseURL) {
	bodyURLs = retrieveURLs(htmlBody)
	urls = []
	for (let url of bodyURLs) {
		if (url[0] === '/') {
			urls.push(baseURL + url)
		} else {
			urls.push(url)
		}
	}
	return urls
}

async function crawlPage(baseURL, currentURL, pages) {

	if (new URL(baseURL).hostname != new URL(currentURL).hostname) {
		return pages
	}

	let normalized = normalizeURL(currentURL)

	if (normalized in pages) {
		pages[normalized]++
		return pages
	}

	if (baseURL === currentURL) {
		pages[normalized] = 0
	} else {
		pages[normalized] = 1
	}
	

	try {
		const response = await fetch(currentURL)
		if (response.status >= 400) {
			console.log(`Error: status code ${response.status}`)
		} else if (!response.headers.get('content-type').includes('text/html')) {
			console.log('Error: content type must be text/html ')
		} else {
			data = await response.text()
			console.log(data)
		}
	} catch {
		console.log('error')
	}
}

module.exports = {
	normalizeURL,
	retrieveURLs,
	getURLsFromHTML,
	crawlPage
}

