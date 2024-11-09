'use client';

import React, { useState } from 'react';

interface DynamicFormProps {
  options: string[][]; // Always an array of arrays of strings
  onChange: (selectedValues: string[]) => void;
}

const DropDown: React.FC<DynamicFormProps> = ({ options, onChange }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(Array(options.length).fill(""));

  const handleSelectChange = (index: number, value: string) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div className={`grid gap-4 ${options.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {options.map((columnOptions, index) => (
        <select
          key={index}
          onChange={(e) => handleSelectChange(index, e.target.value)}
          className="bg-purple-500 p-2 w-full rounded drop-shadow text-white"
        >
          <option value="">Select an option</option>
          {columnOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default DropDown;