import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import {
  CategoryArea,
  CategoryList,
  Container,
  ProductArea,
  ProductList,
} from './HomeScreen.styled';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import ReactTooltip from 'react-tooltip';
import ProductItem from '../../components/ProductItem/ProductItem';

export default () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [activeCategory, setActiveCategory] = useState(0);

  const getProducts = async () => {
    const prods = await api.getProducts();
    if (prods.error === '') {
      setProducts(prods.result.data);
    }
  };

  useEffect(() => {
    api.getCategories().then((res) => {
      if (res.error === '') {
        setCategories(res.result);
      }
      ReactTooltip.rebuild();
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [activeCategory]);
  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          Selecione uma categoria
          <CategoryList>
            <CategoryItem
              data={{
                id: 0,
                name: 'Todas as categorias',
                image: '/assets/food-and-restaurant.png',
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((item, index) => (
              <CategoryItem
                key={index}
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </CategoryList>
        </CategoryArea>
      )}
      {products.length > 0 && (
        <ProductArea>
          <ProductList>
            {products.map((item, index) => (
              <ProductItem key={index} data={item} />
            ))}
          </ProductList>
        </ProductArea>
      )}
    </Container>
  );
};
