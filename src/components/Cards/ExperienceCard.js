import React from 'react'
import styled from 'styled-components'
const Card=styled.div`
width: 650px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
padding:12px 16px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 12px;
transition: all 0.3s ease-in-out;
&:hover{
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}
@media (max-width: 768px){
  padding: 10px;
  gap: 8px;
  width: 300px;
}
border: 0.1px solid #306ee8;
box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;
const Top=styled.div`
width: 100%;
display: flex;
gap: 12px;
`;
const Logo=styled.img`
height: 50px;
background-color: ${({theme})=>theme.card};
border-radius: 10px;
margin-top: 10px;
@media only screen and (max-width:768px){
  height: 40px;
}
`;
const Body=styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
const Role=styled.div`
font-size: 18px;
font-weight: 600;
color: ${({theme})=>theme.text_primary+99};
@media only screen and (max-width:768px){
  font-size:14px;
}

`;
const Company=styled.div`
font-size: 14px;
font-weight: 500;
color: ${({theme})=>theme.text_secondary+99};
@media only screen and (max-width: 768px){
        font-size: 12px;
}
`;
const Duration=styled.div`
font-size: 12px;
font-weight: 400;
color: ${({theme})=>theme.text_secondary+80};
@media only screen and (max-width: 768px){
        font-size: 10px;
}
`;
const Span=styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color:${({ theme }) => theme.text_primary + 95};
  text-overflow: ellipsis;
`;
const Skills=styled.div`
  width: 100%;
  display: flex;
  color:${({ theme }) => theme.text_primary };
  gap: 12px;
  margin-top: -10px;
`;
const ItemWrapper=styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Skill=styled.div`
  font-size: 15px;
  font-weight: 400;
  color:${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const Description=styled.div`
width: 100%;
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};
margin-bottom: 10px;
@media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const ExperienceCard = ({experiences}) => {
  return (
    <Card>
      <Top>
        <Logo src={experiences.img} alt='logo'/>
        <Body>
            <Role>{experiences.role}</Role>
            <Company>{experiences.company}</Company>
            <Duration>{experiences.date}</Duration>
        </Body>
      </Top>
      <Description>
        {experiences?.desc && <Span>{experiences?.desc}</Span>}
        {experiences?.skills && <><br/><Skills>
          <b>Skills:</b>
          <ItemWrapper>
            {experiences?.skills.map((skill,index)=>(
              <Skill key={index}>• {skill}</Skill>
            ))}
          </ItemWrapper>
          </Skills></>}
      </Description>
    </Card>
  )
}

export default ExperienceCard
