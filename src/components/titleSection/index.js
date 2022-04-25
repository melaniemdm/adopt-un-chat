import "../titleSection/style.scss";

function TitleSection(props) {
  if (props.describe) {
    return (
      <div className="titleSection">
        <div className="titleColor">Descriptif</div>

        <div className="textDescibe">{props.describe} </div>
      </div>
    );
  }

  return (
    <div className="titleSection">
      <div className="containerDown">
        <div className="titleColor">Age :&nbsp; </div>
        <div className="txt cathegory"> {props.catAge}</div>

        <div className="titleColor"> Couleur :&nbsp; </div>
        <div className="txt cathegory"> {props.catColor} </div>
      </div>
      <div className="containerDown secondSection">
        <div className="titleColor">
          {props.sexeChat}&nbsp;{" "}
          <img
            className="chatsexeImg"
            src={props.sexeChatImg}
            alt="indication sexe du chat"
          ></img>
        </div>
        <div className="titleColor"></div>
        <div className="txt cathegory"> {props.visible}</div>
      </div>
    </div>
  );
}

export default TitleSection;
