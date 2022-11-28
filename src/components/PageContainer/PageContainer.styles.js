import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0 42px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;
