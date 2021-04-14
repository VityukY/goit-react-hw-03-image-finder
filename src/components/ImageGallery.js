import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, getLargeImage }) => {
   return (
      <ul className="ImageGallery">
         {images.map(image => (
            <ImageGalleryItem
               id={image.id}
               url={image.webformatURL}
               onClickHandler={() => {
                  getLargeImage(image.largeImageURL);
               }}
            />
         ))}
      </ul>
   );
};

export default ImageGallery;
