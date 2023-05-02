import React from 'react'
import styled from 'styled-components'
import Ratingareagraph from './Ratingareagraph'
import { Link, useNavigate } from 'react-router-dom';

function Ratinggraph() {
    const Navigate = useNavigate();
    const val = "< Back to Overview";
    return (
        <Rating1>

            
            <div className='graphsection'>
            <div >
                <button className='button' onClick={() => Navigate(-1)}>{val}</button>
            </div>
            <Ratingareagraph />
            </div>
           
           <div className='questions'>
            <div>
                1.How would you rate the services on a scale of 1-10?
            </div>
            <div>
                2.On a scale of 1-10,how easy was it to navigate our website?
            </div>
            <div>
                3.How satisfied are you with the customer services you received on a scale of 1-10?
            </div>
            <div>
                4.How satisfied are you with the quality of our products/services on a scale of 1-10?
            </div>
            </div>
        </Rating1>
    )
}

export default Ratinggraph

const Rating1 = styled.div`
display:flex;
margin-top:0px;
.button{
    width:200px;
     height:30px;
     background:white;
     border:1px solid gray;
    font-size:18px;
    margin-left:40px;
}

.questions{
    margin-top:60px;
    height:440px;
    margin-left:70px;
    display: flex;
  justify-content: space-between;
  flex-direction:column;
}

`;