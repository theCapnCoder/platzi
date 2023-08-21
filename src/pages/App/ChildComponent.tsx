import React, { forwardRef, useImperativeHandle } from 'react';

interface ChildComponentProps {}

export interface ChildComponentMethods {
  logValue: (value: string) => void;
}

const ChildComponent = forwardRef<ChildComponentMethods, ChildComponentProps>(
  (props, ref) => {
    const logValue = (value: string) => {
      console.log('Value from the parent component:', value);
    };

    useImperativeHandle(ref, () => ({
      logValue: logValue,
    }));

    return <div>Child Component</div>;
  }
);

export default ChildComponent;
