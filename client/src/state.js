const defaultState = {
	posts:[
		{title:"test", description:"Long text goes here!"}
	]
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_POSTS': return {...state, posts:action.value}
    default: return state;
  }
};

export function setPosts(posts){
	return {
		type:"SET_POSTS",
		posts
	}
}


export default reducer;

