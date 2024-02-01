const { argv } = require('node:process')
const { crawlPage } = require('./crawl')

async function main() {
	if (argv.length !== 3) {
		console.log('expected 1 argument!')
	} else {
		console.log(`base URL is: ${argv[2]}`)
		pages = await crawlPage(argv[2], argv[2], {})
		console.log(pages)
	}
}

main()
