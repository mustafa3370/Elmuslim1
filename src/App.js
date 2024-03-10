import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
const Router = createBrowserRouter([{
  path:" ",element:<Layout/>,children:[
    {index:" ",element:<Home/>},
    {path:'Home',element:<Home/>},
    { path: "*", element: <NotFound/>}
  ]}])
function App() {
  return <>
<RouterProvider router={Router}/>
  </>;
}

export default App;
