import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Customers from './components/Customers';
import NotFound from './components/NotFound';
import Laptop from './components/Laptop';
import Desktop from './components/Desktop';
import BestSeller from './components/BestSeller';
import { CustomerDetail } from './components/CustomerDetail';
import { useNavigate } from 'react-router-dom';

//Lazy loading
const LazyProducts = React.lazy(() => import('./components/Products'));

function App() {
  const navigate = useNavigate();

  return (
    <>
      <>
        <button onClick={() => navigate(-2)}>Go 2 pages back</button>
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate(1)}>Go forward</button>
        <button onClick={() => navigate(2)}>Go 2 pages forward</button>
        (useNavigate with history)
      </>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />

        {/* Lazy loading */}
        <Route
          path="/products"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LazyProducts />
            </React.Suspense>
          }
        >
          {/*  Index routes */}
          <Route index element={<BestSeller />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="desktop" element={<Desktop />} />
        </Route>
        <Route path="/customers" element={<Customers />} />
        {/* Dynamic routes */}
        <Route path="/customers/:customersId" element={<CustomerDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
