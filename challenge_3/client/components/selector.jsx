import React from 'react';

const Selector = ({options}) => {
  return (
    <tr>
      <th>Knocked</th>
      <td>
        <div className="select">
          <select>
            {options.map(option => {
              return <option key={option}>{option}</option>
            })}
          </select>
        </div>
      </td>
      <td></td>
    </tr>
  );
}

export default Selector;
