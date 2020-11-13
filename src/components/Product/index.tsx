
import React from 'react';
import tshirImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'


import { 
  Container, 
  Row, 
  Painel, 
  Column, 
  Gallery, 
  Section, 
  Description  
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Painel>
        <Column>
            <Gallery>
              <img alt="T-shir" src={tshirImage}/>
            </Gallery>
            <Info/>
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>


          <WarrantySection />
          <WarrantySection />
          <WarrantySection />

        </Column>
        
      </Painel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do Vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre Garantia</a>
  </Section>
)


const Info = () =>(
  <Description>
    <h2>Descrição</h2>
    <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
   
    <br/>
    <br/>
    Itens Inclusos: <br/>

    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>

    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
  </Description>
)

export default Product;
