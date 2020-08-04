import React, { Component } from "react";
import Hero from "../componment/Hero";
import Banner from "../componment/Banner";
import { Link } from "react-router-dom";
import Service from "../componment/Service"
import FeaturedRoom from "../componment/FeaturedRoom";
import Button from "../componment/StyledHero";
export default class home extends Component {
  render() {
    return (
      <>
      <Hero hero="defaultHero">
        <Banner title="頂級套房" subtitle="最低$299起">
          <Link to="/rooms" className="btn-primary">
            現在查看
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRoom />
      </>
    );
  }
}
