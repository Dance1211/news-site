import { useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(false)
  const toggle = () => {
    setState((currState) => !currState);
  }
  return [state, toggle];
}

export default useToggle;