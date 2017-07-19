import React from 'react';

export default class SocialSquare extends React.Component{

  render(){
    return(
      <article className={'social-square-container social-square-' + this.props.style}>
        <i className={'social-square-img fa fa-' + this.props.style}></i>
        <a className='social-square-link' target='_blank' href={'https://www.' + this.props.link + this.props.profile}>{this.props.title}</a>
      </article>
    );
  }
}
