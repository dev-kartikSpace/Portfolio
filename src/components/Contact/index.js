import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Bio } from '../../data/constants';
import Reveal from '../common/Reveal';
import Toast from '../common/Toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 0 24px 0;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 16px;
  padding: 20px;
  background: ${({ theme }) => theme.card};
`

const IconBadge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card_light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  flex-shrink: 0;
`

const InfoLabel = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 2px 0;
`

const InfoValue = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`

const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  padding: 24px;
`

const FormTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 4px 0;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Input = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.card_border};
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 14px;
  &:focus {
    border-color: ${({ theme }) => theme.text_primary};
  }
`

const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.card_border};
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 14px;
  font-family: inherit;
  resize: vertical;
  &:focus {
    border-color: ${({ theme }) => theme.text_primary};
  }
`

const SendButton = styled(motion.button)`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.button_text};
  padding: 13px 16px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zsis6z8', 'template_7bzvn55', form.current, 'ZXUfynF0Hdb-i7ukUGFHN')
      .then(() => {
        setOpen(true);
        form.current.reset();
        setTimeout(() => setOpen(false), 6000);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Reveal>
          <Title>Let's Work Together</Title>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        </Reveal>
        <Grid>
          <Reveal direction="left">
            <InfoColumn>
              <InfoCard whileHover={{ y: -2 }}>
                <IconBadge><Mail size={18} /></IconBadge>
                <div>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>{Bio.email}</InfoValue>
                </div>
              </InfoCard>
              <InfoCard whileHover={{ y: -2 }}>
                <IconBadge><Phone size={18} /></IconBadge>
                <div>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue>{Bio.phone}</InfoValue>
                </div>
              </InfoCard>
              <InfoCard whileHover={{ y: -2 }}>
                <IconBadge><MapPin size={18} /></IconBadge>
                <div>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>{Bio.location}</InfoValue>
                </div>
              </InfoCard>
            </InfoColumn>
          </Reveal>

          <Reveal direction="right">
            <FormCard ref={form} onSubmit={handleSubmit}>
              <FormTitle>Send a Message</FormTitle>
              <Row>
                <Input placeholder="Your Name" name="from_name" required />
                <Input placeholder="Your Email" name="from_email" type="email" required />
              </Row>
              <Input placeholder="Subject" name="subject" />
              <TextArea placeholder="Your Message" rows="5" name="message" required />
              <SendButton type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Send size={16} />
                Send Message
              </SendButton>
            </FormCard>
          </Reveal>
        </Grid>
        <Toast open={open} message="Email sent successfully!" />
      </Wrapper>
    </Container>
  )
}

export default Contact
