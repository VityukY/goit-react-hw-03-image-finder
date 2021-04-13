const ImageGalleryItem = ({ id, url }) => {
   return (
      <li key={id} className="ImageGalleryItem">
         <img src={url} alt="" className="ImageGalleryItem-image" />
      </li>
   );
};

export default ImageGalleryItem;
