import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
const Router = createBrowserRouter([{
  path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'Home',element:<Home/>},
  ]}])
function App() {
  return <>
<RouterProvider router={Router}/>
  </>;
}

export default App;
