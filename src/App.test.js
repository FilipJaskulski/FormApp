import { render, screen } from '@testing-library/react';
import App from './App';
import {Simulate} from "react-dom/test-utils";

test('Document have required elements and submit button is working', () => {
  render(<App />);
  const inputName = screen.getByPlaceholderText('Name');
  const inputLastName = screen.getByPlaceholderText('Last Name')
  const inputEmail = screen.getByPlaceholderText('Email')
  const inputDate = screen.getByPlaceholderText('Date')
  const submitButton = screen.getByText('Send')

  expect(inputName).toBeInTheDocument();
  expect(inputLastName).toBeInTheDocument()
  expect(inputEmail).toBeInTheDocument()
  expect(inputDate).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()

  inputName.value = 'Jan'
  inputLastName.value = 'Test'
  inputEmail.value = 'test@test.com'
  inputDate.value = new Date(Date.now())
  Simulate.click(submitButton)
});
