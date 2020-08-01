import React, { Component } from "react";
import Hero from "../componment/Hero";
import Banner from "../componment/Banner";
import { Link } from "react-router-dom";
export default class Error extends Component {
  render() {
    return (
      <Hero>
        <Banner title="Oops" subtitle="There're nothing,  why don't we go back">
          <Link to="/" className="btn-primary">
            return home page
          </Link>
        </Banner>
      </Hero>
    );
  }
}
