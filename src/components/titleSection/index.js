import "../titleSection/style.scss";

function TitleSection() {
  return (
    <div id="titleSection">
      <div id="containerUp">
        <div id="descriptif">Descriptif</div>
      </div>

      <div id="containerDown">
          <div id="container1">
        <div id="age">Age : </div>
        <div id="color">Couleur : </div>
        </div>
        <div id="sexe">sexe :</div>
        <div id="visibility">Visible au refuge</div>
      </div>
    </div>
  );
}

export default TitleSection;
