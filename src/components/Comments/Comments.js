import React from 'react';
import Comment from './Comment';
import './Comments.css';
import {requester} from "easier-requests";

const Comments = props => {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment) =>
                    <Comment key={requester.createUniqueID()}
                             comment={comment}/>)}
    </div>
  );
};

export default Comments;
