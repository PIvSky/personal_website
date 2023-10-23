import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// components
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage';
import Bio from './components/Bio';
import Contact from './components/Contact';
// stylesheet
import './App.scss';

const websiteRoutes = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <HomePage/>},
      { path:'/contact', element: <Contact/>},
      { path: '/bio', element: <Bio/>},
    ],
  }
])

function App() {
  return (
    <RouterProvider router={websiteRoutes}></RouterProvider>
  );
}

export default App;