import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          />
          <span className="brand-text font-weight-light">Dumpling Admin</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="#home" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to ="/" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>Dashboard</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#toogle" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Category
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/category" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Category Details</p>
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <a href="#toggle" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Product
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/AddProduct" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Product</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/AllProducts" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Get Product</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
