import React from 'react'
import {Link as LinkR} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import {DiCssdeck} from 'react-icons/di'
import {FaBars} from 'react-icons/fa'
const Nav=styled.div`
  background-color:${({ theme }) => theme.card_light};
  height:80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;
  @media screen and (max-width:960px){
    transition: 0.8s all ease;
  }
`;
const NavContainer=styled.div`
display: flex;
justify-content: center;
height: 60px;
z-index: 1;
width: 100%;
padding:0 24px;
max-width: 1200px;
`;
const NavLogo=styled(LinkR)`
width: 80%;
padding: 0 6px;
display: flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width:640px){
 padding :0 0px ;
}
`;
const MobileIcon=styled.div`
display: none;
@media screen and (max-width:640px){
 display: block;
 position: absolute;
 top: 0;
 right: 0;
 transform: translate(-100%,50%);
 cursor: pointer;
 color: ${({ theme }) => theme.text_primary};
}
`;
const NavItems=styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  list-style: none;
  @media screen and (max-width:768px){
    display: none;
  }
`;
const NavLink=styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${({ theme }) => theme.primary}
  }

`;
const ButtonContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px){
    display: none;
  }
`;
const GithubButton=styled.a`
  background-color: transparent;
  color:  ${({ theme }) => theme.primary};
  border:1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 6.5px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover{
    background-color: ${({ theme }) => theme.primary};
    color: white};
  @media screen and (max-width: 640px){
    font-size: 0.8rem;
  }
`;
const Span =styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + '99'};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  border-radius: 0 0 0 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? '1' : '0')};
  z-index: ${({ open }) => (open ? '1' : '-1')};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Navbar = () => {
  
  const [open,setOpen]=React.useState(false);
  const theme=useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/"
        style={{
          display:'flex',
          alignItems:"center",
          color:"white",
          marginBottom:"20",
          cursor:"pointer",
        }}>
          <DiCssdeck size="3rem" /> <Span>PortFolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
          onClick={()=>{
            setOpen(!open)
          }}/>
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
        <GithubButton href='https://github.com/Muthu-1103/' target="_blank" rel="noopener noreferrer">GitHub</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {
        open && (
          <MobileMenu open={open}>
            <MobileMenuLinks to="#about" onClick={()=>
              setOpen(!open)
            }>About</MobileMenuLinks>
            <MobileMenuLinks to="#skills" onClick={()=>
              setOpen(!open)
            }>Skills</MobileMenuLinks>
            <MobileMenuLinks to="#experience" onClick={()=>
              setOpen(!open)
            }>Experience</MobileMenuLinks>
            <MobileMenuLinks to="#projects" onClick={()=>
              setOpen(!open) 
            }>Projects</MobileMenuLinks>
            <MobileMenuLinks to="#education" onClick={()=>
              setOpen(!open)
            }>Education</MobileMenuLinks>
            <MobileMenuLinks to="#contact" onClick={()=>
              setOpen(!open)
            }>Contact</MobileMenuLinks>
            <GithubButton style={{
              padding:"10px 16px",
              background:`${theme.primary}`,
              color:"white",
              width:"max-content",
            }}
            href="https://github.com/Muthu-1103/"
            target="_blank">GitHub Profile</GithubButton>
          </MobileMenu>
        )
      }
    </Nav>
  )
}

export default Navbar
