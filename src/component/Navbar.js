import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setSearchNews, searchNews }) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/" style={{ color: "orangered" }}>NEWS Hub<span style={{ color: "white", marginLeft: "2px" }}>.</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/">General</Link>
                            </li>
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/science">Science </Link>
                            </li>
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item pr-3">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchNews} onChange={(e) => setSearchNews(e.target.value)} />
                            <button className="btn btn-outline-success" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;