import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundHighlight};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: ${({ theme }) => theme.fonts.family.regular};
    color: ${({ theme }) => theme.colors.secondary};

    strong {
      font-family: ${({ theme }) => theme.fonts.family.bold};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
