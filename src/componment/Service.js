import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Service extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "info for som info for something info for something info for something info for something info for something",
      },
      {
        icon: <FaHiking />,
        title: "Hiking Everyday",
        info:
          "info for som info for something info for something info for something info for something info for something",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "info for som info for something info for something info for something info for something info for something",
      },
      {
        icon: <FaBeer />,
        title: "strongest Beer",
        info:
          "info for som info for something info for something info for something info for something info for something",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
