import React from "react"

const Post = ({score, title, description}) => (<div>
	<h1>{score}:  {title}</h1>
	<p>{description}</p>
</div>)

export default Post;
