import LogoDisplay from "./components/HardCoded/LogoDisplay/LogoDisplay";
import HomePageMainComponent from "./components/HomePageMain/HomePageMainComponent";
import Aurora from "./components/ReactBitsLibrary/Aurora/Aurora";
import { SkillSetComponent } from "./components/Sections/HomePageSkillSetSection/SkillSetComponent";

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <HomePageMainComponent />
      <SkillSetComponent />
      <div className="LanguagesAndToolsSection">
        <Aurora
          colorStops={["#028f62", "#028f62", "#028f62"]}
          blend={0.5}
          amplitude={2.0}
          speed={0.5}
        />
      </div>
      <div className="LanguagesAndToolsSectionContainer">
        <div className="LanguagesAndToolsSectionContents">
          <LogoDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
