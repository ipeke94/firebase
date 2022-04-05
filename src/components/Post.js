import React from "react";
import moment from "moment";
import { firestore } from "../firebase";

const Post = ({ title, content, user, createdAt, stars, comments, id }) => {
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();
  const star = () => postRef.update({ stars: stars + 1 });
  return (
    <article className="post">
      <div className="post-content">
        <span>
          item: <b>{title.toUpperCase()} </b>
        </span>
        <span>
          / count: <b>{content}</b>
        </span>
      </div>
      <div className="post-meta">
        <div>
          <p>
            <span onClick={star} role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p className="p-username">{user.displayName}🤎💚</p>
          <p className="p-date">{moment(createdAt && createdAt.toDate()).calendar()}</p>
        </div>
        <div>
          {/* <button className="star" onClick={star}>
            Star
          </button> */}
          <button className="delete" onClick={remove}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

Post.defaultProps = {
  id: "1",
  title: "Take away",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
  user: {
    uid: "1",
    displayName: "John Doe",
    email: "john.doe@gmail.com",
    photoUrl: "https://static.wikia.nocookie.net/sims/images/3/33/John_Doe.png/revision/latest?cb=20131001222124",
  },
  stars: 0,
  comments: 0,
};

export default Post;
