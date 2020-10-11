import styled from 'styled-components'
// export const body = styled.div`
// position:fixed;
// top:0;
// z-index:-1;
// width:100vw;
// height:100vh;

// `
export const LoginWrapper = styled.form`
width:400px;
/* height:700px; */
background:#e4e4e4;
opacity:0.8;
position:absolute;
top:50%;
left:50%;
transform:translateX(-50%) translateY(-50%);
border-radius:15px;
padding:10px 50px;
box-sizing:border-box;
`
export const Header = styled.div`
height:70px;
/* padding: 10px ; */
display:flex;
justify-content:center;
align-items:center;
border-bottom:1px solid #eee;
box-sizing:border-box;

`
export const Tab = styled.div`
color:#000;
font-size:17px;
font-weight:500;
// border-bottom:3px solid #3F9497;
padding-bottom:5px;
text-decoration:none;
`
export const Item = styled.div`
display:flex;
font-size:15px;
color:#000;
font-weight:500;
align-items:flex-end;
/* border-bottom:2px solid #eee; */
margin-top:15px;
align-items:center;
`
export const Btn = styled.div`
display:flex;
justify-content:center;
margin:20px 0;
` 