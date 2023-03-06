import './App.css';
import FormChapter from './components/FormChapter/FormChapter';
import Index from './components/Index/Index';
import IndexLayout from './layouts/IndexLayout/IndexLayout';

function App() {
  return (
    <div className="App">
      <IndexLayout>
        <Index/>
        <FormChapter/>
      </IndexLayout>
    </div>
  );
}

export default App;