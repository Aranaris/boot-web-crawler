const crawl = require('./crawl');
const {test, expect} = require('@jest/globals');

test('converts url to blog.boot.dev/path', () => {
	expect(crawl.normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path/');
	expect(crawl.normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path/');
	expect(crawl.normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path/');
	expect(crawl.normalizeURL('https://blog.boot.dev')).toBe('blog.boot.dev/');
});

test('retrieves URLs from a given document body and origin url', () => {
	const testBody = '<html><a href="https://www.google.com/"></a><a href="/asdf"></a></html>';
	const baseURL = 'https://www.google.com/';
	expect(crawl.getURLsFromHTML(testBody, baseURL)).toEqual(['https://www.google.com/', 'https://www.google.com/asdf']);
});

test('checks crawlPage returns pages when domain names do not match', async () => {
	const baseURL = 'https://wagslane.dev';
	const currentURL = 'https://www.google.com';
	const pages = {'www.wagslane.dev': 1};
	const result = await crawl.crawlPage(baseURL, currentURL, pages);
	expect(result).toEqual(pages);
});

test('checks crawlPage returns incremented pages when currentURL is already in pages', async () => {
	const baseURL = 'https://wagslane.dev';
	const currentURL = 'https://wagslane.dev';
	const pages = {'wagslane.dev/': 1};
	const result = await crawl.crawlPage(baseURL, currentURL, pages);
	const expected_pages = {'wagslane.dev/': 2};
	expect(result).toEqual(expected_pages);
});
