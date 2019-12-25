import React from 'react';

import Option from './Option';

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  id: string;
}

function Select(props: SelectProps) {
  return (
    <select className="usa-select" id={props.id}>
      {props.children}
    </select>
  );
}

export default Select;
