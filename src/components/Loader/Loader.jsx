import classes from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ initial }) => {
  return (
    <div className={initial ? classes.initialLoader : classes.loader}>
      <ThreeDots
  visible={true}
  height={80}
  width={80}
  color="#5056b9"
  radius={9}
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  initial: PropTypes.bool,
};