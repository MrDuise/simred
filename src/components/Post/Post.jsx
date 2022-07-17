import React, { useState } from 'react';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
//import Card from '../Card/Card';
import Comment from '../Comments/Comment';
import Votes from '../Votes-Side-Bar/Votes';
import { BiCommentDetail } from 'react-icons/bi';
const Post = (props) => {
  const { post } = props;

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState(false);
  const [displayComments, setDisplayComments] = useState(false);


  const fetchComments = async (permalink) => {
    setCommentsLoading(true);
    setCommentsError(false);
    try {
      const comt = await fetch(`https://www.reddit.com${permalink}/.json`)
      const json  = await comt.json();

       setComments(json[1].data.children.map((subreddit) => subreddit.data));
    } catch (error) {
      setCommentsError(true);
    }
    setCommentsLoading(false);
  }

  const onToggleCommentsClick = () => {
    if (displayComments) {
      setDisplayComments(false);
    }
    else {
      setDisplayComments(true);
      fetchComments(post.permalink);
    }
  }



  const htmlDecode = (content) => {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };

  const renderComments = () => {
    if (commentsError) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (commentsLoading) {
      return (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      );
    }

    if (displayComments) {
      return (
        <div className='border-solid border-black border-4'>
          {comments.map((comment) =>
            <Comment comment={comment} key={comment.id} />
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <div className='flex flex-col lg:w-256 md:w-128  w-96'>
      <div className="card lg:card-side lg:w-256 md:w-128  w-96 bg-primary-content shadow-xl my-8">
        <div id="card-header" className="flex flex-col ml-2">
          <ul className="flex flex-row list">
            <li className="text-sm mr-2">{post.subreddit_name_prefixed}</li>
            <li className="text-sm mr-2">|</li>
            <li className="text-sm mr-2">Post by {post.author}</li>
            <li className="text-sm mr-2">|</li>
            <li className="text-sm">
              {moment.unix(post.created_utc).fromNow()}
            </li>
          </ul>
          <h1 className="card-title text-black pr-1">
            {' '}
            <a className="hover:link-hover" href={post.url_overridden_by_dest}>
              {' '}
              {post.title}{' '}
            </a>
          </h1>
        </div>

        <div className="card-body">
          <img
            src={post.thumbnail}
            alt=""
            className="post-image place-self-end"
            style={{
              width: post.thumbnail_width * 1.5,
              height: post.thumbnail_height * 1.5,
              marginVertical: 10,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: htmlDecode(post.selftext_html),
            }}
          />
        </div>

        <div className="flex justify-between lg:flex-col flex-row">
          <Votes votes={post.ups} />

          <button
            type="button"
            className=" p-2 m-2"
            onClick={() => onToggleCommentsClick()}
          >
            <BiCommentDetail className="text-2xl" /> {post.num_comments}
          </button>

          
        </div>
        
      </div>
      {renderComments()}
      </div>
    </div>
  );
};

export default Post;
