import React from 'react'

import Grid from './Grid.jsx'
import AboutSquare from './AboutSquare.jsx'
import SocialSquare from './SocialSquare.jsx'
import { Link } from 'react-router'

export default class About extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      links: [
        ['behance', 'Behance', '.net/blmgeo'],
        ['github', 'GitHub', '.com/blmgeo'],
        ['linkedin', 'LinkedIn', '.com/in/brandonmailhiot'],
        ['twitter', 'Twitter', '.com/blmgeo']
      ]
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
              Brandon Mailhiot is a front end developer passionate about creating exceptional user experiences.
              He has contributed to the web for over three years, developing skills in user interface design and development.
              To further this end, he writes about recent trends and advancements in technology. In his spare time,
              he enjoys reading and songwriting.
            </p>
            <p className='about-description about-intro'>
              Want to get in touch? Visit his <Link className='about-link' to="/contact">Contact</Link> page or check out his
              social profiles below.
            </p>
          </div>
        </main>
        <AboutSquare title='This Site'>
          <div className='about-info'>
          <p className='about-description about-intro'>
            The frontend of this website is built with a React.js + Redux architecture, which interfaces with a Node.js + Express +
            React-Router backend. Blog content is served via the <Link className='about-link' to='/projects'>RailsCMS</Link> service.
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
