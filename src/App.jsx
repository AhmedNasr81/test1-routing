import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Layout from './Component/Layout/Layout';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Notfound from './Component/Notfound/Notfound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: '*', element: <Notfound /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
