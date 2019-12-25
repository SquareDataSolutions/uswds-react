import React from 'react';

interface OptionProps extends React.HTMLAttributes<HTMLOptionElement> {
  value?: string;
}

function Option(props: OptionProps) {
  return <option value={props.value}>{props.children}</option>;
}

export default Option;
