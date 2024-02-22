import { useEffect } from "react";

const useScrollBottom = (targetRef) => {
  useEffect(() => {
    if (targetRef && targetRef.current) {
      const boxElement = targetRef.current;
      console.log({ boxElement });
      boxElement.scrollTop = boxElement.scrollHeight - boxElement.clientHeight;
    }
  }, [targetRef]);

  return null;
};

export default useScrollBottom;
