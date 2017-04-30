import React from 'react';
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from "react-router-dom";

import "./App.css";

import PostList from "components/PostList";
import PostDetail from "components/PostDetail";
import Submitter from "pages/Submitter";


const notFound = (props) => (<div><h1>404: Not Found</h1><p>Try a different URL?</p></div>)

const aboutUs = (props) => (<p>
	We noticed a problem in our school: there was no good way to propose ideas to our student government representatives in an open manner, and no way for others to show their support for those ideas. Using this experience in our school, we decided to make a tool to engage students with the issues at their school and come up with solutions to share with their representatives. Student Government Online is that tool. Students post problems they see and potential solutions to those problems, and other students can up- or down-vote and comment on those posts. Student Government Online will make the process of student government faster and fairer, and allow student government officials to better represent us students.
</p>)

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
                <li>
					<Link to="/submit">Submit a Topic</Link>
                </li>
            </ul>
        </div>
    </div>
	
	<div className="container">
		<Switch>
			<Route exact path="/" component={PostList}/>
			<Route path="/submit" component={Submitter}/>
			<Route path="/about" component={aboutUs}/>
			<Route path="/post/:postId" component={PostDetail}/>
			<Route path="*" component={notFound}/>
		</Switch>
	</div>
</div>);

export default App;




