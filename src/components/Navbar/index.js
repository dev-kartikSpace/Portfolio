import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink, MobileMenuButtonWrapper } from './NavbarStyledComponent'
import { Menu, X } from 'lucide-react'
import { Bio } from '../../data/constants'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
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
        <MobileIcon>
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
