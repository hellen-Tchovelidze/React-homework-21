import React from "react";
import Tag from "../../__atoms/Tag/Tag";

type JobTagsProps = {
  tags: string[];
  addFilter: (filter: string) => void;
};

const JobTags: React.FC<JobTagsProps> = ({ tags, addFilter }) => {
  return (
    <div className="flex space-x-2 mt-2 font-bold flex-wrap ">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} onClick={() => addFilter(tag)} />
      ))}
    </div>
  );
};

export default JobTags;
