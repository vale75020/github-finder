import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then(res => console.log(res.data));
  // }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar title="Github Finder" icon="fab fa-github" /> */}
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
