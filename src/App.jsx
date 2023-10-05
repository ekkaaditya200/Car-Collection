import React,{useState} from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Footer from './Components/Footer';
import data from './assets/car.json';

const CardsPerPage = 6;
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsToShow, setCardsToShow] = useState(data.cars.slice(0, CardsPerPage));

  const handlePageChange = (page) => {
      const startIndex = (page - 1) * CardsPerPage;
      const endIndex = startIndex + CardsPerPage;
      setCardsToShow(data.cars.slice(startIndex, endIndex));
      setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.cars.length / CardsPerPage);

  return (
    <div className='flex flex-col gap-5 justify-center items-cente'>
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-8">

          <Card cardsToShow={cardsToShow} />

        </div>
      </div>
      <Footer handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
