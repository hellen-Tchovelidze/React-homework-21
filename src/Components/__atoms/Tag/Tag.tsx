import React from "react";

type TagProps = {
  label: string;
  onClick: () => void;
};

const Tag: React.FC<TagProps> = ({ label, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="cursor-pointer bg-[#EFF6F6] text-[#5CA5A5] font-bold mt-1.5 px-2 py-1 rounded hover:bg-[#5CA5A5] hover:text-white"
    >
      {label}
    </span>
  );
};

export default Tag;
