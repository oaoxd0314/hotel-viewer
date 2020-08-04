import React, { Component } from "react";
import { RoomContext } from "../context";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../componment/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../componment/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [main, ...defaultPic] = images;
    return (
      <>
        <StyledHero img={main || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultPic.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>detail</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>info</h3>
              <h6>price : ${price} </h6>
              <h6>size : {size} SQFT </h6>
              <h6>
                Max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? `pets allowed` : `not allowed pets`}</h6>
              <h6>{breakfast && "free breakfast incoluded"}</h6>
              {/*y1 && y2 => if y1=true return y2 or if y1y2 =true return true !true return false*/}
            </article>
          </div>

          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {extras.map((item, index) => {
                return <li key={index}>-{item}</li>;
              })}

              {/* for contenful */}
              
              {/* {extras && Object.values(extras).map((item, index) => {
                  return <li key={index}>- {item}</li>
                })} */}
            </ul>
          </section>
        </section>
      </>
    );
  }
}
