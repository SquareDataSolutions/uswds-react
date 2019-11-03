import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { Thing } from '../src';

afterEach(cleanup);

describe('This will test Thing', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Thing />);
    expect(
      getByText('the snozzberries taste like snozzberries')
    ).toBeInTheDocument();
  });
});
