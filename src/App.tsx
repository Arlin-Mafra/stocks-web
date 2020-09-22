import React from "react";
import GlobalStyles from "./styles/Global";
import Routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
