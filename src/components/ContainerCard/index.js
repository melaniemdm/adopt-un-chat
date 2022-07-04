//import rio from '../../assets/rio.png'
//import mia from '../../assets/mia.png'

import "../ContainerCard/style.scss";
import TitleSection from "../titleSection";
import Footer from "../../layout/Footer";
import Header from '../../layout/Header';

function ContainerCard(props) {
    
  return (
    <div className="container">
     <Header/>
   <div className="containerImgDescription">
   
<div class="talk-bubble tri-right round border right-top">
  <div class="talktext">
    <TitleSection idImgChat={props.chat.id} picture={props.chat.pictures}  describe={props.chat.description}/>
   
  </div>

</div>

<div className="containerImg">
      <img
            className="chatImg"
            src={props.chat.pictures}
            alt="img du chat"
          ></img>
      </div>
</div>
<div className="containerDescriptionDetail">
 <TitleSection idImgChat={props.chat.id}  visible={props.chat.visibility} catColor ={props.chat.color} catAge={props.chat.age} sexeChat={props.chat.sexe} /></div>
 <Footer />


      
  </div>
  );
}

export default ContainerCard;
