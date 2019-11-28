import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { DefaultButton } from '../index';

afterEach(cleanup);

describe('Test that DefaultButton will render without crashing', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <DefaultButton data-testid="uswds-defaultButton">
        {'Click Me!'}
      </DefaultButton>
    );
    const DefaultButtonElement = getByText('Click Me!');
    expect((DefaultButtonElement as HTMLButtonElement)).toBeInTheDocument();
  });
});
