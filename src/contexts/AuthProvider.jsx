import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth, db } from '../firebase-config';
import PropTypes from 'prop-types';
import { doc, getDoc } from 'firebase/firestore';

const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: ''
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setIsUserLoggedIn(true);
    
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const userDataFromDb = userDoc.data();
                    setUserData({
                        ...userDataFromDb,
                        uid: user.uid
                    });
                }
    
            } else {
                setIsUserLoggedIn(false);
                setUserData({});
            }
        });
    
        return () => unsubscribe();
    }, []);
    
    const updateUserData = (newData) => {
        setUserData(prevData => ({ ...prevData, ...newData }));
    };

    const value = {
        isUserLoggedIn,
        userData,
        updateUserData
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
