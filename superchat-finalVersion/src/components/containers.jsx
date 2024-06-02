import "../App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// const container = {
//     name: "Community Name",
//     members: 0,
//     createdOn: 0
// };


function Container({community}) {
    
    const [popupEnabled, setPopupEnabled] = useState(false);
    const { name, createdOn, description } = community;
    const createdOnDate = createdOn.toDate().toLocaleString();

    const navigate = useNavigate();
   
   
    const handleRedirect = () => {
        navigate('/community');
    };

    const join = () => {
        setPopupEnabled(true);
    }

    //////////////////
    ////  PopUp   ////
    //////////////////

    const Popup = () => {
        return (popupEnabled ? 
            <div className="popup" id="popup">
                <button onClick={() => {setPopupEnabled(false)}} data-bs-toggle="collapse" type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close" id="close-button"></button>
                <h1 id="popup-heading">COMMUNITY INFO</h1>
                <div className="container">
                    <img src="" id="community-pic"></img>
                    <p id="community-name">{name}</p>
                    <p id="community-info">It is a description of the community.
                    <br></br>Also when it was started
                    <br></br> and member count <br></br>just checking</p>
                    <button onClick={handleRedirect} id="join-button">JOIN</button>
                </div>
            </div>
            : "") 
    }

    return (
        <div className="community-containers">
            <h2>{name}</h2>
            <h4>{createdOnDate}</h4>
            <h4>{description}</h4>
            <button onClick={join}>Join</button>
            <Popup />
        </div>
    )
}



export default Container;
