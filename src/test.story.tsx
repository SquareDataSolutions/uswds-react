import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Test', module);

stories.add('Test', () => {
  return <>{'Hello World!'}</>;
});
