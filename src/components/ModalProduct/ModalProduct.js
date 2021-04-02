import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIngredients,
  ProductButton,
  ProductQuantity,
  ProductPrice,
  ProductQtImage,
  ProductQtText,
} from './ModalProduct.styled';

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();
  const [qtd, setQtd] = useState(1);
  const handleMinus = () => {
    if (qtd > 1) {
      setQtd(qtd - 1);
    }
  };
  const handlePlus = () => {
    setQtd(qtd + 1);
  };
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        data,
        qtd,
      },
    });
    setStatus(false);
  };

  useEffect(() => {
    setQtd(1);
  }, [data]);

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage onClick={handleMinus} src="/assets/minus.png" />
              <ProductQtText>{qtd}</ProductQtText>
              <ProductQtImage onClick={handlePlus} src="/assets/plus.png" />
            </ProductQuantity>
            <ProductPrice>R$ {(data.price * qtd).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true} onClick={() => setStatus(false)}>
          Cancelar
        </ProductButton>
        <ProductButton onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </ProductButton>
      </ProductButtons>
    </Container>
  );
};
