import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.state.isOpen);
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt=" " />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleClick}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          {/* css 預設 nav-link 的高度是0 overflow(溢出)會hidden => 因為高度0多而出來的字被hidden */}
          {/* onclick 會改變高度(show-nav) 所以沒溢出的 li 內容就會顯現  */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
