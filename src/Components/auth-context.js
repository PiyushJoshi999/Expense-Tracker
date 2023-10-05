import React, { useState } from 'react';

const generateRandomUserId = () => {
  // Function to generate a random user ID (8 characters long)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const userIdLength = 8;
  let userId = '';
  for (let i = 0; i < userIdLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    userId += characters[randomIndex];
  }
  return userId;
};

const AuthContext = React.createContext({
  userId: '',
  isLoggedIn: false,
  login: (userId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialUserId = localStorage.getItem('userId');
  const [userId, setUserId] = useState(initialUserId || '');

  const userIsLoggedIn = !!userId;

  const loginHandler = () => {
    const generatedUserId = generateRandomUserId();
    setUserId(generatedUserId);
    localStorage.setItem('userId', generatedUserId);
  };

  const logoutHandler = () => {
    setUserId('');
    localStorage.removeItem('userId');
  };

  const contextValue = {
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
