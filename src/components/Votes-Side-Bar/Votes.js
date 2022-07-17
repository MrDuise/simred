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
      <div className=" flex lg:flex-col  flex-row  w-12 m-3">
        <button
          className="btn btn-square btn-outline hover:bg-green-700"
          onClick={handleUpVote}
        >
         {upVote ? <FaArrowUp size={32} /> : <AiOutlineArrowUp size={32} />} 
        </button>
        <p className="text-center text-black p-1">{votes}</p>
        <button
          className="btn btn-square btn-outline hover:bg-red-700"
          onClick={handleDownVote}
        >
          {downVote ? <FaArrowDown size={32} /> : <AiOutlineArrowDown size={32} />} 
        </button>
      </div>
    </div>
  );
};

export default Votes;
