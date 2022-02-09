import { useState, useEffect, useRef } from 'react';
import './styles.css';

function Vote({ voteNum, onVoteUpPress, onVoteDownPress }) {
  const [currVotes, setCurrVotes] = useState(voteNum);

  const handleUpVote = () => {
    setCurrVotes((tempVotes) => tempVotes + 1);
    onVoteUpPress();
  }

  const handleDownVote = () => {
    setCurrVotes((tempVotes) => tempVotes - 1);
    onVoteDownPress();
  }

  return (
    <div className="VoteButton">
      {onVoteUpPress && <button className="VoteButton__button" onClick={handleUpVote}>
        <i className="VoteButton__icon fas fa-angle-up" />
      </button>}
      <p className="VoteButton__votes">{currVotes}</p>
      {onVoteDownPress && <button className="VoteButton__button" onClick={handleDownVote}>
        <i className="VoteButton__icon fas fa-angle-down" />
      </button>}
    </div>
  );
}

export default Vote;