import React from 'react';

import { Select, Option } from '../../index';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Form/Dropdown', module);

stories.add('Dropdown', () => {
  return (
    <Select id="dropdown">
      <Option value="">- Select -</Option>
      <Option value="option 1">Option 1</Option>
      <Option value="option 2">Option 2</Option>
    </Select>
  );
});
