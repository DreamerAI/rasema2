import React from 'react';

export const FormInput = ({ text, type = 'text', id, name, required }) => {
  return (
    <div className="mb-4 w-full flex flex-col gap-3">
      <label className="text-lg" htmlFor={id}>
        {text}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full p-2 border border-gray-300 rounded"
        {...(required && { required: true })}
      />
    </div>
  );
};
