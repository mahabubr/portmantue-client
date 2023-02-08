import { Container } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddContent from './Pages/Dashboard/AddContent/AddContent';
import AllContent from './Pages/Dashboard/AllContent/AllContent';
import Home from './Pages/Home/Home';
import ReadingHistory from './Pages/ReadingHistory/ReadingHistory';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/add-content',
          element: <AddContent />
        },
        {
          path: '/reading-history',
          element: <ReadingHistory />
        },
        {
          path: '/all-content',
          element: <AllContent />
        }
      ]
    }
  ])

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
