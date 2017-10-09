const React = require('react');
import BookList from './BookList.js';

class App extends React.Component {
	state = {answer : 100}
	render() {		
		return (
			<BookList />
		);
	}
}

export default App;

// const App = () => {
// 	return (
// 		<h2>Hello Component</h2>
// 	);
// };



