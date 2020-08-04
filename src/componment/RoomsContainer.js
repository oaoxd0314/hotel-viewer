import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";


function RoomsContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer)


// normal way to build consumer
// export default function RoomsContainer() {
//   return (
// <RoomConsumer>
//   {(value) => {
//     const {loading,rooms,sortedRooms}=value
//     if (loading) {
//       return <Loading />;
//     }
//     console.log(value);
//     return (
//       <div>
//         <RoomsFilter rooms={rooms}/>
//         <RoomsList rooms={sortedRooms} />
//       </div>
//     );
//   }}
// </RoomConsumer>
//   );
// }
