import ProjectList from "./LiveProjectList/ProjectList";

import ProjectClassicStyleWrapper from "./ProjectClassic.style";

const ProjectClassic = () => {
  return (
    <ProjectClassicStyleWrapper>
      <div className="container">
        <div className="section_heading">
          <h2 className="title">LIVE PROJECTS</h2>
          <div className="pulse_icon">
            <div className="circle_outer"></div>
            <div className="circle_inner"></div>
          </div>
        </div>
        <ProjectList />
      </div>
    </ProjectClassicStyleWrapper>
  );
};

export default ProjectClassic;
