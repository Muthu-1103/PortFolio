import React from "react";
import styled from "styled-components";

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
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
    @media only screen and (max-width: 768px){
        padding: 10px 36px;
        gap: 8px;
        width: 400px;
        
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid #854CE6;
`;
const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;
const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;
const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;
const ProjDesc = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const Tags = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  margin-bottom: 5px;
`;
const Category = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  margin-bottom: 5px;
`;
const GitHubLink = styled.a`
  display: inline-block;
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634,-20px -20px 60px #1F2634;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  max-width: 100%;

  &:hover {
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
const ProjectsCard=({project})=>{
    return(
        <Card>
        <Top>
            <Body>
            <Name>{project.title}</Name>
            <ProjDesc>{project.desc}</ProjDesc>
            <Date>{project.date}</Date>
            </Body>
        </Top>
        <Tags><strong>Tags:</strong> {project.tags.join(', ')}</Tags>
        <Category><strong>Category:</strong> {project.category}</Category>
        <GitHubLink href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</GitHubLink>
        </Card>
    )
}
export default ProjectsCard