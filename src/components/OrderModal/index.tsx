import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if(!visible || !order){
    return null;
  }

  const total = order.products.reduce((totalValue, { product, quantity }) => {
    return totalValue + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar"/>
          </button>
        </header>

        <div className="status-container">
          <span>Status do Pedido</span>
          <div>
            <span>
              {order.status === 'WAITING' && '⌚'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />

                <span className='quantity'>{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price, 'BRL')}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total, 'BRL')}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>👩‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type='button' className='secundary'>
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
