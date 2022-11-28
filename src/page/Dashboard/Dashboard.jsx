import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer';

import { Container } from './Dashboard.styles';

export function Dashboard() {
  return (
    <Container>
      <PageContainer>
        <Header />
      </PageContainer>

      <Footer />
    </Container>
  );
}
