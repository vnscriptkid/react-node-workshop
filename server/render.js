const React = require('react');
import App from '../client/components/App.js';
const ReactDOMServer = require('react-dom/server');

// console.log(ReactDOMServer.renderToString(<App />));

export default () => {	
	return ReactDOMServer.renderToString(<App />);	
}
