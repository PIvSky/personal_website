import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage';
import Bio from './components/Bio';
import Pianist from './components/Pianist';
import Works from './components/Works';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Dev from './components/Dev';
// stylesheet
import './styles/App.scss';

const websiteRoutes = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <HomePage/>},
      { path:'/contact', element: <Contact/>},
      { path: '/bio', element: <Bio/>},
      { path: '/pianist/*', element: <Pianist/>},
      { path: '/works/*', element: <Works/>},
      { path: '/dev', element: <Dev/>},
    ],
  }
]) // praise: great way to make an abstraction instead of add ech import in the return function

function App() {
  return (
    <RouterProvider router={websiteRoutes}></RouterProvider>
    
  );
}

export default App;