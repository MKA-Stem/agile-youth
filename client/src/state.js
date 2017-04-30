const defaultState = {
	posts:[
		{id: 1, title:"test", description:"Long text goes here!", score:1234},
		{id: 2, title:"test", description:"Long text goes here!", score:1234},
		{id: 3, title:"test", description:"Long text goes here!", score:1234},
		{id: 4, title:"test", description:"Long text goes here!", score:1234},
		{id: 5, title:"test", description:"Long text goes here!", score:1234},
		{id: 6, title:"test", description:"Long text goes here!", score:1234},
		{id: 7, title:"test", description:"Long text goes here!", score:1234},
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

