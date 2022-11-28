import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: 26px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 42px;
`;

export const MenuItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;
