import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

function useTopics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((newTopics) => {
        setTopics(() => newTopics);
      });
  }, [])

  return topics;
}

export default useTopics;