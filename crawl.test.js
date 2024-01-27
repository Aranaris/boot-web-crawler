const crawl = require('./crawl')
const { test, expect } = require('@jest/globals')

test('converts url to blog.boot.dev/path', () => {
	expect(crawl.normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
	expect(crawl.normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
	expect(crawl.normalizeURL('blog.boot.dev/path/')).toBe('blog.boot.dev/path')
	expect(crawl.normalizeURL('blog.boot.dev/path')).toBe('blog.boot.dev/path')
})

test('retrieves URLs from a given document body and origin url', () => {
	testBody = '<html><a href="https://www.google.com/"></a><a href="/asdf"></a></html>'
	baseURL = 'https://www.google.com'
	expect(crawl.getURLsFromHTML(testBody, baseURL)).toEqual(['https://www.google.com/', 'https://www.google.com/asdf'])
})
