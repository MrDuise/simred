import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  selectVotes,
} from '../../features/votes/votesSlice';
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from 'react-icons/bs';
const Votes = () => {
  const votes = useSelector(selectVotes);
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" flex flex-col w-12">
        <button
          className="btn btn-square"
          onClick={() => dispatch(increment())}
        >
          <BsFillArrowUpSquareFill size={32} />
        </button>
        <p className="text-center">{votes}</p>
        <button
          className="btn btn-square"
          onClick={() => dispatch(decrement())}
        >
          <BsFillArrowDownSquareFill size={32} />
        </button>
      </div>
    </div>
  );
};

export default Votes;
