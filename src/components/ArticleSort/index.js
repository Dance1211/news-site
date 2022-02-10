import { useEffect, useState } from 'react';
import './styles.css';

function ArticleSort({ setSortBy, setOrder }) {
  const [sortByState, setSortByState] = useState("newest")

  useEffect(() => {
    switch (sortByState) {
      case "newest":
        setSortBy(() => "created_at");
        setOrder(() => "desc");
        break;
      case "oldest":
        setSortBy(() => "created_at");
        setOrder(() => "asc");
        break;
      case "comments":
        setSortBy(() => "comment_count");
        setOrder(() => "desc");
        break;
      case "votes":
        setSortBy(() => "votes");
        setOrder(() => "desc");
        break;
    }
  }, [sortByState])

  const handleChange = (event) => {
    setSortByState(() => event.target.value);
  }

  return (
    <form>
      <select id="sort_by" onChange={handleChange} value={sortByState}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="comments">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </form>
  );
}

export default ArticleSort;