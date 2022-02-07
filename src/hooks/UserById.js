import { useEffect, useState } from "react";
import { getSingleUser } from "../utils/api";

function useUserById(username) {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getSingleUser(username)
      .then((userData) => {
        setUser(() => userData);
        setIsLoaded(true);
      })
  }, [])

  return [user, isLoaded];
}

export default useUserById;