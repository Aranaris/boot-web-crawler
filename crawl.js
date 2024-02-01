const { JSDOM } = require('jsdom')

function normalizeURL(url) {
	let normalized = url
	if (url.slice(0,8) === 'https://') {
		normalized = url.slice(8)
	} else if (url.slice(0,7) === 'http://') {
		normalized = url.slice(7)
	}

	if (url.slice(-1) == '/') {
		normalized = normalized.slice(0, -1)
	}

	return normalized
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

async function crawlPage(currentURL) {
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

