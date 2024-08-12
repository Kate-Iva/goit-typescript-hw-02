import classes from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  pageCounter: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ pageCounter }) => {
  return (
    <button className={classes.loadMoreBtn} onClick={pageCounter}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;