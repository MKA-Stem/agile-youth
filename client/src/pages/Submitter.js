import React from "react";
import "./Submitter.css";

class Submitter extends React.Component{
	submitPost(){
		fetch("/api/make-post", {
			method:"POST",
			headers: new Headers({
				'Content-Type':"application/json"
			}),
			dataType:"json",
			body:JSON.stringify({
				title:this.refs.titleInput.value,
				description:this.refs.textInput.value
			})
		}).then(resp => alert("Updated"));
	}

	render(){
		return <div className="Submitter">
			<h2>Post title</h2>
			<input ref="titleInput" type="text"/>
			<h2>Post contents</h2>
			<textarea ref="textInput" rows="10"/>
			<button onClick={e => this.submitPost()}>Submit Topic</button>
		</div>
	}
}

export default Submitter;
