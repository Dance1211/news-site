import { useState } from "react";

function useToggle() {
  const [state, setState] = useState(false)
  const toggle = () => {
    setState((currState) => !currState);
  }
  return [state, toggle];
}

export default useToggle;