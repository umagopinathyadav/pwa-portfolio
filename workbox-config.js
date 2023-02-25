module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};