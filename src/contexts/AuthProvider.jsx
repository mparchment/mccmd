import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../firebase-config';
import PropTypes from 'prop-types';

const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsUserLoggedIn(true);
                setUserName(user.displayName || "User");
            } else {
                setIsUserLoggedIn(false);
                setUserName(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const value = {
        isUserLoggedIn,
        userName
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;