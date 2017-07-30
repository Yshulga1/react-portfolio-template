import React from 'react'

import Grid from './Grid.jsx'
import AboutSquare from './AboutSquare.jsx'
import SocialSquare from './SocialSquare.jsx'
import { Link } from 'react-router'

export default class About extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      links: []
    }
  }
  render(){
    return(
      <Grid>
        <main className='about-container'>
          <img className='about-photo' alt='about photo' src='./assets/about-photo.jpg' />
          <div className='about-info'>
            <h1 className='about-title'>About</h1>
            <p className='about-description about-intro'>
            </p>
            <p className='about-description about-intro'>
            </p>
          </div>
        </main>
        <AboutSquare title='This Site'>
          <div className='about-info'>
          <p className='about-description about-intro'>
          </p>
          </div>
        </AboutSquare>
        <AboutSquare title='Social Profiles'>
          <div className='about-info about-social-links'>
            {
              this.state.links.map(link => {
                return (
                  <SocialSquare className='about-link' link={link[0]} title={link[1]} style={link[0]} profile={link[2]}/>
                )
              })
            }
          </div>
        </AboutSquare>
      </Grid>
    );
  }
}
