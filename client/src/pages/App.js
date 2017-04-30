import React from 'react';
import { connect } from "react-redux";
import Post from "components/Post";
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from "react-router-dom";

import PostList from "components/PostList";

const home = (props) => (<div>Homepage</div>);
const page1 = (props) => (<div>Page 1</div>);
const page2 = (props) => (<div>Page 2</div>);

const notFound = (props) => (<div><h1>404: Not Found</h1><p>Try a different URL?</p></div>)


const App = ({posts}) => (<div>
	<div> This is the toolbar </div>
		
	<Helmet defaultTitle="Student Government Online" titleTemplate="%s - SGO">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<html lang="en"/>
	</Helmet>

	<Switch>
		<Route exact path="/" component={PostList}/>
		<Route path="/page1" component={page1}/>
		<Route path="/page2" component={page2}/>
		<Route path="*" component={notFound}/>
	</Switch>
</div>);

export default App;




