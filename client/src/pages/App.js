import React from 'react';
import { connect } from "react-redux";
import Post from "components/Post";

const App = ({posts}) => (<div>
	{posts.map(p => <Post {...p} key={p.id}/>)}
</div>);

const mapStateToProps = (state) => ({
	posts:state.posts
})

export default connect(mapStateToProps)(App);




