import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Loader from 'react-loader-spinner';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImg from './components/services/featchImg';
import Modal from './components/Modal';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
class App extends Component {
   state = {
      images: [],
      currentQuery: '',
      currentPage: 1,
      largeImage: null,
      isLoading: false,
   };

   componentDidUpdate(prevProps, prevState) {
      if (prevState.currentQuery !== this.state.currentQuery) {
         this.fetchImages();
      }
   }
   formHandler = value => {
      this.setState({ currentQuery: value, currentPage: 1, images: [] });
   };

   modalToggle = () => {
      this.setState({ largeImage: '' });
   };
   loaderToogle = () => {
      this.setState(prevState => ({
         isLoading: !prevState.isLoading,
      }));
   };
   fetchImages = () => {
      const { currentQuery, currentPage } = this.state;

      this.loaderToogle();

      fetchImg(currentQuery, currentPage)
         .then(newImages => {
            this.setState(prevState => ({
               images: [...prevState.images, ...newImages],
               currentPage: prevState.currentPage + 1,
            }));
         })
         .finally(() => {
            this.loaderToogle();
            this.scrollTo();
         });
   };
   getLargeImage = largeURL => {
      this.setState({ largeImage: largeURL });
   };

   scrollTo = () => {
      scroll.scrollToBottom();
   };

   render() {
      const { images, largeImage, isLoading } = this.state;
      return (
         <>
            <SearchBar submitHandler={this.formHandler} />
            <ImageGallery images={images} getLargeImage={this.getLargeImage} />
            {isLoading && (
               <div className="loader">
                  <Loader
                     type="BallTriangle"
                     color="#00BFFF"
                     height={80}
                     width={80}
                  />
               </div>
            )}

            {images.length !== 0 && !isLoading && (
               <button
                  type="button"
                  onClick={this.fetchImages}
                  className="loadButton"
               >
                  Load more...
               </button>
            )}

            {largeImage > 0 && (
               <Modal modalToogle={this.modalToggle} imgURL={largeImage} />
            )}
         </>
      );
   }
}

export default App;
