import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Form } from './form';
import { Header } from './header';
import { TableData } from './table';
import { Welcome } from './welcome';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/table" element={<TableData />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
