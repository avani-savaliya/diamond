
import './App.css';
import { Route, Routes } from 'react-router-dom';
import './asstes/Scss/default/default.css'
import './asstes/Scss/custom/custom.css'
import './asstes/Scss/style/style.css';
import Home from './Home';
import Nabvar from './Nabvar';
import Diamond from './componets/pages/Diamond/Diamond';



function App() {
  // const isAuth = sessionStorage.getItem("isAuth")
  // const token = sessionStorage.getItem("token")

  // const dispatch = useDispatch()

  // useEffect(() => {
  //  if(!token || !isAuth) return;

  //  dispatch(setoldAdmin({token}))
  // }, [token,isAuth]);
  
  return (
    <div className="App">
     <Nabvar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/diamond/*" element={<Diamond />}></Route>

      </Routes>
    </div>
  );
}

export default App;
