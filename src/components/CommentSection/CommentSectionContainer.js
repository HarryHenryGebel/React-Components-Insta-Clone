import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);

  return (
    <div>
      {comments.map((comment, key) => <Comment
                                        key = {key}
                                        comment = {comment} />)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
