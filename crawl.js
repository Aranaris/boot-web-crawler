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

module.exports = {
	normalizeURL
}

