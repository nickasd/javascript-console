var JavaScriptConsole = require('../javascript-console');

var view = document.getElementById('console');
var jsConsole = new JavaScriptConsole(view, {
	onCodeInput: (code) => {
		var result;
		try {
			result = eval(code);
		} catch (e) {
			result = `${e.name}: ${e.message}`;
		}
		if (result === undefined) {
			jsConsole.append(null, 'code', null, `${code}`);
		} else {
			jsConsole.append(null, 'code', null, `${code}:`, result);
		}
	},
	onFilerefClick: (fileref) => {
		console.info('A fileref was clicked:', fileref);
	}
});

var clientId = '1';
jsConsole.attachToWindow(window);

jsConsole.append(clientId, 'log', null, 'A log added programmatically with a clientId');
console.warn('<b>HTML tags</b> are escaped');
console.log('Logging an object:', {a: 'Hello!'});
console.log('Logging an array:', [{b: 'It\'s me again!'}, {c: 'I have nothing more to say.'}]);
jsConsole.setColor(clientId, 'green');
setTimeout(() => {
jsConsole.setColor(clientId, null);
}, 1000);
