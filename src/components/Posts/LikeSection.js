// You will also need to add an onClick event handler that utilizes `likePost` to increase the likes count.
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  const { likePost, likeCount } = props;

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div onClick = {() => console.log("click")} className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likeCount} likes</p>
    </div>
  );
};

export default LikeSection;

//  LocalWords:  fontawesome
