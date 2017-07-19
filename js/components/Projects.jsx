import React from 'react'
import ReactDOM from 'react-dom'

import Grid from './Grid.jsx'
import ProjectSquare from './ProjectSquare.jsx'
import { fetchProjects, fetchDesigns, fetchBlocked } from '../actions/ProjectActions'
import { connect } from 'react-redux'

@connect(store => {
  return {
    projects: store.projects.projects,
    designs: store.projects.designs,
    blocked: store.projects.blocked
  }
})
export default class Projects extends React.Component{

  componentWillMount() {
    this.props.dispatch(fetchProjects())
    this.props.dispatch(fetchDesigns())
    this.props.dispatch(fetchBlocked())
  }

  render(){
    const { projects, designs, blocked } = this.props

    return(
      <Grid top='20px'>
        {
          designs.map(design => {
            // if design isn't on the blocked list
            if(blocked.indexOf(design.name) === -1) {
              return (
                <ProjectSquare
                  key={design.id}
                  image={design.covers['original']}
                  title={design.name}
                  language={design.fields[0]}
                  designDate={design.published_on}
                  pageUrl={design.url}
                />
              )
            }
          })
        }
        {
          projects.map(project => {
            // if project isn't on the blocked list
            if(blocked.indexOf(project.name) === -1) {
              return (
                <ProjectSquare
                  key={project.id}
                  title={project.name}
                  language={project.language}
                  desc={project.description}
                  projectDate={project.created_at}
                  repoUrl={project.html_url}
                  pageUrl={project.homepage}
                />
              )
            }
          })
        }
      </Grid>
    );
  }
}
