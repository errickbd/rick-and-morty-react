import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from './pages/HomePage';
import Story from "./pages/Story";
import Characters from "./pages/Characters";
import AllCharactersPage from "./pages/AllCharactersPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'story/',
                element: <Story/>
            },
            {
                path: 'characters/',
                element: <Characters/>
            },
            {
                path: 'allcharacters/',
                element: <AllCharactersPage/>
            }
        ],
    },
]);

export default router;