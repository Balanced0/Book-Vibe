import React, {use} from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then((res)=>res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    return (
        <div className="container mx-auto p-4">
            <h2 className="font-bold text-4xl playfair-font text-center mt-24 mb-9">Books</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                books.map((book, index) =>{
                    return <BookCard key={index} book={book}></BookCard>
                })
            }
            </div>
            
        </div>
    );
};

export default AllBooks;