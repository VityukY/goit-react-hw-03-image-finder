import { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import './App.css';

class App extends Component {
   state = {
      images: [],
   };

   componentDidMount() {
      const query = 'car';
      const pageNmbr = 1;
      const key = '20439634-6c644a175487626659667f77f';

      axios
         .get(
            `https://pixabay.com/api/?q=${query}&page=${pageNmbr}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
         )
         .then(respons => {
            this.setState({ images: [...respons.data.hits] });
         });
   }

   render() {
      return (
         <>
            <h1>start</h1>
            <SearchBar />
            <ImageGallery images={this.state.images} />
         </>
      );
   }
}

export default App;
