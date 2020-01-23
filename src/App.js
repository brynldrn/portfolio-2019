import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./assets/scss/main.scss";
// Pages
import Home from "./pages/Home";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";

// Hooks
import useDarkMode from "./hooks/useDarkMode";

// Apollo Client Setup
const client = new ApolloClient({
  uri: "https://api-apeast.graphcms.com/v1/cjqxhy3af88o801dnxok0ru3c/master",
  cache: new InMemoryCache()
});

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ApolloProvider client={client}>
      <Router>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Header />
        <main className="app">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </ApolloProvider>
  );
};

export default App;
