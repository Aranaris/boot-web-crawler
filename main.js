const { argv } = require('node:process')
const { crawlPage } = require('./crawl')

function main() {
	if (argv.length !== 3) {
		console.log('expected 1 argument!')
	} else {
		console.log(`base URL is: ${argv[2]}`)
		crawlPage(argv[2])
	}
}

main()
