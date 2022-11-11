import SearchForm from '../SearchForm/SearchForm'
import './Search.css'

const Search = () => {
  return (
    <div>
        <header className='header'>
        <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your favorite books.</h2><br />
                <p className='header-text fs-18 fw-4'>Great selection of modern and classic books waiting to be discovered</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Search