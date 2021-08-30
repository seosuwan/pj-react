import React from 'react'
import styled from 'styled-components';
import logout from '../images/logout.png'
import logo from '../images/logo.jpg'
import settings from '../images/settings.png'
import { Link } from 'react-router-dom';

const MyPage = () => {
    // const openNav = () => {
    //     document.getElementById('mypage').style.display = 'block';
    // }
    // const closeNav = () => {
    //     document.getElementById('mypage').style.display = 'none';
    // }
    return (<>
    {/* <button onClick={openNav}>openNav</button> */}
    <MyPageDiv id="mypage">
        {/* <ButtonX onClick={closeNav}>X</ButtonX> */}
        <br/>
        <DivMyPage>
            <br/>
            <Profile src={logo} alt=""/>
            <h5>WELLOCOME, USER!</h5>
            <Menu>    
            <Menuul>
                <Menuli>
                    <Link to="/"><Icon src = {settings} alt=""/>Setting</Link>
                </Menuli>
                <Menuli>
                    <Link to="/"><Icon src = {logout} alt=""/>LogOut</Link>
                </Menuli>
            </Menuul>
        </Menu>
        </DivMyPage>    
    </MyPageDiv>
    </>)
}
export default MyPage
const MyPageDiv = styled.div`
    float:left;
    width: 250px;
    height: 450px;

`
// const ButtonX = styled.button`
//     float:right;
// `
const DivMyPage = styled.div`
    text-align:center;
    
`
const Profile = styled.img`
    margin: auto;
    width:50%;
    height:10%;
`
const Menu = styled.div`
    float:left;
`
const Menuul = styled.ul`
    margin: 50%;
    padding:5px;
    list-style-type:none;
    
`
const Menuli = styled.li`
    padding:1px;
    font-family: "br";
    font-size: 5px;
    font-color: black;
`
const Icon = styled.img`
    float:left;
    width: 20px;
    height: 20px;
    padding: 3px;
`