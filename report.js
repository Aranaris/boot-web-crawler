function printReport(pages) {
	console.log('printing report...');
	const sortedKeys = sortPages(pages);
	sortedKeys.forEach((key) => {
		console.log(`Found ${pages[key]} internal links to ${key}`);
	});
}

function sortPages(pages) {
	const sortedKeys = Object.keys(pages).sort(function(a, b) {
		return pages[b]-pages[a];
	});
	return sortedKeys;
}

module.exports = {
	printReport,
	sortPages,
};
