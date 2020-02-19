import React, { createContext, useEffect, useState, useMemo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { login, register } from './services/User';

export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(res => setUser(JSON.parse(user)))
      .catch(err => console.log(err));
  }, [user]);

  const userHandle = useMemo(
    () => ({
      data: user,
      register: async (name, username, email, password) => {
        try {
          const response = await register(name, username, email, password);
          await AsyncStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      },
      login: async (email, password) => {
        try {
          const response = await login(email, password);
          await AsyncStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      },
      logout: async () => {
        await AsyncStorage.clear();
      },
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={userHandle}>{children}</AuthContext.Provider>
  );
};
export default Auth;
