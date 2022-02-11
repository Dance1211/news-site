import { useEffect, useState } from "react";
import { getSingleUser } from "../utils/api";

function useUserById(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleUser(username)
      .then((userData) => {
        setUser(() => userData);
      })
      .catch((err) => {
        setError(() => err);
      })
  }, [username]);

  return [user, error];
}

export default useUserById;