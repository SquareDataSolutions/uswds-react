import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup);

test('Button will render in the DOM', () => {
  const { getByText } = render(
    <Button data-testid="uswds-button">
      {'Click Me!'}
    </Button>
  );
  const ButtonElement = getByText('Click Me!');
  expect((ButtonElement as HTMLButtonElement)).toBeInTheDocument();
});

test('Trigger onClick if button is clicked', () => {
  const mockCallBack = jest.fn();

  const { getByText } = render(
    <Button data-testid="uswds-button" onClick={mockCallBack}>
      {'Click Me!'}
    </Button>
  );
  const ButtonElement = getByText('Click Me!');
  ButtonElement.click();
  expect(mockCallBack).toHaveBeenCalledTimes(1);
});

test('Disallow user to click if disabled', () => {
  const { getByText } = render(
    <Button data-testid="uswds-button" disabled={true}>
      {'Click Me!'}
    </Button>
  );
  const ButtonElement = getByText('Click Me!');
  expect((ButtonElement as HTMLButtonElement)).toBeDisabled();
});
