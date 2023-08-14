import { forwardRef, useImperativeHandle } from "react";

export 

const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      return <h2>My Input</h2>;
    },
    []
  );
});
