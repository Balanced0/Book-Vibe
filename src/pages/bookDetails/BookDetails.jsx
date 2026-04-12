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
          <p><span className="font-bold">Review: </span><span className="text-[#13131370]">{targetBook.review}</span></p>
          <div className="flex gap-4 mt-6">
              <span className="font-bold">Tag</span>
              {
                targetBook.tags.map((tag, index)=>{
                  return <div key={index} className="badge badge-soft text-[#23BE0A] bg-[#23BE0A15] border-none">#{tag}</div>
                })
              }
          </div>
          <div className="divider"></div>
          <div className="flex gap-14 mb-8">
            <div>
              <p className="mb-3 text-[#13131370]">Number of Pages:</p>
              <p className="mb-3 text-[#13131370]">Publisher:</p>
              <p className="mb-3 text-[#13131370]">Year of Publishing:</p>
              <p className="mb-3 text-[#13131370]">Rating:</p>
            </div>
            <div>
              <p className="font-semibold mb-3">{targetBook.totalPages}</p>
              <p className="font-semibold mb-3">{targetBook.publisher}</p>
              <p className="font-semibold mb-3">{targetBook.yearOfPublishing}</p>
              <p className="font-semibold mb-3">{targetBook.rating}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-white rounded-lg font-semibold text-sm p-5">Read</button>
            <button className="btn btn-accent text-white rounded-lg font-semibold text-sm">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
