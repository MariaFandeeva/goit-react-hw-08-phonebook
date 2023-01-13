import { Circles as Spinner } from 'react-loader-spinner';

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
