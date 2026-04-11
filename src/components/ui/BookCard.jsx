import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";


const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                            <figure className="card-body bg-base-200">
                                <img
                                src={book.image} className="rounded-lg h-[220px]"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex gap-3">
                                    {
                                        book.tags.map((tag, index)=>{
                                            return <div key={index} className="badge badge-soft text-[#23BE0A] bg-[#23BE0A15] border-none">{tag}</div>
                                        })            
                                    }
                                </div>
                                <h2 className="card-title font-bold text-2xl playfair-font">
                                {book.bookName}
                                </h2>
                                <p className="font-medium mb-5">By : {book.author}</p>
                                <p className="border border-dashed text-gray-400"></p>
                                <div className="flex justify-center items-center mt-5">
                                    <p className="font-medium">{book.category}</p>
                                    <div className="flex items-center justify-center gap-1">
                                        <p className="font-medium">{book.rating}</p>
                                        <p className="font-medium"><CiStar size={18}/></p>
                                    </div>
                                </div>
                            </div>
                            </Link>
    );
};

export default BookCard;