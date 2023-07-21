import React from 'react';

function Button({ children, className, onClick }) {
  return (
    <button
      style={{ cursor: 'pointer' }}
      className={`p-2 hover:ring-2 dark:hover:ring-gray-300 hover:ring-gray-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
