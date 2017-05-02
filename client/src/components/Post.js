import React from "react"
import "./Post.css";
import {Link} from "react-router-dom";

const submitUpvote = (id) => {
	fetch("/api/upvote", {
		method:"POST",
		headers: new Headers({
			'Content-Type':"application/json"
		}),
		body:JSON.stringify({
			id
		})
	})

	window.updateData();
}

const submitDownvote = (id) => {
	fetch("/api/downvote", {
		method:"POST",
		headers: new Headers({
			'Content-Type':"application/json"
		}),
		body:JSON.stringify({
			id
		})
	})

	window.updateData();
}

const Post = ({expand=false, title, description, id, comments, upvotes, downvotes}) => (<div className="Post">
	<h1>
		<span className="Post_upvote" onClick={e => submitUpvote(id)}>▲</span>
		<Link className="Post_link" to={`/post/${id}`}>{upvotes-downvotes}: {title}</Link>
		<span className="Post_upvote" onClick={e => submitDownvote(id)}>▼</span></h1>
	<p>{description}</p>
	{expand?<div>
		<div className="Post_comments-header">Comments:</div>
		{comments.map((c, i) => <div key={i} className="Post_comment">{c.comment}</div>)}
	</div>:<div/>}
</div>)

export default Post;
