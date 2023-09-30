import React from "react";



const Panel =  ({ className, ...props })  => {
  return <div className={className}>{props.children}</div>;
};

export default Panel;
