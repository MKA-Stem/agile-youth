import React from "react"

const Post = ({expand=false, title, description}) => (<div>
	<h1>{title}</h1>
	<p>{description}</p>
	{expand?<div>
		<div>Comments!</div>
	</div>:<div/>}
</div>)

export default Post;
