//import rio from '../../assets/rio.png'
//import mia from '../../assets/mia.png'

import "../ContainerCard/style.scss";
import TitleSection from "../titleSection";
import Footer from "../Footer";


function ContainerCard(props) {
    
  return (
    <div id="container">
      <h1 id="title">ADOPT UN CHAT !</h1>
      <div id="containerImg">
      <img
            className="chat"
            id="chatImg"
            src={props.picture}
            
            alt="img du chat"
          ></img>
      </div>

      <div id="containerListeTitle"><TitleSection idImgChat={props.chat.id} picture={props.chat.pictures} visible={props.chat.visibility} catColor ={props.chat.color} catAge={props.chat.age} describe={props.chat.description}/></div>
      <Footer />
    </div>
  );
}

export default ContainerCard;
