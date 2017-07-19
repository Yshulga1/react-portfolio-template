import React from 'react';
import Radium from 'radium';
import styler from 'react-styling/flat';
import color from 'color';
import { Link } from 'react-router'

class BlogSquare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: this.props.isClosed
    }

    this.toggleClosed.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ closed: nextProps.isClosed })
  }

  toggleClosed() {
    this.setState({ closed: !this.state.closed })
  }

  readTime(content) {
    return Math.ceil(content.split(' ').length/200) + 'm'
  }

  processDate(date) {
    return String(new Date(date)).split(' ').slice(1, 3).join(' ')
  }

  processTopic(topic) {
    switch (topic) {
      case 'Updates':
        return '#EAEA44'
      case 'Notes':
        return '#82f465'
      case 'Weekly':
        return '#9D3DF6'
      case 'Research':
        return '#009dff'
      case 'Events':
        return '#ff2561'
    }
  }

  render() {
    const styleClosed = styler`
    .readTime {
      color: #f0f0f6;
      position: absolute;
      width: auto;
      font-family: 'Lato', sans-serif;
      right: 12px;
      margin-top: 10px;
      font-size: 16px;
      letter-spacing: 1px;
      z-index: 10;
    }

    .date {
      color: #f0f0f6;
      position: absolute;
      width: auto;
      font-family: 'Lato', sans-serif;
      left: 10px;
      margin-top: 10px;
      font-size: 16px;
      letter-spacing: 1px;
      z-index: 10;
    }

    .title {
      box-sizing: border-box;
      position: absolute;
      font-family: 'Tinos', sans-serif;
      color: #f0f0f6;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      font-size: 32px;
      text-align: center;
      width: 90%;
    }

    .container {
      transition: all 0.3s ease;
      box-sizing: border-box;
      height: 200px;
      min-width: 300px;
      flex-grow: 1;
      position: relative;
      border-radius: 5px;
      border: thin solid ${this.processTopic(this.props.topic)};
      margin: 20px;
      background: #101016;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
      :hover {
        border: 2px 2px 3px 2px solid #f0f0f5;
        transform: scale(1.05);
      }
    }

    .content {
      display: none;
    }

    .close {
      display: none;
    }

    .controls {
      background: #101016;
      height: 40px;
      width: 100%;
      box-sizing: border-box;
      border-radius: 0 0 5px 5px;
      bottom: 0;
      left: 0;
      position: absolute;
    }
    `

    const styleOpened = styler`
    .readTime {
      position: relative;
      color: #000;
      font-weight: bold;
      letter-spacing: 1px;
      display: inline-block;
      font-family: 'Lato', sans-serif;
      float: left;
      margin-left: 15px;
      margin-top: 6px;
      font-size: 16px;
      z-index: 2;
    }

    .close {
      display: inline-block;
      position: absolute;
      color: #000;
      right: 15px;
      margin-top: 5px;
      cursor: pointer;
      z-index: 3;
      text-decoration: none;
      font-size: 20px;
    }

    .container {
      transition: all 0.3s ease;
      flex-grow: 0.1;
      z-index: 1;
      display: block;
      box-sizing: border-box;
      border-radius: 5px;
      position: relative;
      height: auto;
      width: 100%;
      max-width: 960px;
      padding: 20px 40px;
      color: #000;
      background-color: #fff;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
      margin-top: 20px;
    }

    .content {
      text-align: left;
      color: #000;
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      display: block;
      height: auto;
      margin-top: 10px;
    }

    .date {
      position: relative;
      color: #000;
      font-weight: bold;
      letter-spacing: 1px;
      display: inline-block;
      font-family: 'Lato', sans-serif;
      float: left;
      margin-left: 20px;
      margin-top: 6px;
      font-size: 16px;
      z-index: 2;
    }

    .title {
      box-sizing: border-box;
      text-align: left;
      margin: 30px 0 25px 0;
      font-family: 'Tinos', sans-serif;
      width: 100%;
      padding-bottom: 20px;
      border-bottom: 1px dotted #cacacf;
      font-size: 48px;
      text-align: center;
      display: block;
      z-index: 2;
      color: #000;
    }

    .controls {
      background: ${this.processTopic(this.props.topic)};
      height: 32px;
      width: 100%;
      box-sizing: border-box;
      border-radius: 5px 5px 0 0;
      top: -2px;
      left: 0;
      position: absolute;
      z-index: 1;
    }
    `
    const {closed} = this.state;
    const {title, date, body, slug} = this.props;

    return (
      <article style={closed ? styleClosed.container : styleOpened.container}>
        <Link to={`blog/${slug}`} onClick={this.toggleClosed} aria-label='toggle post' style={{'textDecoration' : 'none'}}>
            <div style={closed ? styleClosed.title : styleOpened.title}> { title } </div>
        </Link>
            <div dangerouslySetInnerHTML={{__html: body}} style={closed ? styleClosed.content : styleOpened.content} />
            <div style={closed ? styleClosed.controls : styleOpened.controls}>
              <div style={closed ? styleClosed.date : styleOpened.date} aria-label='date published'>
                <i className='fa fa-calendar-o'></i>
                { ' ' + this.processDate(date) }
              </div>
              <div style={closed ? styleClosed.readTime : styleOpened.readTime} aria-label='reading time'>
                <i className='fa fa-clock-o'></i>
                { ' ' + this.readTime(body) }
              </div>
              <Link to={`blog`} onClick={this.toggleClosed} style={closed ? styleClosed.close : styleOpened.close} className="fa fa-times"></Link>
            </div>
      </article>

    );
  }
}

module.exports = Radium(BlogSquare);
