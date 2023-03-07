import './App.css';
import Index from './components/Index/Index';
import IndexLayout from './layouts/IndexLayout/IndexLayout';


function App() {
  return (
    <div className="App">
      <IndexLayout>
        <Index/>
      </IndexLayout>
    </div>
  )
}

export default App;