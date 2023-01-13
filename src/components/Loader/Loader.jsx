import { Circles as Spinner } from 'react-loader-spinner';
import './Loader.module.css';

export const Loader = () => {
  return (
    <div>
      <Spinner
        height="70"
        width="70"
        radius="9"
        color="#fff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
