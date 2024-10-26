import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Booktable({ books, deleteBook }) {
  const location = useLocation();
  console.log(location);
  const [search, setSearch] = useState('');

  const filterBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) ||book.author.toLowerCase().includes(search.toLowerCase()) ||book.genre.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-2/3 backdrop-blur-md border-2 border-white flex items-center justify-center rounded-md flex-col">
      <div className="w-full flex items-center justify-center">
        <input
          type="text"
          placeholder="Search here:"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-1/2 my-10 bg-black h-10 border-2 rounded-md text-white border-white"
        />
      </div>

      <table className="table-auto w-11/12 text-left text-white border-white my-8 ">
        <thead>
          <tr className="border-2 border-white ">
            <th className="p-2 px-2  text-left">Title</th>
            <th className="p-2 px-2 text-left">Author</th>
            <th className="p-2 px-2  text-left">Genre</th>
            <th className="p-2 px-2  text-left">Year</th>
            <th className="p-2 px-2  text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterBooks.map((book, index) => (
            <tr className="border-2 border-white" key={index}>
              <td className="p-2 border-b border-white">{book.title}</td>
              <td className="p-2 border-b border-white">{book.author}</td>
              <td className="p-2 border-b border-white">{book.genre}</td>
              <td className="p-2 border-b border-white">{book.year}</td>
              <td className="p-2 border-b border-white">
                <button
                  onClick={() => deleteBook(index)}
                  className="w-20 h-10 bg-red-600 mr-2 border rounded" >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center w-full pr-10 mb-4">
        <Link to="/addbook">
          <button className="bg-teal-500 p-2 text-white rounded">Add New Book</button>
        </Link>
      </div>
    </div>
  );
}

export default Booktable;
