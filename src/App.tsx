import React from 'react';
import Header from "./components/header";
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import {
    AboutPage,
    ContactsPage,
    EducationPage,
    HomePage, TasksPage,
    WorkPage,
} from "./components/pages";
import Menu from "./components/menu";
import Footer from "./components/footer";

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Router>
          <div className="content">
            <Menu />
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/education" component={EducationPage} exact />
            <Route path="/work" component={WorkPage} exact />
            <Route path="/contacts" component={ContactsPage} exact />
            <Route path="/tasks" component={TasksPage} exact />
          </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
