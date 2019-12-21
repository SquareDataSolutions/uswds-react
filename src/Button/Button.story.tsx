import * as React from 'react';
import {
  DefaultButton,
  SecondayButton,
  AccentCoolButton,
  BaseButton,
  OutlineButton,
  OutlineInverseButton,
  BigButton,
} from '../index';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('Default', () => {
  return <DefaultButton>{'Click Me'}</DefaultButton>;
});

stories.add('Secondary Color', () => {
  return <SecondayButton>{'Click Me'}</SecondayButton>;
});

stories.add('Accent Cool Color', () => {
  return <AccentCoolButton>{'Click Me'}</AccentCoolButton>;
});

stories.add('Base Color', () => {
  return <BaseButton>{'Click Me'}</BaseButton>;
});

stories.add('Outline', () => {
  return <OutlineButton>{'Click Me'}</OutlineButton>;
});

stories.add('Outline Inverse', () => {
  return <OutlineInverseButton>{'Click Me'}</OutlineInverseButton>;
});

stories.add('Big Button', () => {
  return <BigButton>{'Click Me'}</BigButton>;
});
