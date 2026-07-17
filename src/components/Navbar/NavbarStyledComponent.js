import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    border-bottom: 1px solid ${({ theme }) => theme.card_border};
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
`;
export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding-bottom: 4px;
    :hover {
      color: ${({ theme }) => theme.text_primary};
    }

    &.active {
      color: ${({ theme }) => theme.text_primary};
      border-bottom: 2px solid ${({ theme }) => theme.text_primary};
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ThemeToggleButton = styled(motion.button)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.card_border};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenuButtonWrapper = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 72px;
    right: 0;
    width: 100%;
    padding: 12px 24px 24px 24px;
    background: ${({ theme }) => theme.bg};
    border-bottom: 1px solid ${({ theme }) => theme.card_border};
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.text_primary};
  }

  &.active {
    color: ${({ theme }) => theme.text_primary};
  }
`;
