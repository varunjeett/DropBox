import React, { useState } from "react";
import { db } from "./firebase";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
import firebase from 'firebase';


function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection("Rooms").doc(channelId).collection("Messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>

      </form>
    </div>
  );
}

export default ChatInput;
