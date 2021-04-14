const ImageGalleryItem = ({ id, url }) => {
   return (
      <li className="ImageGalleryItem" key={id}>
         <img src={url} alt="noalt" className="ImageGalleryItem-image" width='250' height='160' />
      </li>
   );
};

export default ImageGalleryItem;
