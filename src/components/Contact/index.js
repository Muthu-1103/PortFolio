import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  object-fit:contain;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const LeftContent = styled.div`
  text-align:left;
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
      <Title>For Contact</Title>
        <StyledFooter>
          <ContactCard>
            <ContactInfo>
              <SocialLink href="https://www.instagram.com/muthu.kumar1103/" target="_blank" rel="noopener noreferrer">
                <Icon src={"https://images.vexels.com/media/users/3/137198/isolated/preview/07f0d7b69ef071571e4ada2f4d6a053a-instagram-icon-colorful.png"} alt="Instagram" />
               
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/muthukumarasamy-s-10b9b5237/" target="_blank" rel="noopener noreferrer">
                <Icon src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"} alt="LinkedIn" />
              
              </SocialLink>
              <SocialLink href="https://wa.me/9003451103" target="_blank" rel="noopener noreferrer">
                <Icon src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"} alt="WhatsApp" />
                
              </SocialLink>
            </ContactInfo>
            <LeftContent>
              <ContactInfo>
                <SocialLink href="tel:9003451103">
                  <Icon src={"https://freesvg.org/img/1527145993.png"} alt="Phone" />
               
                </SocialLink>
                <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=smuthukumarasamy97@gmail.com">
                  <Icon src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"} alt="Email" />
                
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
