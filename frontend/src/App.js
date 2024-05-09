import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddService from './component/addservice';
import Servicedetails from './component/servicedetails';

import UpdateService from './component/update_service';
import Header from './component/header';


function App() {
  return (
    <div className="App">
   <Router>
   <Header/>
 <Routes>

 
<Route path='/' element={<AddService/>}></Route>
<Route path='/details' element={<Servicedetails/>}></Route>
<Route path='/update_service/:id' element={<UpdateService/>}></Route>
   </Routes>
   </Router>
    </div>
  );
}

export default App;
