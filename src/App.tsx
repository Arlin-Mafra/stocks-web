import React from "react";
import GlobalStyles from "./styles/Global";
import Signin from "./pages/Signin";

const App: React.FC = () => {
  return (
    <>
      <Signin />
      <GlobalStyles />
    </>
  );
};

export default App;
