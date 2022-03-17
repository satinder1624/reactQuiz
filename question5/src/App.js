import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [ words, setWords ] = useState([])
  const [ input, setInput ] = useState('')

  const wordsRendering = words?.map((word, i) =>
    <span key={i}>{word.word}</span>
  )
  
  useEffect(()=>{
    axios
    .get(`https://api.datamuse.com/words?rel_rhy=${input}`)
    .then(res => {
      setWords(res.data)
    })
  },[input])
  
  return (
    <div className="App">
      <div>
        <input
         type='text' 
         value={input} 
         onChange={(e) => setInput(e.target.value)}
         placeholder='Enter a word like forgetful'
        />
      </div>
      
      <div className='wordsContainer'>
        {wordsRendering}
      </div>
    </div>
  );
}

export default App;
