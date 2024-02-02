function printReport(pages) {
	console.log('printing report...');

	return pages;
}

function sortPages(pages) {
	const sorted = Object.keys(pages).sort(function(a, b) {
		return pages[b]-pages[a];
	}).map((key) => ({[key]: pages[key]}));
	return sorted;
}

module.exports = {
	printReport,
	sortPages,
};
