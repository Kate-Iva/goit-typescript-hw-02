import classes from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({
  imageItem,
  modalOpened,
  setDataImage,
}) => {
  const handleImageClick = () => {
    setDataImage(imageItem);
    modalOpened();
  };
  return (
    <div className={classes.imageCard}>
      <img
        src={imageItem.urls.small}
        alt={imageItem.alt_description}
        className={classes.image}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ImageCard;