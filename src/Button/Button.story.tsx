import * as React from 'react';
import { Button } from '.';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('Button', () => {
  return (
    <Button>
      {'Click Me'}
    </Button >
  )
});
