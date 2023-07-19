import React , {useState}from 'react'
import '../TextForm.css'
// import Navbar from './Navbar';
export default function TextForm(props) {

  const [text, setText]= useState('') /*Hooks. They help in using the features of class in a function in React*/
  const handleUpclick =()=>{
   
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase","success")
  }
  const handleLoclick =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase","success")
  }
  const handleChange =(event)=>{
    setText(event.target.value)
  }
  
  let count=()=>{
    let sentence=text.split(/\s+/);
    return sentence.filter((element)=>{
      return element.length!==0;
    }).length;
  }
    
const longest=()=>{
       
    let sentence=text.split(/\s+/);
      let longestWord=sentence.reduce(function(a,b){
        if(a.length>b.length) return a;
        return b;
      },"");
      return longestWord;
  }

  const countParagraph=()=>{
    let trimmedText = text.trim();
    let paragraphs = trimmedText.split(/\n{2,}/g);
    let paragraphCount = paragraphs.length;

    return paragraphCount;
  }
  const clearText=()=>{
    setText('')
  }
  const copyText=()=>{
    return text;
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard!","success")
  };
  const pasteText=()=>{
    setText(text+' '+copyText());
  }
  const [search,setsearch]=useState('')
    const findText=(e)=>{
    setsearch(e.target.value)
    }

   const number=()=>{
    let sentence=text.split(/\s+/);
    let count=0;
    if(search==='') 
      return 0;
    
    for(let i=0;i<sentence.length;i++){
      if(sentence[i]===search && sentence[sentence.length-1]!==" ") {
        count=count+1;
      }
      
    }
    return count;
   }
   
   let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'grey':'white'
  }
  return (
    <div>
        <div className={`container text-${props.mode===`dark`?`light`:`dark`}`}>
      <h1 className='mb-1 my-2'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleChange} id="myBox" rows="6" value={text} style={myStyle} placeholder="Enter text here....."></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to uppercase</button>
      <button  disabled={text.length===0} className="btn btn-primary my-1" onClick={handleLoclick}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear text</button>
      <button  disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleCopy}>Copy text</button>
      <button  disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={pasteText}>Paste</button>

    </div>
    <div className={`container my-2 text-${props.mode===`dark`?`light`:`dark`}`}>
      <h1>Your text summary</h1>
      <p>{text.length===0?'There is no text':`${count()} words and ${text.length} characters}`}</p> 
      <p>{text.length!==0?`${longest()} is the longest word in your text.`:''}</p>
      <p>{text.length!==0?`${longest().length} is the length of ${longest()}.`:''}</p>
      <p>{text.length!==0?`The text has ${countParagraph()} paragraphs.`:''}</p>
      <input className="form-control me-2" type="search" onChange={findText} placeholder="Search" aria-label="Search"/>
      <button disabled={search.length===0} className="btn btn-primary my-2" type="submit" onClick={findText} >Search</button>
      {
        search.length!=0 && <p>{search} occurs {number()} time(s) in the text.</p>
       }
    </div>  
    </div>  
  )
}
