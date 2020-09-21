import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
import { db } from "./firebase.js";
// import { Icon } from "@material-ui/core";

function SidebarOption({ Icon, id, title, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/Rooms/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("Rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash"> # </span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
