import React, { useState } from 'react'
import axios from 'axios';
export default function QuranAPI() {
  
  //const [error,setError] = useState()
  const [chapter,setChapter] = useState('');
  const [data,setData] = useState();
  const url = `https://api.quran.com/api/v4/chapters/${chapter}?language=en`

  const handleChapter= (e)=>{
    const temp = e.target.value;
    if(temp ===0 || temp>114){
      document.getElementsByTagName('small').innerHTML='Input must be between 1-114'
    }
    else{
      setChapter(temp)
    }
    
  }

  const search = (e)=> {
    if (e.key ==='Enter'){
        axios.get(url)
        .then((response)=>{
            setData(response.data)
            console.log(data)
            setChapter('')
        })
    }
}

  return (
    <div className='Quran'>      
      <div className='container'>
              <h2>Quran Chapter Information</h2>
              <small></small>
                <div className="search">
                  <input
                  placeholder='Enter between 1-114'
                  value={chapter}
                  type="number"
                  onChange={handleChapter}
                  onKeyPress={search} />
                </div>
                <div className='place'>
                {data? <p><b>Revelation Place:</b> {data.chapter.revelation_place}</p> : null}
                </div>
                <div className='order'>
                {data? <p><b>Revelation Order:</b> {data.chapter.revelation_order}</p> : null}
                </div>
                <div className='page'>
                  {data? <p><b>Pages:</b> {data.chapter.pages[0]} - {data.chapter.pages[1]}</p> : null}
                </div>
                <div className='verse'>
                  {data? <p> <b>Arabic:</b> {data.chapter.name_arabic}</p> : null}
                </div>
                <div className='arabic'>
                  {data? <p> <b>Total Verses:</b> {data.chapter.verses_count}</p> : null}
                </div>

        </div>
    </div>
  )
}
