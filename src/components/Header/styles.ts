import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      color: #FFF;
      font-size: clamp(18px, 3.2rem, 2vw);
    }

    h2 {
      color: #FFF;
      font-size: clamp(12px, 1.6rem, 2vw);
      font-weight: 400;
      opacity: 0.9;
      margin-top: 0.6rem;
    }
  }
`;
