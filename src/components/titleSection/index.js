import "../titleSection/style.scss";


function TitleSection(props) {
  return (
    <div className="titleSection"> 
      <div className="containerUp">
        <div  className="titleColor">Descriptif</div>

       <div className="textDescibe"> 
      {props.describe} </div>
       
      </div>

      <div className="containerDown">
          <div className="container1">
        <div  className="titleColor">Age :&nbsp; 
        {props.catAge}  </div>
        
        <div className="color">Couleur :&nbsp; {props.catColor} </div>
        </div>
        <div className="sexe">sexe :&nbsp;</div>
        <div className="visibility">{props.visible}</div>
 
      </div>
    </div>
  );
}

export default TitleSection;
