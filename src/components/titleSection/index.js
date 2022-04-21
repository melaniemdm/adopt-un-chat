import "../titleSection/style.scss";
import {chatsListe} from '../../datas/adoptMe'

function TitleSection() {
  return (
    <div id="titleSection">
      <div id="containerUp">
        <div id="descriptif">Descriptif</div>
        {chatsListe.visibility}
      </div>

      <div id="containerDown">
          <div id="container1">
        <div id="age">Age : {chatsListe.age}</div>
        <div id="color">Couleur : {chatsListe.color}</div>
        </div>
        <div id="sexe">sexe :</div>
        <div id="visibility">Visible au refuge</div>
      </div>
    </div>
  );
}

export default TitleSection;
