import './App.css';
import Index from './pages/Index/Index';
import IndexLayout from './layouts/IndexLayout/IndexLayout';
import { router } from './pages/index';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <IndexLayout>
      <RouterProvider router={router}/>
       </IndexLayout>
    </div>
  );
}

export default App;