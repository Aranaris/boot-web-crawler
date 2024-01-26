const crawl = require('./crawl')
const { test, expect } = require('@jest/globals')

test('converts url to blog.boot.dev/path', () => {
	expect(crawl.normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
	expect(crawl.normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
	expect(crawl.normalizeURL('blog.boot.dev/path/')).toBe('blog.boot.dev/path')
	expect(crawl.normalizeURL('blog.boot.dev/path')).toBe('blog.boot.dev/path')
})
