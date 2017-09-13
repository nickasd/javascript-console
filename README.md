# JavaScript Console
A JavaScript console that runs in the browser.

## Usage

Intercepting logs and errors from a window:

```javascript
var view = document.getElementById('console');
var jsConsole = new JavaScriptConsole(view);
jsConsole.attachToWindow(window);
```

Programmatically adding logs:

```javascript
var clientId = 'client-1';
jsConsole.setColor(clientId, 'green');
var args = ['Logging with clientId', clientId];
jsConsole.append(clientId, 'log', null, ...args);
```

A full
example is available at [example](https://github.com/nickasd/javascript-console/tree/master/example).

## Install with NPM

```
npm install https://github.com/nickasd/javascript-console
```

## Try it out

```
npm install
npm start
// in the browser
open http://localhost:8080
```
