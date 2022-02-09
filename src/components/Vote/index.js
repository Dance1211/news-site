import { useState, useEffect, useRef } from 'react';
import './styles.css';

function Vote({ voteNum, onVotePress }) {
  const [currVotes, setCurrVotes] = useState(voteNum);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      onVotePress()
        .catch((err) => {
          console.log(err.response.data);
        })
    } else {
      isMounted.current = true;
    }
  }, [currVotes])

  const handleVote = () => {
    setCurrVotes((tempVotes) => tempVotes + 1);
  }

  return (
    <button onClick={handleVote}>
      <p>{currVotes}</p>
    </button>
  );
}

export default Vote;