import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className=" bg-[#5CA5A5] w-[32px] h-[32px] hover:bg-[#2B3939] cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
