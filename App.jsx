import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Addbooks from './pages/Addbooks'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Booktablepage from './pages/Booktablepage'
import backgroundImage from './image/background.jpg'
function App() {
  const [books, setBooks] = useState([


    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction', year: 1813 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Tragedy, Fiction', year: 1925 },
    { title: 'Beauty And The Beast', author: 'Gabrielle-Suzanne Barbot de Villeneuve', genre: 'Fairy Tale, Fantasy', year: 1740 },
  


  ]);

  const addbooks = (book) => {
    setBooks([...books, book]);
    console.log(book);
  }

  const deleteBook = (index) => {
    const updatedBooks = [...books]; 
    updatedBooks.splice(index, 1);  
    setBooks(updatedBooks);        
  }; 

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/books' element={<Booktablepage books={books} deleteBook={deleteBook} />} />
          <Route path='/addbook' element={<Addbooks addbooks={addbooks} />} />

        </Routes>
      </div>
    </>
  )
}

export default App
