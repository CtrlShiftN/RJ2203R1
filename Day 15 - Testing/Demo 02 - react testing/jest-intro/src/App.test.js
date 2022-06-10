import { screen, render } from '@testing-library/react'
import App from './App';
import '@testing-library/jest-dom';

it('should have', async () => {
  render(<App />);
  const wrapper = await screen.findAllByText("test");
  expect(wrapper).toHaveLength(1)
})