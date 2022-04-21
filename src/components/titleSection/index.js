import "../titleSection/style.scss";
import {chatsListe} from '../../datas/adoptMe'

function TitleSection() {
  return (
    <div id="titleSection">
      <div id="containerUp">
        <div id="descriptif" className="titleColor">Descriptif</div>

       <div id="textDescibe"> 
       <div> {chatsListe[0].description} </div>
       </div>
      </div>

      <div id="containerDown">
          <div id="container1">
        <div id="age" className="titleColor">Age :&nbsp; </div>
        <div> {chatsListe[0].age}  </div>
        
        <div id="color" className="titleColor">Couleur :&nbsp; </div>
        <div> {chatsListe[0].color} </div>
        </div>
        <div id="sexe" className="titleColor">sexe :&nbsp;</div>
        <div id="visibility" className="titleColor">Visible au refuge</div>
      </div>
    </div>
  );
}

export default TitleSection;
