import React from 'react'
import styled from 'styled-components'

function Search() {
  return (
    <search1>
    <input
     style={{border:'1px solid black',width:'600px',height:'30px',
    marginLeft:'480px',
    marginTop:'-5px',
    marginBottom:'15px',
    display:'flex',
    justifyContent:'center'
    }}
       placeholder="                                                  Search"></input>
   </search1>
  )

}

export default Search

const search1=styled.div`
 
 
`;