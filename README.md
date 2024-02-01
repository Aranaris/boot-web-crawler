### Guided Web Crawler Project from boot.dev

Web crawler node tool that takes a page URL and outputs a report with all crawled URLs from the same domain and the count. Example run:

`yarn start https://www.wagslane.dev/`

The function runs recursively, and sample output looks like:

```
{
  'www.wagslane.dev/': 62,
  'www.wagslane.dev/tags/': 62,
  'www.wagslane.dev/about/': 62,
  'www.wagslane.dev/index.xml/': 62,
  'www.wagslane.dev/tags/business/': 1,
  'www.wagslane.dev/posts/dark-patterns/': 2,
  'www.wagslane.dev/posts/things-i-dont-want-to-do-to-grow-business/': 2,
  'www.wagslane.dev/tags/clean-code/': 1,
  'www.wagslane.dev/posts/zen-of-proverbs/': 2,
  'www.wagslane.dev/posts/func-y-json-api/': 2,
  'www.wagslane.dev/posts/keep-your-data-raw-at-rest/': 2,
  'www.wagslane.dev/posts/continuous-deployments-arent-continuous-disruptions/': 3,
  'www.wagslane.dev/posts/optimize-for-simplicit-first/': 2,
  'www.wagslane.dev/tags/devops/': 1,
  'www.wagslane.dev/posts/no-one-does-devops/': 2,
  'www.wagslane.dev/posts/leave-scrum-to-rugby/': 5,
  'www.wagslane.dev/posts/kanban-vs-scrum/': 4,
  'www.wagslane.dev/tags/education/': 1,
  'www.wagslane.dev/posts/college-a-solution-in-search-of-a-problem/': 2,
  'www.wagslane.dev/tags/golang/': 1,
  'www.wagslane.dev/posts/guard-keyword-error-handling-golang/': 2,
  'www.wagslane.dev/posts/gos-major-version-handling/': 2,
  'www.wagslane.dev/posts/go-struct-ordering/': 2,
  'www.wagslane.dev/tags/management/': 1,
  'www.wagslane.dev/posts/managers-that-cant-code/': 2,
  'www.wagslane.dev/tags/philosophy/': 1,
  'www.wagslane.dev/posts/what-a-crazy-religion/': 2,
  'www.wagslane.dev/posts/a-case-against-a-case-for-the-book-of-mormon/': 2,
  'www.wagslane.dev/tags/writing/': 1,
  'www.wagslane.dev/posts/seo-is-a-scam-job/': 2,
  'www.wagslane.dev/posts/collapsing-quality-of-devto/': 2,
  'www.wagslane.dev/posts/developers-learn-to-say-no/': 1
}
```
