const ImageGalleryItem = ({ id, url, onClickHandler }) => {
   return (
      <li className="ImageGalleryItem" key={id}>
         <img
            src={url}
            alt="noalt"
            className="ImageGalleryItem-image"
            height="200"
            onClick={onClickHandler}
         />
      </li>
   );
};

export default ImageGalleryItem;
