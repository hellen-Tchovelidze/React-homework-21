import React from "react";
import Tag from "../../__atoms/Tag/Tag";
import Button from "../../__atoms/Button/Button";

type FilterBarProps = {
  filters: string[];
  removeFilter: (filter: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ filters, removeFilter }) => {
  if (filters.length === 0) return null;

  return (
    <div className="bg-white p-4 rounded shadow flex space-x-2 flex-wrap ">
      {filters.map((filter) => (
        <div key={filter} className="mt-1.5">
          <Tag label={filter} onClick={() => {}} />
          <Button onClick={() => removeFilter(filter)}>✖</Button>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
