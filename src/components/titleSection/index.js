import "../titleSection/style.scss";

function TitleSection(props) {
  if (props.describe) {
    return (
      <div className="titleSection">
        <div className="titleColor describe">Descriptif</div>

        <div className="textDescibe">{props.describe} </div>
      </div>
    );
  }
if(props.sexeChat==="Femelle"){
  return (
    <div className="titleSection">
      <div className="containerDown">
        <div className="titleColor">Age :&nbsp; </div>
        <div className="txt "> {props.catAge}</div>

        <div className="titleColor color"> Couleur :&nbsp; </div>
        <div className="txt "> {props.catColor} </div>
      </div>
      <div className="containerDown secondSection">
        <div className="titleColor">
          {props.sexeChat}&nbsp;{" "}
          <img
            className="chatsexeImg"
            src="/imgChat/femelle.png"
            alt="indication sexe du chat"
          ></img>
        </div>
        <div className="titleColor"></div>
        <div className="ttitleColor visible"> {props.visible}</div>
      </div>
    </div>
  );
}
  return (
    <div className="titleSection">
      <div className="containerDown">
        <div className="titleColor">Age :&nbsp; </div>
        <div className="txt "> {props.catAge}</div>

        <div className="titleColor color"> Couleur :&nbsp; </div>
        <div className="txt "> {props.catColor} </div>
      </div>
      <div className="containerDown secondSection">
        <div className="titleColor">
          {props.sexeChat}&nbsp;{" "}
          <img
            className="chatsexeImg"
            src="/imgChat/male.png"
            alt="indication sexe du chat"
          ></img>
        </div>
        <div className="titleColor"></div>
        <div className="titleColor visible"> {props.visible}</div>
      </div>
    </div>
  );
}

export default TitleSection;
