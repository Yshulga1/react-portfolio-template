import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux'
import { searchPosts } from '../actions/SearchActions'

@connect(store => {
  return {
    search: store.search.search
  }
})
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    }

    this.showDropdown = this.showDropdown.bind(this)
    this.hideDropdown = this.hideDropdown.bind(this)
    this.onChange = this.onChange.bind(this)
    this.selectTopic = this.selectTopic.bind(this)
  }

  onChange(e) {
    this.props.dispatch(searchPosts(e.target.value))
  }

  showDropdown() {
    this.setState({ showDropdown: true })
  }

  hideDropdown() {
    this.setState({ showDropdown: false })
  }

  selectTopic(e) {
    this.props.dispatch(searchPosts(e.target.textContent))
  }

  render() {
    return(
      <div className='search-container'>
        <i onClick={this.selectTopic} className={this.state.showDropdown ? "search-icon fa fa-close": "search-icon fa fa-filter"}></i>
        <input value={this.props.search} onFocus={this.showDropdown} onBlur={this.hideDropdown} onChange={this.onChange} className='search-input' placeholder="Filter" aria-label="Filter posts" />
        <ul onMouseDown={this.selectTopic} style={this.state.showDropdown ? {display: 'block'} : {display: 'none'}} className='search-dropdown'>
          <li className='search-dropdown-item item-one'>Updates</li>
          <li className='search-dropdown-item item-two'>Notes</li>
          <li className='search-dropdown-item item-three'>Weekly</li>
          <li className='search-dropdown-item item-four'>Research</li>
          <li className='search-dropdown-item item-five'>Events</li>
        </ul>
      </div>
    );
  }
}

module.exports = Radium(Search);
