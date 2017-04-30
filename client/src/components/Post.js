import React from "react"
import "./Post.css";
import {Link} from "react-router-dom";

const Post = ({expand=false, title, description, id, comments}) => (<div className="Post">
	<h1><Link className="Post_link" to={`/post/${id}`}>{title}</Link></h1>
	<p>{description}</p>
	<div className="Post_comments-header">Comments:</div>
	{expand?<div>
		{comments.map((c, i) => <div key={i} className="Post_comment">{c.comment}</div>)}
	</div>:<div/>}
</div>)

export default Post;
