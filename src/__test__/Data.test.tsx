import { BrowserRouter } from 'react-router-dom'
import Data from '../Pages/Data'
import { render,screen,fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';

test("should render input element", async () => {
    render(<BrowserRouter><Data /></BrowserRouter>);
    const divElement = screen.getByTestId('Data');
    expect(divElement.childElementCount).toBe(1);
  });

test("should check for heading elemnt", async() =>{
  render(<BrowserRouter><Data /></BrowserRouter>);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});