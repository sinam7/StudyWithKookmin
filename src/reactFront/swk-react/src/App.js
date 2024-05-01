import './App.css';
import Button from './components/ui/Button';
import Input from "./components/ui/Input";
import CardContainer from "./components/ui/CardContainer";
import Toolbar from "./components/ui/Toolbar";

function App() {
    return (
        <div>
            <Toolbar>
                <Button title={'로그인'}/>
                <Input
                    placeholder='검색어를 입력하세요...'
                />
                <Button title={'검색'}/>
            </Toolbar>
            <CardContainer/>
        </div>
    );
}

export default App;
