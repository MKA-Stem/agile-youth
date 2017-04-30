import React from 'react';
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from "react-router-dom";

import "./App.css";

import PostList from "components/PostList";
import PostDetail from "components/PostDetail";



const notFound = (props) => (<div><h1>404: Not Found</h1><p>Try a different URL?</p></div>)


const App = ({posts}) => (<div>
	<Helmet defaultTitle="Student Government Online" titleTemplate="%s - SGO">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<html lang="en"/>
	</Helmet>


    <div className="navbar">
        <div className="navigation">
            <div className="name">Student Government Online</div>
            <ul className="align-right">
                <li>
					<Link to="/">Issues</Link>
                </li>
                <li>
					<Link to="/about">About Us</Link>
                </li>
            </ul>
        </div>
    </div>
	
	<div className="container">
		<Switch>
			<Route exact path="/" component={PostList}/>
			<Route path="/post/:postId" component={PostDetail}/>
			<Route path="*" component={notFound}/>
		</Switch>
	</div>
</div>);

export default App;




