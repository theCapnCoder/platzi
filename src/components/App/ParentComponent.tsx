import React, { useState, useRef } from 'react';
import ChildComponent, { ChildComponentMethods } from './ChildComponent';

function ParentComponent() {
  const [value, setValue] = useState('Value from the parent component');
  const childComponentRef = useRef<ChildComponentMethods | null>(null);

  const handleClick = () => {
    if (childComponentRef.current) {
      childComponentRef.current.logValue(value);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <ChildComponent ref={childComponentRef} />
    </div>
  );
}

export default ParentComponent;
