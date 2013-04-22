var grunt = require('grunt');
var path = require('path');

exports.wrap = function(content, filePath, options) {
	var namespace = options.namespace || 'TEMPLATES'
	var fileName = path.basename(filePath, '.js');
	var dashedNamespace = namespace.replace('.', '-') + '-' + fileName;
    var parentNS = namespace.split('.')[0];

	var moduleStr = "// " + options.banner + "\n" +
    "// This file is automatically generated. Please, edit corresponding template instead.\n" +
	"YUI.add('"+ dashedNamespace + "', function(Y) {\n" +
	"Y.namespace('" + namespace + "');\n\n" +
    "this." + parentNS + " = Y." + parentNS + ";\n" +
	content +
	"\n}, '0.0.1');"

	return moduleStr;
}