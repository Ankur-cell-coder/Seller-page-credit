import React from 'react'
import styled from "styled-components";

function Navbar() {
    return (
        <Navbar1>
            <div style={{marginLeft:'20px'}}>
                LOGO
            </div>

            <div className='middle_navbar'>

                <div>
                  Dashboard
                </div>
                <div>
                  Orders
                </div>
                <div>
                  Catalogue
                </div>
                <div>
                  Logistics
                </div>
                <div>
                  R & C 
                </div>
                <div>
                 Rating
                </div>
                <div>
                    Contact/Support
                </div>


            </div>
                
            <div className='lgout'>
                Logout
            </div>
        </Navbar1>
    )
}

export default Navbar

const Navbar1 = styled.div`
display:flex;
height:60px;

background:skyblue;


.middle_navbar{
    
    display:flex;
    justify-content: space-between;
    width:700px;
    margin-left:300px;
    margin-right:400px;
}


`;