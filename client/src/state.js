const defaultState = {
	posts:[],
	postsLoading:false
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
	  case 'SET_POSTS': return {...state, posts:action.posts};
	  case 'LOADING_POSTS': return {...state, posts:[], postsLoading: true};
    default: return state;
  }
};

export function setPosts(posts){
	return {
		type:"SET_POSTS",
		posts
	}
}

export function loadingPosts(){
	return {
		type:"LOADING_POSTS"
	}
}

export function fetchPosts(){
	return dispatch => {
		dispatch(loadingPosts())
		fetch("/api/posts")
			.then(res => {
				if(res.ok){
					return res.json()
				}else{
					alert("Error loading posts.");
					return Promise.reject("Couldn't load posts");
				}
			})
			.then(j => {
				let sorted = j.posts.sort((a,b) => {
					if (a.upvotes>b.upvotes) {
						return -1;
					}
					if (a.upvotes<b.upvotes) {
						return 1;
					}
					return 0;
				})
				dispatch(setPosts(sorted));
			})
	}
}

window.fetchPosts = fetchPosts;


export default reducer;

