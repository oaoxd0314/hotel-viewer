import React, { Component } from "react";
import Hero from "../componment/Hero";
import Banner from "../componment/Banner";
import { Link } from "react-router-dom";
import Service from "../componment/Service"
import FeaturedRoom from "../componment/FeaturedRoom";
export default class home extends Component {
  render() {
    return (
      <>
      <Hero hero="defaultHero">
        <Banner title="Premium Suite" subtitle="just $299 for now on">
          <Link to="/rooms" className="btn-primary">
            chek now
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRoom />
      </>
    );
  }
}
