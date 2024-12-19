import './App.css'
import Header from './assets/components/layout/Header'
import Footer from './assets/components/layout/Footer'
import Banner from './assets/components/Home/Banner'
import Filter from './assets/components/Home/Filter'
import MoviesList from './assets/components/Movies/MoviesList'

function App() {

  return (
    <>
        <Header />
        <Banner />
        <div className="container">
            <Filter />
            <MoviesList />
            <div className="movies__scroll">
                <button><i className="fa-solid fa-arrow-down"></i></button>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default App
