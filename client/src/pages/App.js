import React from 'react';
import {Helmet} from "react-helmet";
import {Route, Switch} from "react-router-dom";

import PostList from "components/PostList";
import PostDetail from "components/PostDetail";


const notFound = (props) => (<div><h1>404: Not Found</h1><p>Try a different URL?</p></div>)


const App = ({posts}) => (<div>
	<div> This is the toolbar </div>
		
	<Helmet defaultTitle="Student Government Online" titleTemplate="%s - SGO">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<html lang="en"/>
	</Helmet>

	<Switch>
		<Route exact path="/" component={PostList}/>
		<Route path="/:postId" component={PostDetail}/>
		<Route path="*" component={notFound}/>
	</Switch>
</div>);

export default App;




