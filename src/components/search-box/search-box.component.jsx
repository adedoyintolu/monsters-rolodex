import './search-box.css';


//Functional Component gets props and returns some HTML
const SearchBox = ({placeholder, handleChange}) =>(
  <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange} 
  />
);

export default SearchBox;