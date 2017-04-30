import React from "react";
import Post from "components/Post";
import {connect} from "react-redux";

const PostList = ({posts, postsLoading}) => (<div>
	{postsLoading?<div>Loading posts... </div>:null}
	{(posts && posts.length > 0)?
		posts.map(p => <Post {...p} key={p.id}/>)
		:<div>No posts.</div>
	}
</div>)


const mapStateToProps = (state) => ({
	posts:state.posts
})

export default connect(mapStateToProps)(PostList);
