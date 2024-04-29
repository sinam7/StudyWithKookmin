import './App.css';
import Button from './components/ui/Button';
import Input from "./components/ui/Input";
import Card from "./components/ui/Card";

function App() {
  return (
      <div>
        <Button title={'로그인'}/>
        <Input
            placeholder='검색어를 입력하세요...'
        />
      <Button title={'검색'}/>
      <Card title='테스트 제목' time='테스트 시간' tags={['Spring boot', 'React']}/>
      </div>
);
}

export default App;
