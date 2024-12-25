import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SOLVAS_ROUTES  from './router/Router';

function App() {
  const router = createBrowserRouter([
    ...SOLVAS_ROUTES,
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
