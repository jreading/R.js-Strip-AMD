({
	onBuildWrite: function (id, path, contents) {
		var defineRegExp = /define\s*\(\s*["'][^'"]+["']\s*,\s*\[[^\]]*\]\s*,function\s*?\(.*?\)\s*?\{/;
		//Remove AMD ceremony for use without require.js or almond.js
		contents =  contents.replace(defineRegExp, '')
		//Remove the trailing }) for the define call and any semicolon
		.replace(/\}\)(;)?\s*$/, '');
		return contents;
	}
})