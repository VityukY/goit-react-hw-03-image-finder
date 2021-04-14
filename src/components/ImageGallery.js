import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images }) => {
   return (
      <ul className="ImageGallery">
         {images.map(image => (
            <ImageGalleryItem id={image.id} url={image.previewURL} />
         ))}
      </ul>
   );
};

export default ImageGallery;
