
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
            src={"./src/assets/" + props.chat.pictures}
            
            alt="img du chat"
          ></img>
      </div>

      <TitleSection />
      <Footer />
    </div>
  );
}

export default ContainerCard;
