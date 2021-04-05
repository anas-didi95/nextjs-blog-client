import React from "react"
import AppLayout from "../../src/layouts/AppLayout"

const PostPage: React.FC<{}> = () => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <p className="title has-text-centered">Humane Typography in the Digital Age</p>
          <br />
          <div>
            <p>
              An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.
          </p>
          </div>
        </div>
        <div className="column" />
      </div>
    </div>
  </AppLayout>
)

export default PostPage
