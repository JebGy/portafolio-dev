import Card from "./Card";
import "../style/default.style.css";

function Projects() {
  return (
    <>
      <div className="project-container">
        <div className="projects">
          <h2 className="project-title">Projects</h2>
        </div>
        <div className="project-cards">
          <Card
            title={"Memori - A"}
            description={
              "I made this game using React.js. This game is a memory game."
            }
            link={"https://jebgy.github.io/m-game/"}
          />
          <Card
            title={"Ruc - Find"}
            description={
              "This is a project that I made using React.js. This project use an api to get the information of a RUC."
            }
            link={"https://jebgy.github.io/ruc-find/"}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
