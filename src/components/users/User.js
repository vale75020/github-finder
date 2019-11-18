import React, { Component } from "react";

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login); // the same login of the item i clicked
  }

  render() {
    const {
      name,
      avatar,
      url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireble
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}
