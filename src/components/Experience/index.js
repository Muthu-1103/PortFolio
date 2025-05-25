import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import ExperienceCard from '../Cards/ExperienceCard'
import { experiences } from '../../data/Constant'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
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
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
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
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>Here are some of my Experiences</Desc>
        <TimeLineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index < experiences.length  && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{py:"12px",px:2}}>
                  <ExperienceCard experiences={experience}/>
                </TimelineContent>
              </TimelineItem>
            ))} 
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}

export default Experience
