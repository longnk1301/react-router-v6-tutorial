import { useSearchParams } from 'react-router-dom';

const Laptop = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // Search params
  return (
    <>
      <button onClick={() => setSearchParams({ product: 'laptop' })}>
        Laptop
      </button>
      <button
        onClick={() =>
          setSearchParams({ product: 'laptop', stock: 'in-stock' })
        }
      >
        Còn hàng
      </button>
      <button onClick={() => setSearchParams({})}>Clear</button>{' '}
    </>
  );
};

export default Laptop;
