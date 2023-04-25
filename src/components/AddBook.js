import React, { useContext } from 'react';
import BookForm from './BookForm';
import BookContext from '../context/BooksContext';

const AddBook = ({ history }) => {
    const { books, setBooks } = useContext(BookContext);

    const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        history.push('/');
    };

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddBook;
