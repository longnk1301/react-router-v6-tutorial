import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const Sidebar = () => {
  const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };
  return (
    <ul className="nav nav-pills flex-column">
      <CustomLink to="/">Dashboard</CustomLink>
      <CustomLink to="/orders">Orders</CustomLink>
      <CustomLink to="/products">
        Products
        <ul className="mt-1">
          <li className="nav-item">
            <CustomLink to="/products/laptop">Laptop</CustomLink>
            <li className="nav-item">
              <CustomLink to="/products/desktop">Desktop</CustomLink>
            </li>
          </li>
        </ul>
      </CustomLink>
      <CustomLink to="/customers">Customers</CustomLink>
    </ul>
  );
};
