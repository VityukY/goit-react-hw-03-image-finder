import { Component } from 'react';

import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImg from './components/services/featchImg';


class App extends Component {
   state = {
      images: [],
      currentQuery: '',
      currentPage: 1,
   };
   componentDidUpdate(prevProps, prevState) {
      if (prevState.currentQuery !== this.state.currentQuery) {
         this.loadImg();
      }
   }
   formHandler = value => {
      this.setState({ currentQuery: value, currentPage: 1, images: [] });
   };

   loadImg = () => {
      const { currentQuery, currentPage } = this.state;
      fetchImg(currentQuery, currentPage).then(respons => {
         this.setState(prevState => ({
            images: [...prevState.images, ...respons.data.hits],
            currentPage: prevState.currentPage + 1,
         }));
      });
   };

   render() {
      return (
         <>
            <SearchBar submitHandler={this.formHandler} />
            <ImageGallery images={this.state.images} />
            {this.state.images.length !== 0 && (
               <button type="button" onClick={this.loadImg} className='loadButton'>
                  Load more...
               </button>
            )}
         </>
      );
   }
}

export default App;
