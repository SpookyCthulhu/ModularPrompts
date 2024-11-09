'use client'

import React, { useState } from 'react';

interface TagsInputProps {
  label: string;
  onChange: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ label, onChange }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');

  const handleAddTag = () => {
    if (inputValue.trim() === '') return;
    const newTags = [...tags, inputValue.trim()];
    setTags(newTags);
    setInputValue('');
    onChange(newTags); // Update parent component
  };

  const handleDeleteTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onChange(newTags);
  };

  const handleEditTag = (index: number) => {
    setEditingIndex(index);
    setEditingValue(tags[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex === null) return;
    const newTags = [...tags];
    newTags[editingIndex] = editingValue;
    setTags(newTags);
    setEditingIndex(null);
    setEditingValue('');
    onChange(newTags);
  };

  return (
    <div className='flex flex-cols bg-purple-500 rounded p-4 gap-4 flex-wrap'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-black rounded border-white border-4 bg-white"
          >
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  className="bg-purple-500 text-white p-1 rounded h-full"
                />
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="text-purple-500"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleEditTag(index)}
                  className="cursor-pointer h-full flex items-center bg-white p-2"
                >
                  {tag}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteTag(index)}
                  className="text-white text-2xl font-bold bg-purple-500 p-2 rounded-r"
                >
                  &times;
                </button>
              </>
            )}
          </div>
        ))}
      <div className="flex items-center border border-white border-2 rounded bg-purple-500 focus-within:ring-2 focus-within:ring-white">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a tag"
          className="p-2 text-white bg-purple-500 rounded focus:outline-none focus:bg-purple-400p-2 w-full rounded-l bg-purple-500 text-white placeholder-white focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="p-2 h-full text-purple-500 text-2xl font-bold bg-purple-500 border-white border-l-2 bg-white focus:outline-none focus:bg-purple-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TagsInput;
