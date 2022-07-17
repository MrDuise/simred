import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="rounded-lg bg-blue-500 m-1 p-3 transition-shadow hover:shadow-md">
      <div className="flex mb-2 items-center">
        <img
          src={`https://api.adorable.io/avatars/10/${comment.author}`}
          alt={`${comment.author} profile`}
        />
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};

export default Comment;
