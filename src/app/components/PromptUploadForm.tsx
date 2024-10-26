"use client";
// PromptUploadForm.tsx
import React, { useState } from 'react';

interface Tag {
  id: string;
  text: string;
}

interface PromptFormData {
  title: string;
  prompt: string;
  description: string;
  modelBrand: string;
  modelVersion: string;
  tags: Tag[];
}

const PromptUploadForm: React.FC = () => {
  const [formData, setFormData] = useState<PromptFormData>({
    title: '',
    prompt: '',
    description: '',
    modelBrand: '',
    modelVersion: '',
    tags: []
  });
  const [newTag, setNewTag] = useState<string>('');

  const handleAddTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, { id: Date.now().toString(), text: newTag.trim() }]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagId: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag.id !== tagId)
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="h-full w-full p-6 grid grid-cols-2 gap-6">
        {/* Left Column - Prompt Input */}
        <div className="col-span-1 flex flex-col w-full">
          <textarea
            className="w-full h-[calc(100vh-48px)] p-4 border rounded-lg resize-none bg-white text-gray-600 placeholder-gray-400"
            placeholder="Prompt"
            value={formData.prompt}
            onChange={(e) => setFormData(prev => ({ ...prev, prompt: e.target.value }))}
          />
        </div>

        {/* Right Column - Form Fields */}
        <div className="col-span-1 space-y-4 flex flex-col w-full">
          {/* Title */}
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white text-gray-600 placeholder-gray-400"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          />

          {/* Description */}
          <textarea
            className="w-full h-40 p-3 border rounded-lg resize-none bg-white text-gray-600 placeholder-gray-400"
            placeholder="Prompt Description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />

          {/* Model Selection */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <select
              className="w-full p-3 border rounded-lg bg-white text-black"
              value={formData.modelBrand}
              onChange={(e) => setFormData(prev => ({ ...prev, modelBrand: e.target.value }))}
            >
              <option value="">Model Brand</option>
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic</option>
            </select>

            <select
              className="w-full p-3 border rounded-lg bg-white text-black"
              value={formData.modelVersion}
              onChange={(e) => setFormData(prev => ({ ...prev, modelVersion: e.target.value }))}
            >
              <option value="">Model Version</option>
              <option value="gpt-4">GPT-4</option>
              <option value="claude-3">Claude 3</option>
            </select>
          </div>

          {/* Tags */}
          <div className="space-y-2 w-full">
            <div className="flex flex-wrap gap-2">
              {formData.tags.map(tag => (
                <span
                  key={tag.id}
                  className="px-3 py-1 bg-gray-200 rounded-full flex items-center gap-2 text-black"
                >
                  {tag.text}
                  <button
                    onClick={() => handleRemoveTag(tag.id)}
                    className="text-black hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-3 border rounded-lg bg-white text-black placeholder-gray-400"
                placeholder="New Tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto w-full">
            <button
              className="flex-1 py-3 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 text-black font-medium"
              onClick={() => console.log('Save')}
            >
              Save
            </button>
            <button
              className="flex-1 py-3 px-4 bg-blue-500 rounded-lg hover:bg-blue-600 text-black font-medium"
              onClick={() => console.log('Publish')}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptUploadForm;