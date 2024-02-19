import React from 'react';

type HoverChildren = {
  children: React.ReactNode;
};

const OnHover = ({ children }: HoverChildren) => {
  return (
    <div
    // class="group"
    >
      <p className="hidden group-hover:block">{children}</p>
    </div>
  );
};
export default OnHover;
