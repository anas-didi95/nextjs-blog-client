import React from "react"
import AppLayout from "../src/layouts/AppLayout"
import CommonLayout from "../src/layouts/CommonLayout"

const ProjectsPage: React.FC<{}> = () => (
  <AppLayout>
    <CommonLayout active="projects">
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="has-text-weight-bold is-size-4">NextJS Blog</p>
                  <a className="has-text-weight-semibold">
                    https://github.com/anas-didi95/nextjs-blog-client
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="tags are-medium">
                  <span className="tag is-primary">All</span>
                  <span className="tag is-primary">Medium</span>
                  <span className="tag is-primary">Size</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="has-text-weight-bold is-size-4">
                    NextJS Dashboard
                  </p>
                  <a className="has-text-weight-semibold">
                    https://github.com/anas-didi95/nextjs-dashboard-client
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="tags are-medium">
                  <span className="tag is-primary">All</span>
                  <span className="tag is-primary">Medium</span>
                  <span className="tag is-primary">Size</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="has-text-weight-bold is-size-4">
                    Security Microservice
                  </p>
                  <a className="has-text-weight-semibold">
                    https://github.com/anas-didi95/vertx-security-server
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="tags are-medium">
                  <span className="tag is-primary">All</span>
                  <span className="tag is-primary">Medium</span>
                  <span className="tag is-primary">Size</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  </AppLayout>
)

export default ProjectsPage
