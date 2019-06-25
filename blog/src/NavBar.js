import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles-list">Articles</Link>
                </li>
            </ul>
        </nav>
    </div>

);

export default NavBar;
