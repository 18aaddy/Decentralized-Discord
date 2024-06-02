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
            <div className="popup">
                <h2>PopUp Window</h2>
                <button onClick={() => {setPopupEnabled(false)}} data-bs-toggle="collapse" type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
                <div className="container">
                    <p>Some Random Text</p>
                    <button onClick={handleRedirect}>Join</button>
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