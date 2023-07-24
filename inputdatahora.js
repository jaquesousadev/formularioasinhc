import React from 'react';

const HiddenDateTimeField = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Formato da data e hora: DD/MM/AAAA HH:mm:ss
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <input
      type="hidden"
      name="datetime"
      value={getCurrentDateTime()}
    />
  );
};

export default HiddenDateTimeField;
