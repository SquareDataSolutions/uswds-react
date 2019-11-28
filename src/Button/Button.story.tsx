import * as React from 'react';
import { DefaultButton, Button } from '.';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('Default', () => {
  return (
    <DefaultButton className={'usa-button'}>
      {'Click Me'}
    </DefaultButton >
  )
});

stories.add('Secondary Color', () => {
  return (
    <DefaultButton className={'usa-button usa-button--secondary'}>
      {'Click Me'}
    </DefaultButton >
  )
});

stories.add('Base Color', () => {
  return (
    <DefaultButton className={'usa-button usa-button--accent-cool'}>
      {'Click Me'}
    </DefaultButton >
  )
});

stories.add('Outline', () => {
  return (
    <DefaultButton className={'usa-button usa-button--base'}>
      {'Click Me'}
    </DefaultButton >
  )
});

stories.add('Outline Inverse', () => {
  return (
    <DefaultButton className={'usa-button usa-button--outline'}>
      {'Click Me'}
    </DefaultButton >
  )
});

stories.add('Big Button', () => {
  return (
    <DefaultButton className={'usa-button usa-button--big'}>
      {'Click Me'}
    </DefaultButton >
  )
});