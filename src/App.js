import React from 'react';
import './config/ReactotronConfig';
import AuthContext from './AuthContext';
import Routes from './routes/routes';

const App = () => {
  return (
    <AuthContext>
      <Routes />
    </AuthContext>
  );
};

export default App;
