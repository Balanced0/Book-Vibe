import React from "react";
import { useParams, useLoaderData } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const targetBook = books.find((book) => book.bookId == id);
  return (
    <div className="container mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-4xl playfair-font mb-4">{targetBook.bookName}</h2>
          <p className="font-medium text-xl text-[#13131380]">By: {targetBook.author}</p>
          <div className="divider"></div>
          <p className="font-medium text-xl text-[#13131380]">{targetBook.category}</p>
          <div className="divider"></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
