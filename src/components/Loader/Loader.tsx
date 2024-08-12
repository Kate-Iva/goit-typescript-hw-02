import classes from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

interface LoaderProps {
  initial: boolean;
}

const Loader: React.FC<LoaderProps> = ({ initial = false }) => {
  return (
    <div className={initial ? classes.initialLoader : classes.loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3c2796"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;