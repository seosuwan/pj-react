import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navi = () => (
    <div>
     
        <NaviList>
            <NaviItem><Link to='/history'><strong>History</strong></Link></NaviItem>
            <NaviItem><Link to='/review'><strong>Review</strong></Link></NaviItem>
            <NaviItem><Link to='/setting'><strong>Setting</strong></Link></NaviItem>
        </NaviList>
    </div>
)
export default Navi
const NaviList = styled.div`
    display: flex;
    width: 400px;
    // height: 400px;
    margin: 0 auto;
    
`

const NaviItem = styled.div`
    width: 150px;
    margin-left: 20px;
    margin-top: 30px
    display: flex;
    color: red;
    font-family: "ls";
    font-size: 13px
    text-align: right;
    `