import React from 'react'
import styled from 'styled-components'
import ankur from './AUG02264_11zon.jpg'

function Contact() {

  return (
    <Contact1>
      <div className='left'>
        <div>
          <input placeholder='                             Search' className='searchbar' />
        </div>

        <div className='person'>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'40%',marginLeft:'2px',marginTop:'2px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          <div className='individual'>
            <div >
              <img src={ankur} style={{width:'60px',height:'55px',borderRadius:'50%',marginLeft:'2px',marginTop:'5px'}}/>
            </div>

            <div style={{marginTop:'8px'}}>
               Jane Cooper
               <br/>
               Loreum Ipsum
            </div>
            <div style={{marginRight:'5px',marginTop:'8px'}}>
              2:34 PM 
              <br/>
              5
            </div>
          </div>
          

        </div>
      </div>


      <div className='right'>

        <div className='upperpart'>

        </div>
        <div className='lowerpart' >
          <input placeholder='       Type your message here' style={{width:'600px',height:'50px',marginTop:'17px'}}/>
          <button style={{marginLeft:'30px',height:'50px',width:'100px',color:'red'}}>Send</button>
        </div>
            
      </div>
    </Contact1>
  )
}

export default Contact

const Contact1 = styled.div`
  display:flex;
  margin-top:-29px;

  .left{
    // border:2px solid red;
    width:324px;
    height:648px;
  
     background:black;
  }
  .right{
    border:2px solid black;
    height:648px;
    width:1204px;
  }
  .searchbar{
     margin-top:5px;
     width:312px;
     height:40px;
     border:2px solid white;
     background:white;
     margin-left:2px;
     display:flex;
     justify-content:center;
     font-size:15px;
  }
  .person{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  .individual{
    display:flex;
    width:324px;
    justify-content:space-between;
    border-bottom: 1px solid red;
    color:white;
    height:66px;
  }
  .upperpart{
      border:2px solid green;
      width:1200px;
      height:560px;
  } 
  .lowerpart{
    width:1180px;
    height:30px;
    margin-left:30px;
  }

`;