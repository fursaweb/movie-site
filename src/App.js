import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './navigation/routes.js';
import { store } from './store/store.js';

// import { saveState } from './helpers/localStorage.js';

//Services
import { db, auth } from './services/firebase';

//Styles
import 'antd/dist/antd.css';
import './App.scss';

// store.subscribe(() => {
//     saveState({
//         favoriteMovies: store.getState().movies,
//         favoriteMovies: store.getState().favoriteMovies,
//         favoriteMoviesIDs: store.getState().favoriteMoviesIDs,
//         users: store.getState().users,
//         comments: store.getState().comments,
//     });
// });

class App extends Component {
    state = {
        authenticated: false,
        loading: true,
    };

    componentDidMount() {
        auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false,
                });
            }
        });

        // await db.ref('users/').once('value', snapshot => {
        //     console.log(snapshot.val());
        //     //   this.setState({ user, isLoading: false });
        // });

        // try {
        //     console.log(auth().currentUser.displayName);
        //     // db.ref('users/' + auth().currentUser.uid).set({
        //     //     userEmail: auth().currentUser.email,
        //     //     // userName: getNameFromEmail(auth().currentUser.email),
        //     //     userId: auth().currentUser.uid,
        //     //     userPic: '',
        //     // });
        // } catch (error) {
        //     console.log(error);
        // }
    }

    render() {
        return (
            <Provider store={store}>
                <Routes {...this.state} />
            </Provider>
        );
    }
}

export default App;
