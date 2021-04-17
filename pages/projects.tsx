import React from "react"
import AppLayout from "../src/layouts/AppLayout"
import CommonLayout from "../src/layouts/CommonLayout"

const ProjectsPage: React.FC<{}> = () => (
  <AppLayout>
    <CommonLayout active="projects">
      <div>Project</div>
    </CommonLayout>
  </AppLayout>
)

export default ProjectsPage
