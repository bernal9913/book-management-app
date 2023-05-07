import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate } from 'react-router-dom';
/*
* desde la version 6.0 de react-router-dom se necesita usar element y no el estilo anterior de referenciado
* */
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';
import AddBook from "../components/AddBook";

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <BooksContext.Provider value={{ books, setBooks }}>
                        <Routes>
                            <Route element={<BooksList/>} path="/" exact={true} />
                            <Route element={<AddBook/>} path="/add" />
                            <Route element={<EditBook/>} path="/edit/:id" />
                            <Route element={() => <Navigate to="/" />} />
                        </Routes>
                    </BooksContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
