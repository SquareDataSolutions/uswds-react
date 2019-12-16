import * as React from 'react';
import * as Buttons from './';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('Default', () => {
  return <Buttons.DefaultButton>{'Click Me'}</Buttons.DefaultButton>;
});

stories.add('Secondary Color', () => {
  return <Buttons.SecondayButton>{'Click Me'}</Buttons.SecondayButton>;
});

stories.add('Accent Cool Color', () => {
  return <Buttons.AccentCoolButton>{'Click Me'}</Buttons.AccentCoolButton>;
});

stories.add('Base Color', () => {
  return <Buttons.BaseButton>{'Click Me'}</Buttons.BaseButton>;
});

stories.add('Outline', () => {
  return <Buttons.OutlineButton>{'Click Me'}</Buttons.OutlineButton>;
});

stories.add('Outline Inverse', () => {
  return (
    <Buttons.OutlineInverseButton>{'Click Me'}</Buttons.OutlineInverseButton>
  );
});

stories.add('Big Button', () => {
  return <Buttons.BigButton>{'Click Me'}</Buttons.BigButton>;
});

stories.add('TAYLOR DID IT!', () => {
  return <div>TAYLOR DID IT</div>;
});
