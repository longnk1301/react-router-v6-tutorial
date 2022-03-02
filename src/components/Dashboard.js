import { Sidebar } from './SideBar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />
      <button onClick={() => navigate('orders')}>Go to Orders</button>(Navigate
      programmatically)
      <br />
      <button onClick={() => navigate('orders', { replace: true })}>
        Go to Orders
      </button>
      (useNavigate with replace true, if use this, can not back url)
    </div>
  );
}

export default Dashboard;
