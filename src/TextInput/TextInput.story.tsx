import * as React from 'react';
import TextInput from './TextInput';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

const stories = storiesOf('Form/Text Input', module);

stories
  .addDecorator(withKnobs)
  .add('Text Input', () => {

    const values = {
      'Default': 'usa-input',
      'Input Focused': 'usa-input usa-focus',
      'Input Error': 'usa-input usa-input--error',
      'Input Success': 'usa-input usa-input--success'
    }

    const placeHolderText = text('PlaceHolder Text', 'PlaceHolder');
    const classNames = select('Class Names', values, values.Default);

    return (
      <TextInput
        placeholder={placeHolderText}
        className={classNames}
      />
    )
  });
