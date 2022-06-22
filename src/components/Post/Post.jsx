import React, { useState } from 'react';
import Card from '../Card/Card';
import Votes from '../Votes-Side-Bar/Votes';
import { BiCommentDetail } from 'react-icons/bi';
const Post = (props) => {
  const { post } = props;
  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const htmlDecode = (content) => {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };
  const date = new Date(post.created_utc * 1000).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div>
      <div className="card card-side lg:w-256 w-96 bg-primary-content shadow-xl my-8">
        <Votes votes={post.ups} />
        <Card>
          <ul className="flex flex-row list">
            <li className="text-sm mr-2">{post.subreddit_name_prefixed}</li>
            <li className="text-sm mr-2">|</li>
            <li className="text-sm mr-2">Post by {post.author}</li>
            <li className="text-sm mr-2">|</li>
            <li className="text-sm">Created {date}</li>
          </ul>
          <h1 className="card-title text-black pr-1">
            {' '}
            <a className="hover:link-hover" href={post.url_overridden_by_dest}>
              {' '}
              {post.title}{' '}
            </a>
          </h1>
          <div className="card-body">
            <img
              src={post.thumbnail}
              alt=""
              className="post-image"
              style={{
                width: post.thumbnail_width * 2,
                height: post.thumbnail_height * 2,
                marginVertical: 10,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: htmlDecode(post.selftext_html),
              }}
            />
          </div>

          <div className="flex justify-start">
            <p className="p-1">
              {' '}
              <BiCommentDetail /> {post.num_comments}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Post;
