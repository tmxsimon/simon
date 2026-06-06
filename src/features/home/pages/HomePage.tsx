import Experience from "../components/Experience";
import BasicInfo from "../components/BasicInfo";
import RecentProjects from "../components/RecentProjects";
import Skills from "../components/Skills";
import Contact from "../components/Contant";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-base-lg">
      <BasicInfo />
      <Skills />
      <RecentProjects />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
