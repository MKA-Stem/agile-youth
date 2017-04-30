import React from "react";
import { connect } from "react-redux";
import Post from "components/Post";

// Props:
// - id: uid of post

const PostDetail = ({post, isLoading}) => (
	isLoading?
	<div>Post is loading...</div>
	:<Post {...post} expand/>
)


const mapStateToProps  = ({posts}, {match}) => {
	if(posts.length > 0){
		const post = posts.filter(p => p.id === match.params.postId)[0];
		return {post};
	}else{
		return {isLoading: true}
	}
}

export default connect(mapStateToProps)(PostDetail);
