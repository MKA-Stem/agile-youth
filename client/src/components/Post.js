import React from "react"
import "./Post.css";
import {Link} from "react-router-dom";

const Post = ({expand=false, title, description, id}) => (<div className="Post">
	<h1><Link className="Post_link" to={`/post/${id}`}>{title}</Link></h1>
	<p>{description}</p>
	{expand?<div>
		<div>Comments!</div>
	</div>:<div/>}
</div>)

export default Post;
