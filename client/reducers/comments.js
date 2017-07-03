const comments = (state = [], action) => {
    
    if(typeof action.postId != undefined) {
        return {
            //take the current state
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
};

const postComments = (state = [], action) => {
    
    switch(action.type) {
        case "ADD_COMMENT":
            //return new state with new comment
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case "REMOVE_COMMENT":
            return [
                //from the start to before the one we want to delete
                ...state.slice(0, action.index),
                //from after the one we want to delete to the end
                ...state.slice(action.index + 1)
            ]; 
        default:
            return state;
    }
};

export default comments;