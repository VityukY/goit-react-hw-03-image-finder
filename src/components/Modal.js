import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRootRef = document.querySelector('#modal-root');

export default class Modal extends Component {
   state = {};
   clickHandler = e => {
      if (e.target === e.currentTarget) {
         this.props.modalToogle();
      }
   };
   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDonw);
   }

   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDonw);
   }

   handleKeyDonw = e => {
      if (e.code === 'Escape') {
         this.props.modalToogle();
      }
   };

   loaderToogle = () => {
      this.setState(prevState => ({
         isLoading: !prevState.isLoading,
      }));
   };

   render() {
      return createPortal(
         <div className="modal" onClick={this.clickHandler}>
            <div className="modal-content">
               <img src={this.props.imgURL} alt="" />
            </div>
         </div>,
         modalRootRef,
      );
   }
}
