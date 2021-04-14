import { Component } from 'react';

class SearchBar extends Component {
   state = {
      query: '',
   };

   handleChange = e => {
      this.setState({ query: e.currentTarget.value });
   };

   submitHandler = e => {
      e.preventDefault();
      this.props.submitHandler(this.state.query);
      this.setState({ query: '' });
   };
   render() {
      return (
         <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.submitHandler}>
                  <input
                  onChange={this.handleChange}
                  className="SearchForm-input"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={this.state.query}
               />

               <button type="submit" className="SearchForm-button">
                  <span className="SearchForm-button-label">Search</span>
               </button>


            </form>
         </header>
      );
   }
}
export default SearchBar;
