import './App.css';
import './colors.css';
import { Counter } from './components/Counter/Counter';
import {SearchForm} from "./components/SearchForm/SearchForm";

function App() {
    return (
        <div className="App">
            <Counter initialValue={ 0 } />
            <SearchForm initialValue={ '' }/>
        </div>
    );
}

export default App;
