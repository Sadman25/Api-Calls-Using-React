import React, { useState } from 'react'
import axios from 'axios';
export default function PhoneAPI() {
    
    const [data,setData] = useState();
    const [mobile, setMobile] = useState();
    
    const url = `https://phonevalidation.abstractapi.com/v1/?api_key=ecb360c2a34748dbac2c07c75394f5f3&phone=${mobile}`
    const handleMobile=(e)=>{       
        const number = e.target.value
        if(number.match(".*\\d.*")){
            document.getElementsByTagName('small').innerHTML='Input can not be string'
        }else{
            setMobile(e.target.value) 
        }
        
    }

 const search = (e)=> {
    if (e.key ==='Enter'){
        axios.get(url)
        .then((response)=>{
            setData(response.data)
            console.log(response.data)
            setMobile('')
        })
    }
}

  return (
    <div className='ip'>        
        <div className='container'>
            <h2>Phone Number Validation</h2>
            <small></small>
            <div className="search">
                <input
                placeholder='Must add +88'                
                type="text"
                value={mobile}
                onChange={handleMobile}
                onKeyPress={search}
                />
            </div>
        </div>
            <div className='number'>
                {data? <p><b>Local format:</b> {data.format.local}</p> : null}
            </div>
                     
            <div className='country'>
                {data? <p><b>Country:</b> {data.country.name}</p> : null}
            </div>
            <div className='code'>
                {data? <p><b>Code:</b> {data.country.code}</p> : null}
            </div>
            <div className='type'>
                {data? <p><b>Type:</b> {data.type}</p> : null}
            </div>
            <div className='carrier'>
                {data? <p><b>Carrier:</b> {data.carrier}</p> : null}
            </div>           
    </div>
  )
}
