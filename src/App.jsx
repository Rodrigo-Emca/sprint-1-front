import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import router from '../src/pages/index';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      {router}
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
