import "../App.css";
import { useState } from "react";
import "./popup.css";

const container = {
    name: "Community Name",
    members: 0,
    createdOn: 0
};


function Container() {
    
    const [popupEnabled, setPopupEnabled] = useState(false);
    const [displayChatroom, setDisplayChatroom] = useState(false);

    const join = () => {
        setPopupEnabled(true);
    }

    //////////////////
    ////  PopUp   ////
    //////////////////

    const Popup = () => {
        return (popupEnabled ? 
            <div className="popup">
                <h2>PopUp Window</h2>
                <button onClick={() => {setPopupEnabled(false)}}>Close</button>
                <div className="container">
                    <p>Some Random Text</p>
                    <button onClick={() => {}}>Join</button>
                </div>
            </div>
            : "") 
    }

    return (
        <div className="container">
            <h2>{container.name}</h2>
            <h3>{container.members}</h3>
            <h3>{container.createdOn}</h3>
            <button onClick={join}>Join</button>
            <Popup />
        </div>
    )
}



export default Container;