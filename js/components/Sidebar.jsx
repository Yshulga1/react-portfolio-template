import React from 'react';
import Radium from 'radium';
import Logo from './Logo.jsx';
import {Link} from 'react-router';

const RadiumLink = Radium(Link);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        ['Blog', 'blog', 'fa fa-newspaper-o'],
        ['Projects', 'projects', 'fa fa-desktop'],
        ['About', 'about', 'fa fa-heartbeat'],
        ['Contact', 'contact', 'fa fa-envelope']
      ],
      isOpen: true
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
        <div className='sidebar-container'>
        <div onClick={this.toggleMenu}>
          <Logo imgSrc="./assets/MyLogo2.png" />
        </div>

          <div className='sidebar-menu' style={this.state.isOpen ? {'display' : 'block'} : {'display' : 'none'}}>
            {
              this.state.menu.map((el, index) => {
                return (
                  <RadiumLink key={el[0]} to={el[1]} className='sidebar-link' activeClassName={'sidebar-active ' + el[1] + '-sidebar'}>
                    <i key={index} className={el[2] + ' sidebar-icon'}></i>
                    {el[0]}
                  </RadiumLink>
                );
              }, this)
            }
          </div>
        </div>
    );
  }
}

module.exports = Radium(Sidebar);
