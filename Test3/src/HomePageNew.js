import "./index.css";
import "./App.css";
import walletPic from "./img/wallet-img.jpg";
import icon0x from "./img/0x.png";
import iconAave from "./img/aave.jpeg";
import iconApeCoin from "./img/ApeCoin.jpeg";
import iconPlus from "./img/+.jpg";
import messenger1 from "./img/messenger-1.avif";
import messenger2 from "./img/messenger-2.jpg";
import messenger3 from "./img/messenger-3.jpg";
import userPic from "./img/User-pic.avif";
import settingsIcon from "./img/settings.jpg";
import aragon from "./img/aragon.jpeg";
import arbitrum from "./img/arbitrum.png";
import bitdao from "./img/bitdao.webp";
import compound from "./img/compound.png";
import dash from "./img/dash.png";
import developerDAO from "./img/developerDAO.png";
import illuvium from "./img/illuvium.png";
import makerdao from "./img/makerdao.jpeg";
import protocolDAO from "./img/protocol DAO.png";
import sushiswap from "./img/sushiswap.png";
import synthetix from "./img/synthetix.png";
import uniswap from "./img/uniswap.webp";
import OffcanvasNavbar from "./components/offCanvasNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewHomePage() {

    const [popupEnabled, setPopupEnabled] = useState(false);
    // const { name, createdOn, description } = community;
    // const createdOnDate = createdOn.toDate().toLocaleString();

    const navigate = useNavigate();
   
   
    const handleRedirect = () => {
        navigate('/channels');
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
                <div id="container">
                    <img src={arbitrum} id="community-pic"></img>
                    <p id="community-name">ARBITRUM</p>
                    <p id="community-info-1">Arbitrum (ARB) is a layer-2 scaling solution designed to address the pressing challenges of scalability and high transaction fees within the Ethereum blockchain.</p>
                    <p id="community-info-2">Started on August 31, 2021
                    <br></br> 1M Members </p>
                    <button onClick={handleRedirect} id="join-button">JOIN</button>
                </div>
            </div>
            : "") 
        }


  return (
    <>
      {/* <div id="topbar">
        <p id="ddiscord">DDISCORD</p>
        <p id="tb-midspace"></p>
        <button id="wallet">WALLET</button>
        <img id="wallet-icon" src={walletPic} alt="Wallet Icon" />
      </div> */}

      <OffcanvasNavbar />

      <Popup />

      <div id="page">
        
        <div id="dao-column">
          <button id="add-dao-button"><img className="dao-icon" src={icon0x} alt="0x" /></button>
          <button id="add-dao-button"><img className="dao-icon" src={iconAave} alt="Aave" /></button>
          <button id="add-dao-button"><img className="dao-icon" src={iconApeCoin} alt="ApeCoin" /></button>
          <button id="add-dao-button"><img src={iconPlus} id="plus" alt="Plus Icon" /></button>
        </div>
       
        <div id="main-page">
          <div className="nav-bar">
            <button className="nav-buttons">Updates</button>
            <button className="nav-buttons">Explore</button>
            <input className="search-bar" type="text" placeholder="Search" />
          </div>
          
          <div id="actual-page">
            <div className="overall-message">
              <div id="direct-message-column">
                <p id="direct-messeges">DIRECT MESSAGES</p>
                <div className="messenger">
                
                
                  <img className="messenger-pic" src={messenger1} alt="Messenger 1" />
                  <button className="dm-name"><p className="messenger-name">Penguin</p></button>
                </div>
                
                <div className="messenger">
                  <img className="messenger-pic" src={messenger2} alt="Messenger 2" />
                  <button className="dm-name"><p className="messenger-name">0xYellowfellow</p></button>
                </div>
               
                <div className="messenger">
                  <img className="messenger-pic" src={messenger3} alt="Messenger 3" />
                  <button className="dm-name"><p className="messenger-name">YoAvgHomie</p></button>
                </div>

                <a href="http://localhost:3000"><button id="vid" className="dm-name">Video Call Feature</button></a>

                <div id="profile-n-setting">
                  <img id="user-pic" src={userPic} alt="User" />
                  <p id="username">#BadassGenius</p>
                  <button className="setting-button"><img id="setting-icon" src={settingsIcon} alt="Settings" /></button>
                </div>
              </div>
            </div>
             
            <div id="final-inner-page">
              <div className="dao-tile">
                <img className="dao-search-icon" src={aragon} alt="Aragon" />
                <p className="dao-name">ARAGON</p>
                <p className="member-count">80K Members</p>
                <button onClick={join} className="dao-join">JOIN</button>
              </div> 
              <div className="dao-tile">
                <img className="dao-search-icon" src={arbitrum} alt="Arbitrum" />
                <p className="dao-name">ARBITRUM</p>
                <p className="member-count">1M Members</p>
                <button onClick={join} className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={bitdao} alt="BitDAO" />
                <p className="dao-name">BitDAO</p>
                <p className="member-count">85K Members</p>
                <button onClick={join} className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={compound} alt="Compound" />
                <p className="dao-name">COMPOUND</p>
                <p className="member-count">99K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={dash} alt="Dash" />
                <p className="dao-name">DASH</p>
                <p className="member-count">89K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={developerDAO} alt="DeveloperDAO" />
                <p className="dao-name">DeveloperDAO</p>
                <p className="member-count">82K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={illuvium} alt="Illuvium" />
                <p className="dao-name">ILLUVIUM</p>
                <p className="member-count">91K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={makerdao} alt="MakerDAO" />
                <p className="dao-name">MakerDAO</p>
                <p className="member-count">93K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={protocolDAO} alt="ProtocolDAO" />
                <p className="dao-name">ProtocolDAO</p>
                <p className="member-count">95K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={sushiswap} alt="Sushiswap" />
                <p className="dao-name">SUSHISWAP</p>
                <p className="member-count">78K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={synthetix} alt="Synthetix" />
                <p className="dao-name">SYNTHETIX</p>
                <p className="member-count">84K Members</p>
                <button className="dao-join">JOIN</button>
              </div>
              <div className="dao-tile">
                <img className="dao-search-icon" src={uniswap} alt="Uniswap" />
                <p className="dao-name">UNISWAP</p>
                <p className="member-count">1.1M Members</p>
                <button className="dao-join">JOIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
