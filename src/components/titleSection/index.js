import "../titleSection/style.scss";

function TitleSection(props) {
  if (props.describe) {
    return (
      <div className="titleSection">
        <div className="describe"></div>

        <div className="textDescibe">Salut! moi c'est {props.describe} </div>
      </div>
    );
  }
if(props.sexeChat==="Femelle"){
  return (
    <div className="containerDetailCat">
    <div className="contaireDetailLeft">
        <div className="age bold">Age :&nbsp; </div>
        <div className="txt"> {props.catAge}</div>

        <div className="color bold"> Couleur :&nbsp; </div>
        <div className="txt"> {props.catColor} </div>
        </div>
   <div className="contaireDetailRight">
        <div className="sexe">
          {props.sexeChat}&nbsp;{" "}
          <img
            className="chatsexeImg"
            src="/adopt-un-chat/imgChat/femelle.png"
            alt="indication sexe du chat"
          ></img>
        </div>
        <div className=""></div>
        <div className="visible"> {props.visible}</div>
     </div>
    </div>
  );
}
  return (
    <div className="containerDetailCat">
    <div className="contaireDetailLeft">
        <div className="age bold">Age :&nbsp; </div>
        <div className="txt "> {props.catAge}</div>

        <div className="color bold"> Couleur :&nbsp; </div>
        <div className="txt "> {props.catColor} </div>
        </div>
        <div className="contaireDetailRight">
        <div className="sexe">
          {props.sexeChat}&nbsp;{" "}
          <img
            className="chatsexeImg"
            src="/adopt-un-chat/imgChat/male.png"
            alt="indication sexe du chat"
          ></img>
        </div>
        <div className=""></div>
        <div className="visible"> {props.visible}</div>
        </div>
    </div>
  );
}

export default TitleSection;
