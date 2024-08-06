import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import CompletedTask from './Components/CompletedTask/CompletedTask';
import UnCompletedTask from './Components/UnCompletedTask/UnCompletedTask';
import TaskContextProvider from './Context/TaskContext';
import  { Toaster } from 'react-hot-toast';
import NotFound from './Components/NotFound/NotFound';



const routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [

      {index: true, element: <Home />}  ,
      { path: 'completedtasks', element: <CompletedTask /> },
      { path: 'uncompletedtasks', element: <UnCompletedTask /> } ,
      { path: '*', element: <NotFound /> }
    ]
  }
])



function App() {


  return<TaskContextProvider>  <Toaster/>
    <RouterProvider router={routers}></RouterProvider>
     
     </TaskContextProvider>
     
}
export default App;
