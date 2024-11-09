'use client';

import React, { useState } from 'react';
import TagsInput from './TagsInput';
import DropDown from './DropDown';

type FieldType = 'text' | 'description' | 'tags' | 'dropdown';

interface Field {
  label: string;
  type: FieldType;
  column: 1 | 2;
  fullHeight?: boolean;
  options?: string[][];
}

interface Columns {
  col1: String;
  col2: String;
}
interface DynamicFormProps {
  fields: Field[];
  columns: Columns;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, columns }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  const handleChange = (label: string, value: any) => {
    setFormValues(prev => ({
      ...prev,
      [label]: value,
    }));
  };

  const renderField = (field: Field) => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            placeholder={field.label}
            onChange={e => handleChange(field.label, e.target.value)}
            className="bg-purple-500 placeholder-white text-white p-2 w-full rounded drop-shadow"
          />
        );
      case 'description':
        return (
          <textarea
            placeholder={field.label}
            onChange={e => handleChange(field.label, e.target.value)}
            className={`bg-purple-500 placeholder-white text-white p-2 w-full rounded drop-shadow ${field.fullHeight ? 'h-full' : ''}`}
          />
        );
      case 'tags':
        return (
          <TagsInput
            label={field.label}
            onChange={(tags) => handleChange(field.label, tags)}
          />
        );
      case 'dropdown':
        return (
          <DropDown options={field.options || [[]]} onChange={(dropdown) => handleChange(field.label, dropdown)}/>
        );
      default:
        return null;
    }
  };

  return (
    <form className="flex gap-4">
      {/* Left Column */}
      <div className={`${columns.col1} flex flex-col bg-white w-1/2 space-y-4 p-8 rounded-lg drop-shadow-lg m-4`}>
        {fields
          .filter(field => field.column === 1)
          .map((field, index) => (
            <div
              key={index}
              className={`${field.fullHeight ? 'h-full' : ''}`}
            >
              {renderField(field)}
            </div>
          ))}
      </div>

      {/* Right Column */}
      <div className={`${columns.col2} flex flex-col bg-white w-1/2 space-y-4 p-8 rounded-lg drop-shadow-lg m-4`}>
        {fields
          .filter(field => field.column === 2)
          .map((field, index) => (
            <div key={index}>
              {renderField(field)}
            </div>
          ))}
        <button 
          type="button"
          onClick={() => console.log(formValues)}
          className='w-full bg-purple-500 text-white p-2 rounded drop-shadow'
          >
            Submit
          </button>
      </div>
    </form>
  );
};

export default DynamicForm;


    // let formInput: String = "bg-purple-400 rounded-2xl drop-shadow-lg"
    // let formText: String = "text-white text-2xl p-6";

        // <div className="h-[calc(100vh-64px)] w-full flex flex-row items-center gap-12 px-8 py-4">
        //     <div className="flex bg-white h-[80vh] w-2/3 text-black rounded-2xl drop-shadow-lg p-6">
        //         <div className={`${formInput} w-full h-full`}>
        //             <h1 className={`${formText}`}>Enter Prompt</h1>
        //         </div>
        //     </div>
        //     <div className="grid grid-cols-2 grid-rows-8 bg-white h-[80vh] w-1/3 text-black rounded-2xl drop-shadow-lg p-6 gap-6">
        //         <div className={` ${formInput} flex items-center col-span-2`}>
        //             <h1 className={`${formText}`}>Title</h1>
        //         </div>
        //         <div className={`${formInput} col-span-2 row-span-2`}>
        //             <h1 className={`${formText}`}>Description</h1>
        //         </div>
        //         <div className={`${formInput}`}>
        //             <h1 className={`${formText}`}>^ Model</h1>
        //         </div>
        //         <div className={`${formInput}`}>
        //             <h1 className={`${formText}`}>^ Version</h1>
        //         </div>
        //         <div className="grid grid-cols-3 grid-rows-2 bg-purple-400 col-span-2 row-span-2 rounded-2xl drop-shadow-lg">
        //             <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
        //                 <h1 className="text-black text-2xl">Testing</h1>
        //             </div>
        //             <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
        //                 <h1 className="text-black text-2xl">Testing</h1>
        //             </div>
        //             <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
        //                 <h1 className="text-black text-2xl">Testing</h1>
        //             </div>
        //             <div className="flex items-center justify-center bg-white rounded-2xl drop-shadow-lg m-2">
        //                 <h1 className="text-black text-2xl">Testing</h1>
        //             </div>
        //             <div className='flex items-center justify-center rounded-full border-8 border-white m-2'>
        //                 <h1 className="text-white text-6xl">+</h1>
        //             </div>
        //         </div>
        //         <div className="flex items-center justify-center col-span-2">
        //             <h1 className='text-2xl'>Advanced Options</h1>
        //         </div>
        //         <div className={`${formInput} flex items-center justify-center`}>
        //             <h1 className={`${formText}`}>Save</h1>
        //         </div>
        //         <div className="flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-600 to-purple-400 rounded-2xl drop-shadow-lg">
        //             <h1 className={`${formText}`}>Publish</h1>
        //         </div>
        //     </div>
        // </div>