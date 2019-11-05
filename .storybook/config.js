import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.(j|x)sx?$/), module);