import React from "react";
import Post from "components/Post";
import {connect} from "react-redux";
import {fetchPosts} from "state.js"

class PostList extends React.Component{
	componentDidMount(){
		this.props.fetch() // Load posts.
	}

	render(){
		const {postsLoading, posts} = this.props
		return (<div>
			{postsLoading?<div>Loading posts... </div>:null}
			{(posts && posts.length > 0)?
					posts.map(p => <Post {...p} key={p.id}/>)
					:<div>No posts.</div>
			}
		</div>)
	}
}

const mapStateToProps = (state) => ({
	posts:state.posts
})

const mapDispatchToProps = (dispatch) => ({
	fetch: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
