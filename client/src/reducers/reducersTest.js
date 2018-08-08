const reducerFunction = require('./index');

let prevState = [];
let action = {
  type: 'ADD_COMMENT',
  postId: 0,
  comment: 'Lorem ipsum'
};
let nextState = reducerFunction(prevState, action);

console.log('Previous state', prevState);
console.log('Action', action);
console.log('Next state', nextState);
return;
