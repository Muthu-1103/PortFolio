import React from 'react';
import styled from 'styled-components';
import phoneIcon from '../../assets/phone.png';
import whatsappIcon from '../../assets/whatsapp.jpg';
import Insta from '../../assets/insta.jpg';
import linked from '../../assets/linkedin.png';
import emailid from '../../assets/mail.jpeg';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContactCard = styled.div`
  display: grid;
  color: white;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const LeftContent = styled.div`
  text-align: left;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
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
const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
      <Title>Contact</Title>
      <Desc>My Contact Details</Desc>
        <StyledFooter>
          <ContactCard>
            <ContactInfo>
              <SocialLink href="https://www.instagram.com/muthu.kumar1103/" target="_blank" rel="noopener noreferrer">
                <Icon src={Insta} alt="Instagram" />
                Instagram
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/muthukumarasamy-s-10b9b5237/" target="_blank" rel="noopener noreferrer">
                <Icon src={linked} alt="LinkedIn" />
                LinkedIn
              </SocialLink>
              <SocialLink href="https://wa.me/9003451103" target="_blank" rel="noopener noreferrer">
                <Icon src={whatsappIcon} alt="WhatsApp" />
                WhatsApp
              </SocialLink>
            </ContactInfo>
            <LeftContent>
              <ContactInfo>
                <SocialLink href="tel:9003451103">
                  <Icon src={phoneIcon} alt="Phone" />
                  Phone: 9003451103
                </SocialLink>
                <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=smuthukumarasamy97@gmail.com">
                  <Icon src={emailid} alt="Email" />
                  Email: smuthukumarasamy97@gmail.com
                </SocialLink>
              </ContactInfo>
            </LeftContent>
          </ContactCard>
        </StyledFooter>
      </Wrapper>
    </Container>
  );
};

export default Contact;
