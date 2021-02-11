import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/Hi there/i);
  //expect(linkElement).toBeInTheDocument();
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi there');

  ReactDOM.unmountComponentAtNode(div);
});