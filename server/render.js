const React = require('react');
import App from '../client/components/App.js';
const ReactDOMServer = require('react-dom/server');

export default () => {
	return ReactDOMServer.renderToString(<App />);	
}
