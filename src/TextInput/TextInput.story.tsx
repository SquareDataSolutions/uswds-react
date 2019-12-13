import * as React from 'react';
import TextInput from './TextInput';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Form/Text Input', module);

stories
  .add('Default', () => {
    const placeHolderText = text('Placeholder Text', 'Placeholder Text');
    return (
      <TextInput
        placeholder={placeHolderText}
        className={'usa-input'}
      />
    )
  })
  .add('Input Focused', () => {
    const placeHolderText = text('PlaceHolder Text', 'PlaceHolder');
    return (
      <TextInput
        placeholder={placeHolderText}
        className={'usa-input usa-focus'}
      />
    )
  })
  .add('Error', () => {
    const placeHolderText = text('PlaceHolder Text', 'PlaceHolder');
    return (
      <TextInput
        placeholder={placeHolderText}
        className={'usa-input usa-input--error'}
      />
    )
  })
  .add('Text Input', () => {
    const placeHolderText = text('PlaceHolder Text', 'PlaceHolder');
    return (
      <TextInput
        placeholder={placeHolderText}
        className={'usa-input usa-input--success'}
      />
    )
  });
