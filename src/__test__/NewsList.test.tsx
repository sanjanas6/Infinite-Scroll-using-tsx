import { BrowserRouter } from 'react-router-dom'
import NewsList from '../Pages/NewsList'
import { render,screen,fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';

// test('should render the searchbox', async() =>{
//     render(
//         <>
//         <BrowserRouter>
//         <NewsList />
//         </BrowserRouter>
//         </>
//     );
//     const searchbox = await screen.findByRole("textbox")
//     expect(searchbox).toBeInTheDocument();
// })
//findby is asynchronous , if await is not used test will fail
test('should check elements', async () => {
    render(<BrowserRouter><NewsList/></BrowserRouter>);
    expect((await screen.findByTestId('divmain'))).toBeInTheDocument();
    expect((await screen.findByTestId('divmain')).childElementCount).toBe(1);
})

describe('Test cases for SearchBox',() => {
    test('should render the search box for news', async () => {
        render(<BrowserRouter ><NewsList/></BrowserRouter>);
        const searchbox = await screen.findByRole("textbox");
        expect(searchbox).toBeInTheDocument();
    });
    
    test('should render placeholder value', () => {
        render(<BrowserRouter><NewsList /></BrowserRouter>);
        expect((screen.getByPlaceholderText("Search By Title/Author"))).toBeInTheDocument();
    });
    
    test('should work for entered value in placeholder', async() =>{
        render(<BrowserRouter><NewsList /></BrowserRouter>);
        const res = await screen.findByPlaceholderText<HTMLInputElement>("Search By Title/Author");
        fireEvent.change(res, {
            target:{
                value: "NewsSearch"
            }}
        )
        console.log(res.value)
        expect(res.value).toBe("NewsSearch");
    });
})
