import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  max-width: 38.4rem;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1.6rem;
  padding: 1.6rem;

  > header {
    display: flex;
    align-items: center;
    padding: .8rem;
    gap: .8rem;

    * {
      font-size: 1.6rem;
    }
  }

  :not(:has(div:last-child)) {
    height: 7.2rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 12.8rem;
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    margin-top: 2.4rem;

    /*
      Se o elemento anterior ao botão for outro botão => adiciona a estilização

    & + button {
      margin-top: 2.4rem;
    } */

    strong {
      font-weight: 500;
      font-size: 1.6rem;
    }

    span {
      font-size: 1.4rem;
      color: #666;
    }
  }
`;
