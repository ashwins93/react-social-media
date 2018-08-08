import React from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import { getComments } from './reducers';

function App({ comments, addComment }) {
  return (
    <div>
      <h1>React Social Media</h1>
      <h3>The number one social media for rigging elections</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi,
          porro dolorum consectetur cum ratione ea officiis delectus at sit.
          Maxime rerum minima beatae facilis cumque esse necessitatibus.
          Dolorem, obcaecati.
        </p>
        <div>
          {comments.map(commentObj => (
            <p key={commentObj.id}>{commentObj.comment}</p>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Add comment"
            onKeyDown={e =>
              e.key === 'Enter' ? addComment(0, e.target.value) : null
            }
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  comments: getComments(state)
});

export default connect(
  mapStateToProps,
  actions
)(App);
