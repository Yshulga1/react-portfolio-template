import React from 'react';
import Radium from 'radium';
import styler from 'react-styling/flat';
import color from 'color';
import { Router, Route, Link, browserHistory } from 'react-router'

class ProjectSquare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true
    }
  }

  toggleSquare() {
    this.setState({ closed: !this.state.closed });
  }

  projectDate(date) {
    return String(new Date(date))
          .split(' ')
          .slice(1, 4)
          .join(' ')
  }

  designDate(date) {
    return String(new Date( date * 1000 ))
           .split(' ')
           .slice(1, 4)
           .join(' ')
  }

  render() {
    const {closed} = this.state;
    const {image, title, projectDate, designDate, desc, repoUrl, pageUrl, language} = this.props;

    return (
      <article className='project-container'>
        <h1 className='project-title'>{ title } <span style={{fontSize: '16px', color: '#777'}}>({language})</span></h1>
        {
          image ? <img src={image} className='project-image' /> : ''
        }
        <p className='project-description'>{ desc }</p>
        <div className='project-info'>
          <p className='project-date'>{ projectDate ? this.projectDate(projectDate) : this.designDate(designDate) }</p>
          <a className={repoUrl ? 'project-repo' : 'project-repo-disabled'} href={repoUrl ? repoUrl : null} target='_blank' aria-label='github repo'>
            <i className='fa fa-github'></i>
          </a>
          <a className={pageUrl ? 'project-page' : 'project-page-disabled'} href={pageUrl ? pageUrl : null} target='_blank' aria-label='github page'>
            <i className='fa fa-home'></i>
          </a>
        </div>
      </article>
    );
  }
}

module.exports = Radium(ProjectSquare);
