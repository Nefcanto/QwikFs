var esprima = require('nightly-esprima');
var fs = require('fs');
var path = require('path')
var file = process.argv[2]
var org = process.env.Organization;
var repo = process.env.Repository;
var code = fs.readFileSync(file, {
    encoding: 'utf8',
    flag: 'r'
});
code = code.replace("<>", "<React.Fragment>")
code = code.replace("</>", "</React.Fragment>")
var ast = esprima.parseModule(code, { "jsx": true })
var tokens = esprima.tokenize(code, { "jsx": true })
var astFile = file.replace(`/${org}`, '')
    .replace(`/${repo}`, '')
    .replace('/src', '')
    .replace('/routes', '')
    .replace('/Components', '')
    .replace('./', '/')
var astFile = `/Temp/${org}/${repo}/Ast${astFile}`
var tokenFile = `${astFile}.tokens`
var directory = path.dirname(astFile)
fs.mkdirSync(directory, { recursive: true });
fs.writeFileSync(astFile, JSON.stringify(ast));
// fs.writeFileSync(tokenFile, JSON.stringify(tokens));

