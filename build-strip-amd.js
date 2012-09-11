({
	onBuildWrite: function (id, path, contents) {
		if ((/define\(.*?\{/).test(contents)) {
			//Remove AMD ceremony for use without require.js or almond.js
			contents = contents.replace(/define\(.*?\{/, '')
			//remove last return statement and trailing })
			.replace(/return.*[^return]*$/,'');
		}
		return contents;
	}
})