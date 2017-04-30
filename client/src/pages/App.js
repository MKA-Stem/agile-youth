import React from 'react';
import { connect } from "react-redux";

const App = ({posts}) => (<div>
	{posts.map(p => <div>
		<h1>{p.title}</h1>
		<p>{p.description}</p>
	</div>)}
</div>);

const mapStateToProps = (state) => ({
	posts:state.posts
})

export default connect(mapStateToProps)(App);




