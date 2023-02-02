import "../style/default.style.css";
import HtmlIco from "../assets/htmlIco1.png";
import CssIco from "../assets/cssIco1.png";
import JsIco from "../assets/jsIco1.png";
import ReactIco from "../assets/reactIco1.png";
import NodeIco from "../assets/nodeIco1.png";
import BootstapIco from "../assets/bootstrapIco1.png";
import MaterialIco from "../assets/materialIco1.png";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h2 className="about-title">About</h2>
      </div>
      <div className="about-inf">
        <h3>Motivation</h3>
      </div>
      <div className="about-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, animi
          molestiae, natus sit exercitationem reiciendis cum ipsa voluptas
          adipisci labore nulla impedit atque laboriosam eum eius aliquam nemo
          nisi esse. Deleniti qui saepe possimus impedit earum magni, nostrum
          tenetur illum perspiciatis. Neque reprehenderit, quibusdam recusandae
          quod, est pariatur earum minus quidem quo necessitatibus aliquid
          laborum, provident quos non quas dolores?
        </p>
      </div>
      <div className="about-inf">
        <h3>Stack</h3>
      </div>
      <div className="about-text">
        <ul className="tech-list">
            <li className="item"><h4 className="item-text">HTML</h4> <img className="ico" src={HtmlIco}></img></li>
            <li className="item"><h4 className="item-text">CSS</h4> <img className="ico" src={CssIco}></img></li>
            <li className="item"><h4 className="item-text">JavaScript</h4> <img className="ico" src={JsIco}></img></li>
            <li className="item"><h4 className="item-text">React</h4> <img className="ico" src={ReactIco}></img></li>
            <li className="item"><h4 className="item-text">Node</h4> <img className="ico" src={NodeIco}></img></li>
            <li className="item"><h4 className="item-text">Bootstrap</h4> <img className="ico" src={BootstapIco}></img></li>
            <li className="item"><h4 className="item-text">Material Ui</h4> <img className="ico" src={MaterialIco}></img></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
