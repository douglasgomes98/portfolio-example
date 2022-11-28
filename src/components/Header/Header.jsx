import { Container, Logo, Menu, MenuItem } from './Header.styles';

export function Header() {
  return (
    <Container>
      <Logo>Portfólio</Logo>

      <Menu>
        <MenuItem href="#">Sobre mim</MenuItem>
        <MenuItem href="#">Projetos</MenuItem>
        <MenuItem href="#">Serviços</MenuItem>
        <MenuItem href="#">Minhas skills</MenuItem>
      </Menu>
    </Container>
  );
}
