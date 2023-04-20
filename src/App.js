import {Routes, Route} from "react-router-dom";
import Main from "./page/main";
import './App.css'
import TransitionPage from "./page/transition";
import Error from "./page/Error";
import ThreePage from "./page/three";
import Lessons1 from "./page/lessons1";

function App() {
  // const [value, setValue] = useState('test')
  // const {result, run} = useWebWorker((e) => 'result')
  // const onclickH1 = () => {
  //   run(value)
  // }

  return (
    <Routes>
      <Route path='/' element={<Lessons1/>} errorElement={<Error/>}/>
      <Route path='/main' element={<Main/>} errorElement={<Error/>}/>
      <Route path='/three' element={<ThreePage/>}/>
      <Route path='/transition' element={<TransitionPage/>}/>
    </Routes>
  );
}

export default App;
