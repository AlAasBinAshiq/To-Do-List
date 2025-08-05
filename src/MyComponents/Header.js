import React from 'react';
import { Link } from 'react-router-dom'; // Correct import: Use 'Link' instead of 'link'
import PropTypes from 'prop-types';

export default function Header(props) {
  const headerStyle = {
    backgroundColor: '#f8f3ef',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '600',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: '#050506ff',
    fontSize: '18px',
  
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={headerStyle}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"  aria-current="page" to="/" style={navStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={navStyle}>
                About
              </Link>
            </li>
          </ul>
          {props.searchbar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: 'Title Place here',
  searchbar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool,
};