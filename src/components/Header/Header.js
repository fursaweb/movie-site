import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../services/firebase';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__link">
                    Movie
                    <br />
                    Site
                </Link>
                {!auth().currentUser && <button>Login</button>}
                {auth().currentUser && (
                    <>
                        <div className="header__login">
                            <p>
                                {/* {user.picture && (
                                    <img
                                        src={user.picture}
                                        alt="My Avatar"
                                    />
                                )} */}
                                {auth().currentUser.displayName}
                            </p>
                        </div>
                        <button
                            // onClick={}
                            className="button is-small is-dark"
                        >
                            Logout
                        </button>
                        <Link to="/private">Личный кабинет</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
