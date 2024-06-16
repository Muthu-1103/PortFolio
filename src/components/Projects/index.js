import React from 'react';
import styled from 'styled-components';
import ProjectsCard from '../Cards/ProjectsCard'
import {projects} from '../../data/Constant'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
  }
`;
const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
        align-items: end;
    }
`;
const Projects=()=>{
  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are Some Of my Projects which I had done during my Engineering Courses</Desc>
        <TimeLineSection>
            {projects.map((project, index) => (
                  <ProjectsCard key={project.id} project={project}/>
            ))}
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}
export default Projects