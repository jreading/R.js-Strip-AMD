({
	onBuildWrite: function (id, path, contents) {
		var defineRegExp = /define.*?\{/;
		//Remove AMD ceremony for use without require.js or almond.js
		contents = contents.replace(defineRegExp, '')
		//Remove the trailing }) for the define call and any semicolon
		.replace(/\}\)(;)?\s*$/, '')
		//remove last return statment
		.replace(/return.*[^return]*$/,'');
		return contents;
	}
})