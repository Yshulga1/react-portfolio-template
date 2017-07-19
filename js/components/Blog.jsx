import React from 'react'
import BlogSquare from './BlogSquare.jsx'
import Grid from './Grid.jsx'
import Search from './Search.jsx'
import { fetchPosts, filterPosts } from '../actions/BlogActions'
import { searchPosts } from '../actions/SearchActions'
import { connect } from 'react-redux'

@connect(store => {
  return {
    posts: store.blog.posts,
    reading: store.blog.reading,
    search: store.search.search
  }
})
export default class Blog extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPosts(this.props.params.slug))
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params.slug && !this.props.params.slug) { //from blog to post
      this.props.dispatch(filterPosts(nextProps.params.slug))
    }
    else if (!nextProps.params.slug && this.props.params.slug) { //from post to blog
      this.props.dispatch(filterPosts('ALL'))
    }
    else if (nextProps.params.slug && this.props.params.slug) { //from post to post
      this.props.dispatch(filterPosts(nextProps.params.slug))
    }
    if (nextProps.search !== this.props.search) {
      this.props.dispatch(filterPosts('ALL'))
    }
  }

  render(){
    let { posts, reading, search, params, history } = this.props
    const regex = new RegExp(search, "gi")
    if (search === ('Research' || 'Events' || 'Notes' || 'Updates' || 'Weekly')) {
      posts = posts.filter(post => regex.test(post.topic))
    } else {
      posts = posts.filter(post =>
        regex.test(
          post.slug
          + post.title
          + post.author
          + post.body
          + post.topic
          + post.created_at
        )
      )
    }
    if (reading !== 'ALL') {
      posts = posts.filter(post => post.slug === reading)
    }
  return (
    <div>
      <Search />
      <Grid>
        {
          posts.map(post => {
            return (
              <BlogSquare
                key={post.id}
                date={post.created_at}
                isClosed={params.slug === post.slug ? false : true}
                {...post}
              />
            )
          }, this)
        }
      </Grid>
    </div>
  )
}
}
