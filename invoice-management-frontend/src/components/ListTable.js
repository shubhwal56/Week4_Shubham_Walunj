import React from 'react';

const ListTable = ({ data }) => {
  if (!data.length) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  const renderCell = (value) => {
    if (typeof value === 'object' && value !== null) {
      // Convert object to a string representation
      return JSON.stringify(value);
    }
    return value;
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {headers.map((header) => (
              <td key={header}>{renderCell(item[header])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
