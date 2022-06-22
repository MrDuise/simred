import React, {useState} from 'react';


import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import {FaArrowDown, FaArrowUp} from 'react-icons/fa';
const Votes = (props) => {
  const {votes} = props;
  
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const handleUpVote = () => {
    setUpVote(true);
    setDownVote(false);
  }
  const handleDownVote = () => {
    setDownVote(true);
    setUpVote(false);
  }

  return (
    <div>
      <div className=" flex flex-col w-12 m-3">
        <button
          className="btn btn-square btn-outline"
          onClick={handleUpVote}
        >
         {upVote ? <FaArrowUp size={32} /> : <AiOutlineArrowUp size={32} />} 
        </button>
        <p className="text-center text-black">{votes}</p>
        <button
          className="btn btn-square btn-outline"
          onClick={handleDownVote}
        >
          {downVote ? <FaArrowDown size={32} /> : <AiOutlineArrowDown size={32} />} 
        </button>
      </div>
    </div>
  );
};

export default Votes;
