import styled from 'styled-components';
import { Wrapper } from 'Components';

const LargeText = styled.div`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  margin-bottom: 20px;
`;
const BodyText = styled.div`
  font-size: 1.3rem;
`;

const NotFound = () => (
  <Wrapper>
    <LargeText>404</LargeText>
    <BodyText>We can't find what you're looking for.</BodyText>
  </Wrapper>
);

export default NotFound;
