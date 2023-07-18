import './App.css';

import BasicButtons from './components/BasicButtons';
import BasicTextFields from './components/BasicTextFields';
import SelectTextFields from './components/SelectTextFields';

function App() {
  return (
    <div className="App">
      <BasicButtons/>
      <BasicTextFields/>
      <SelectTextFields/>
    </div>
  );
}

export default App;
