import "../Footer/style.scss";

function Footer(){
    const text=[
  "Association Saint-Maurienne-Des-Amis-Animaux",
  <br/>,
 " 79 avenue Gabriel Péri" ,
 <br/>,
 " 94100 Saint-Maur-des-Fossés",
 <br/>,
  "Téléphone : 06 32 75 07 47" ,
  <br/>,
  "Mail : assoc.amisanimaux@gmail.com" ]

    return <div id="footer">
<div id="containerLogo">

</div>
<div id="containerSignature"> 
{text}
</div>



    </div>
}

export default Footer;