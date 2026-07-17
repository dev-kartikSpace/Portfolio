import styled from 'styled-components';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.card_light};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

const Name = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 8px 0 0 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Name>{Bio.name}</Name>
        <Tagline>{Bio.roles.join(' | ')}</Tagline>
        <Copyright>
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
