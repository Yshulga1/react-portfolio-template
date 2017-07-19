import React from 'react';

export default class AboutSquare extends React.Component{

  render(){
    return(
      <article className='about-square-container'>
        <h1 className='about-square-title'>{this.props.title}</h1>
        {this.props.children}
      </article>
    );
  }
}
