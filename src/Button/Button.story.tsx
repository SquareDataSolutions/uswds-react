import * as React from 'react';
import { DefaultButton, Button } from '.';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('Button', () => {
  return (
    <Button>
      {'Click Me'}
    </Button >
  )
});

stories.add('Default Button', () => {
  return (
    <DefaultButton className={'usa-button'}>
      {'Click Me'}
    </DefaultButton >
  )
});