import React from 'react';
import { storiesOf } from '@storybook/react';

import { Thing } from './index';

const stories = storiesOf('Test', module);

stories.add('Thing', () => {
  return <Thing />;
});
