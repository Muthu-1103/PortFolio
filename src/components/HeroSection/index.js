import React from 'react'
import styled from 'styled-components'
import {Bio} from '../../data/Constant'
import Typewriter from 'typewriter-effect'
import Pic from '../../images/Photo.jpg'
const HeroContainer=styled.div`
  background-color: ${({theme})=>theme.card_light};
  padding: 80px 30px;
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (max-width:960px){
    padding:66px 16px;
  }
  @media screen and (max-width:640px){
    padding:32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width:960px){
    flex-direction: column;
  }
`;
const HeroLeftContainer=styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width:960px){
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width:640px){
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer=styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width:960px){
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width:640px){
    order: 1;
    margin-bottom: 30px;
  }
`;
const Title=styled.div`
font-size: 45px;
font-weight: 700;
color:${({theme})=>theme.text_primary};
line-height: 70px;
@media screen and (max-width:960px){
  text-align: center;
}
@media screen and (max-width:640px){
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 8px;
}

`;
const TextLoop=styled.div`
  font-size: 32px;
  font-weight: 600px;
  line-height: 68px;
  gap: 12px;
  display: flex;
  color: ${({theme})=>theme.text_secondary};
  @media screen and (max-width:960px){
  text-align: center;
}
@media screen and (max-width:640px){
  font-size: 22px;
  line-height: 48px;
  margin-bottom: 16px;
}
`;
const Span=styled.div`
color: ${({theme})=>theme.primary};
cursor: pointer;
`;
const SubTitle=styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({theme})=>theme.text_primary+95};
  @media screen and (max-width:960px){
  text-align: center;
}
@media screen and (max-width:640px){
  font-size: 16px;
  line-height: 32px;
}
`;
const ResumeButton=styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color :${({theme})=>theme.white};
  border-radius:20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634,-20px -20px 60px #1F2634;
  &:hover{
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter:brightness(1);
  }
  @media screen and (max-width:640px){
    padding: 12px 0;
    font-size: 18px;
  }
`;
const Image=styled.img`
  width: 70%;
  height: 100%;
  border-radius: 50%;
  max-width: 400;
  max-height: 400;
  border: 2px solid ${({theme})=>theme.primary};
  position: relative;
  border-radius: 50px;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width:960px){
    max-width: 400;
    max-height: 400;
  }
  @media screen and (max-width:640px){
    max-width: 280;
    max-height: 280;
  }
`;
const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Muthukumarasamy_S.pdf`; 
    link.download = 'Muthukumarasamy_S_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='about'>
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
          <Title>Hi, I am <br></br>{Bio.name}</Title>
          <TextLoop>I am a <Span><Typewriter 
          options={{
            strings:Bio.roles,
            autoStart:true,
            loop:true
          }}/></Span></TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href={Bio.resume} onClick={handleDownload}>Download Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={Pic} alt="Profile"></Image>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
