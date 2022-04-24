//import rio from '../../assets/rio.png'
//import mia from '../../assets/mia.png'

import "../ContainerCard/style.scss";
import TitleSection from "../titleSection";
import Footer from "../Footer";


function ContainerCard(props) {
    
  return (
    <div className="container">
      <h1 className="title">ADOPT UN CHAT !</h1>
      <div className="bodyCard"> 
      <div className="containerImg">
      <img
            className="chatImg"
            src={props.chat.pictures}
            alt="img du chat"
          ></img>
      </div>

     <TitleSection idImgChat={props.chat.id} picture={props.chat.pictures}  describe={props.chat.description}/></div>

     <TitleSection idImgChat={props.chat.id}  visible={props.chat.visibility} catColor ={props.chat.color} catAge={props.chat.age} />
     
      <Footer />
    </div>
  );
}

export default ContainerCard;
