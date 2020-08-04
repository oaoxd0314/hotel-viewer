import React, { Component } from "react";
import Hero from "../componment/Hero";
import Banner from "../componment/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../componment/RoomsContainer"
export default class Rooms extends Component {
  render() {
    return (
      <>
      <Hero hero="roomsHero">
        <Banner title="Our rooms">
          <Link to="/" className="btn-primary">
            return home page
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer/>
      </>
    );
  }
}
