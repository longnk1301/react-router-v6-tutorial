import { useParams } from 'react-router-dom';

export const CustomerDetail = () => {
  const params = useParams();
  return <h2>Customer Detail: {params.customersId}</h2>;
};
