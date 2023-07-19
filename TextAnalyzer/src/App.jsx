import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {
  const [Mode,setMode]=useState(`light`);
  const [alert,setalert]=useState(null);
  
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(Mode===`light`){
        setMode(`dark`)
        document.body.style.backgroundColor=`black`;
        showalert("Dark mode enabled","success")
        // document.title='TextUtils- Dark Mode'
    }
    else{
      setMode(`light`)
      document.body.style.backgroundColor=`white`;
      showalert("Light mode enabled","success")
      // document.title='TextUtils- Light Mode'
    }
  }
  const colors={
    JapaneseIndigo:()=>{
      if(Mode===`dark`){
        document.body.style.backgroundColor=`#264348`;
        showalert("Indigo mode enabled","success")
  
      }}
      ,
      Green:()=>{
        if(Mode===`dark`){
          document.body.style.backgroundColor=`#203b31`;
          showalert("Green mode enabled","success")
        }
      }
  }
  
  return (
  <BrowserRouter>
      <Navbar title="TextUtils" mode={Mode} colors={colors} showalert={showalert} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
            <Routes>
            <Route exact path='/' element={<TextForm showalert={showalert} heading="Enter the text to analyse" mode={Mode}/>}/>
              <Route exact path='/home' element={<TextForm showalert={showalert} heading="Enter the text to analyse" mode={Mode}/>}/>
              <Route exact path='/about' element={<About mode={Mode}/>} />
            </Routes>
          </div>
          </BrowserRouter>
  )
}

export default App
