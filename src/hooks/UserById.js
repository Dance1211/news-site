import { useEffect, useState } from "react";
import { getSingleUser } from "../utils/api";

function useUserById(username) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getSingleUser(username)
      .then((userData) => {
        setUser(() => userData);
      })
  }, [username]);

  return [user];
}

export default useUserById;