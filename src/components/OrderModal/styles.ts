import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 48rem;
  background: #FFF;
  padding: 3.2rem;
  border-radius: .8rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 2.4rem;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 3.2rem;

    span {
      font-size: 1.4rem;
      font-weight: 500;
      opacity: 0.8;
    }

    > div {
      margin-top: .8rem;
      display: flex;
      align-items: center;
      gap: .8rem;

      > * {
        font-size: 1.6rem;
      }
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 3.2rem;

  > strong {
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1.6rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1.6rem;
      }

      img {
        width: 4.8rem;
        height: 4.2rem;
        object-fit: cover;
        border-radius: .6rem;
      }

      .quantity {
        font-size: 1.4rem;
        color: #666;
        display: block;
        min-width: 2rem;
        margin-left: 1.2rem;
      }

      .product-details {
        margin-left: .4rem;

        strong {
          display: block;
          font-size: 1.6rem;
          margin-bottom: .2rem;
        }

        span {
          font-size: 1.4rem;
          color: #666;
        }
      }
    }
  }

  .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2.4rem;

      span {
        font-size: 1.4rem;
        font-weight: 500;
        opacity: 0.8;
      }

      strong {
        font-size: 1.6rem;
      }
    }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  .primary {
    color: #fff;
    background: #333;
    border-radius: 4.8rem;
    padding: 1.2rem 2.4rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    margin-bottom: 1.2rem;

    span {
      font-size: 1.4rem;
    }

    strong {
      font-size: 1.4rem;
    }
  }

  .secundary {
    color: #d73035;
    background: transparent;
    font-weight: bold;
    border-radius: 4.8rem;
    padding: 1.2rem 2.4rem;
    border: 0;

    strong {
      font-size: 1.4rem;
    }
  }
`;
