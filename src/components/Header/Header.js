import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Auth0Context } from '../../contexts/auth0-context';

const Header = () => {
    const auth0 = useContext(Auth0Context);
    const {
        isLoading,
        user,
        loginWithRedirect,
        getIdTokenClaims,
        logout,
    } = useContext(Auth0Context);
    // console.log(user);
    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__link">
                    Movie
                    <br />
                    Site
                </Link>
                {!isLoading && !user && (
                    <button onClick={auth0.loginWithRedirect}>
                        Login
                    </button>
                )}
                {!isLoading && user && (
                    <>
                        <div className="header__login">
                            <p>
                                {user.picture && (
                                    <img
                                        src={user.picture}
                                        alt="My Avatar"
                                    />
                                )}
                                {user.name}
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                console.log(getIdTokenClaims());
                            }}
                        >
                            get
                        </button>
                        <button
                            onClick={() =>
                                logout({
                                    returnTo: window.location.origin,
                                })
                            }
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
