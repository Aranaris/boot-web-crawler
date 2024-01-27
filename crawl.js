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

testBody = '<html><a href="https://www.google.com/"></a><a href="/asdf"></a></html>'
console.log(getURLsFromHTML(testBody, 'https://www.google.com'))

module.exports = {
	normalizeURL,
	retrieveURLs,
	getURLsFromHTML
}

