import "../Footer/style.scss";
import logo from "../../assets/logoASMAA.png"

function Footer(){
    const text=[
  "Association Saint-Maurienne-Des-Amis-Animaux",
  <br key="1" />,
 " 79 avenue Gabriel Péri" ,
 <br key="2"/>,
 " 94100 Saint-Maur-des-Fossés",
 <br key="3"/>,
  "Téléphone : 06 32 75 07 47" ,
  <br key="4"/>,
  "Mail : assoc.amisanimaux@gmail.com" ]

    return <div id="footer">
<div id="containerLogo">
<img
            className="chat"
            id="chatImg"
            src={logo}
            alt="img du chat"
          ></img>
</div>
<div id="containerSignature"> 
{text}
</div>



    </div>
}

export default Footer;