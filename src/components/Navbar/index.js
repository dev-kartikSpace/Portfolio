import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ThemeToggleButton, MobileMenuButtonWrapper } from './NavbarStyledComponent'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Bio } from '../../data/constants'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Span>{Bio.name}</Span>
        </NavLogo>
        <NavItems>
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>{item.label}</NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          <ThemeToggleButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </ThemeToggleButton>
        </ButtonContainer>
        <MobileIcon>
          <ThemeToggleButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </ThemeToggleButton>
          <MobileMenuButtonWrapper onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButtonWrapper>
        </MobileIcon>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            {navItems.map((item) => (
              <MobileLink key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </MobileLink>
            ))}
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
