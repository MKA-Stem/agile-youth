import React from "react"
import "./Post.css";

const Post = ({expand=false, title, description}) => (<div className="Post">
	<h1>{title}</h1>
	<p>{description}</p>
	{expand?<div>
		<div>Comments!</div>
	</div>:<div/>}
</div>)

export default Post;
