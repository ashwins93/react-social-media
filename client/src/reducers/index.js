import { combineReducers } from 'redux';

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: Date.now(),
          postId: action.postId,
          comment: action.comment
        }
      ];
    default:
      return state;
  }
};

export const getComments = state => state.comments;

export default combineReducers({
  comments
});
