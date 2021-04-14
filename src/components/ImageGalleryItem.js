const ImageGalleryItem = ({ id, url }) => {
   return (
      <li className="ImageGalleryItem" key={id}>
         <img src={url} alt="noalt" className="ImageGalleryItem-image" />
      </li>
   );
};

export default ImageGalleryItem;
