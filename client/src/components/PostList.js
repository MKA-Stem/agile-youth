import React from "react";
import Post from "components/Post";
import {connect} from "react-redux";

const PostList = ({posts}) => (<div>
	{posts.map(p => <Post {...p} key={p.id}/>)}
</div>)


const mapStateToProps = (state) => ({
	posts:state.posts
})

export default connect(mapStateToProps)(PostList);
