import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../page/Home';
import Login from "../page/login";
import NotFound from '../page/NotFound'



const routes=createBrowserRouter([
    {
        path: '/',
        element: <App />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound/>,
      },
]);
export default routes;