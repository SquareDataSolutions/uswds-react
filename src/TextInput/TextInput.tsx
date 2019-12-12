import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  name?: string;
  type?: string;
  value?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  form?: string;
  disabled?: boolean
}

interface TextInputState {
  textInputValue: string;
}

class TextInput extends React.Component<TextInputProps, TextInputState> {

  render() {

    const {
      id,
      className,
      name,
      type,
      value,
      required,
      maxLength,
      placeholder,
      form,
      disabled
    } = this.props;

    return (
      <input
        id={id}
        className={className}
        name={name}
        type={type}
        value={value}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        form={form}
        disabled={disabled} />
    )
  }
}

export default TextInput;
