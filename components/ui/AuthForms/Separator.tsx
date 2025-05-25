import React from 'react';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <div className="relative w-full max-w-[350px] my-6">
      <div className="relative flex items-center py-1">
        <div className="grow border-t border-gray-200"></div>
        <span className="mx-3 shrink text-sm leading-8 text-gray-500">
          {text}
        </span>
        <div className="grow border-t border-gray-200"></div>
      </div>
    </div>
  );
};

export default Separator;