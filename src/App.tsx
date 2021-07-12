import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import GlobalStyles from './styles/Global';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <Routes />
        </AuthProvider>
        <GlobalStyles />
    </>
);

export default App;
