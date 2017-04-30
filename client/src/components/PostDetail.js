import React from "react";
import { connect } from "react-redux";
import Post from "components/Post";

// Props:
// - id: uid of post

const PostDetail = ({post}) => (<Post {...post} expand/>)

const mapStateToProps = ({posts}, {params}) => posts.filter(p => p.id === params.id)[0];

export default connect(mapStateToProps)(PostDetail);
