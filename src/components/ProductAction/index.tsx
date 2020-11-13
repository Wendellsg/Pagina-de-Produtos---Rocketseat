import React from 'react';

import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  Installmentsinfo,
  StockStatus,
  MethodCards,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,

 } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon/>
      </Row>
      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <Installmentsinfo>Em 3x de R$ 11,67</Installmentsinfo>
      </PriceCard>

      <StockStatus>Estoque e disponivel</StockStatus>

      <MethodCards>
        <CheckIcon/>

        <div>
          <span className="title">Frete Grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>
          <a className="more" href="#">Ver mais opções</a>
        </div>
      </MethodCards>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button className="btn1">Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon/>
          <p>Compra Garantida, Receba o Produto que está esperando ou devolvemos o dinheiro.</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
