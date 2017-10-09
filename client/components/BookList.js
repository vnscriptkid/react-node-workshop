const React = require('react');
import Book from './Book.js';

const BookList = (props) => {
	return (
		<div>
			<Book />
			<Book />
			<Book />			
		</div>	
	);
};

export default BookList;