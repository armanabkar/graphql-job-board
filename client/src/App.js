import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isLoggedIn, logout } from "./utils/auth";
import { CompanyDetail } from "./pages/CompanyDetail";
import { LoginForm } from "./pages/LoginForm";
import { JobBoard } from "./pages/JobBoard";
import { JobDetail } from "./pages/JobDetail";
import { JobForm } from "./pages/JobForm";
import { NavBar } from "./components/NavBar";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: isLoggedIn() };
  }

  handleLogin() {
    this.setState({ loggedIn: true });
    this.router.history.push("/");
  }

  handleLogout() {
    logout();
    this.setState({ loggedIn: false });
    this.router.history.push("/");
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Router ref={(router) => (this.router = router)}>
        <div>
          <NavBar loggedIn={loggedIn} onLogout={this.handleLogout.bind(this)} />
          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/" component={JobBoard} />
                <Route path="/companies/:companyId" component={CompanyDetail} />
                <Route exact path="/jobs/new" component={JobForm} />
                <Route path="/jobs/:jobId" component={JobDetail} />
                <Route
                  exact
                  path="/login"
                  render={() => (
                    <LoginForm onLogin={this.handleLogin.bind(this)} />
                  )}
                />
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}
