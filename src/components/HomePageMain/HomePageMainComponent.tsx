import RotatingTextFunction from "../RotatingText/RotatingTextFunction";
import StarBorder from "../StarBorder/StarBorder";

function HomePageMainComponent() {
  return (
    <div>
      <main>
        <h1 className="title">
          Hello,
          <br /> I am <span className="highlight-animated-green">Mikhail</span>,
          <br /> Aspiring{""}
          <br />
          <RotatingTextFunction />
        </h1>
        <p className="titleDescription">
          Currently Located in Philippines. Driven by{" "}
          <span className="paragraph-highlight">Back-End development</span>, and
          currently{" "}
          <span className="paragraph-highlight">
            leaning into Front-End development
          </span>{" "}
          to round out my Full-Stack abilities!
        </p>
        <StarBorder
          as="button"
          className="custom-class"
          color="rgb(29, 255, 153)"
          speed="2.9s"
        >
          Let's get in touch!
        </StarBorder>
      </main>
    </div>
  );
}

export default HomePageMainComponent;
