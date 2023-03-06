import { NavLink, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">
          <img
            className="h-7 w-7 ml-2 mt-2"
            src="home_logo.png"
            alt="home logo"
          />
        </NavLink>
        <NavLink to="/favorite-spells">
          <img
            className="h-7 w-7 ml-2 mt-2"
            src="star-icon.png"
            alt="star logo"
          />
        </NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
