import React from 'react'
import styled from 'styled-components'
import {skills} from '../../data/Constant'
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  position: relative;
  z-index: 1;
  align-items: center;
`;
const Wrapper=styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media screen and (max-width:960px) {
 flex-direction :column ;
}
`;
const Title=styled.div`
  font-size: 42px;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width:768px){
   margin-top :12px ;
   font-size: 32px;
  }
  color:${({theme})=>theme.text_primary}
`;
const Desc=styled.div`
  font-size: 18px;
  max-width: 600px;
  color:${({theme})=>theme.text_secondary};
  @media screen and (max-width:768px){
   font-size: 16px;
  }

`;
const SkillsContainer=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
gap: 30px;
justify-content: center;
`;
const Skill=styled.div`
width: 100%;
max-width: 500px;
background: ${({theme})=>theme.card};
border: 0.1px solid #854CE6;
box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
border-radius: 16px;
padding: 18px 36px;
@media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;
const SkillTitle=styled.h2`
  font-size:28px;
  font-weight: 600;
  color: ${({theme})=>theme.text_secondary+95};
  margin-bottom: 20px;
  text-align: center;
`;
const SkillList=styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 12px;
margin-bottom: 20px;
`;
const SkillItem=styled.div`
font-size: 16px;
font-weight: 400;
color: ${({theme})=>theme.text_primary+80};
border: 1px solid ${({theme})=>theme.text_primary+80};
border-radius: 12px;
padding:12px 16px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
@media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillIcon=styled.img`
  width: 24px;
  height: 24px;
`;
const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title>
          Skills
        </Title>
        <Desc>
          Areas in which I have gained Skills in my Past 3 Years from my Engineering
        </Desc>
        <SkillsContainer>
          {skills.map((item,index)=>(
            <Skill key={index}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {
                  item.skills.map((sk,skIndex)=>(
                    <SkillItem key={skIndex}>
                      <SkillIcon src={sk.image} alt="Images"/>
                      {sk.name}
                    </SkillItem>
                  ))
                }
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
      
    </Container>
  )
}

export default Skills
