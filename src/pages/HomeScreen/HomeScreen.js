import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import {
  CategoryArea,
  CategoryList,
  Container,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from './HomeScreen.styled';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import ReactTooltip from 'react-tooltip';
import ProductItem from '../../components/ProductItem/ProductItem';

export default () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const getProducts = async () => {
    const prods = await api.getProducts();
    if (prods.error === '') {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
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
    setProducts([]);
    getProducts();
  }, [activeCategory, activePage]);
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
      {totalPages > 0 && (
        <ProductPaginationArea>
          {Array(totalPages)
            .fill(0)
            .map((item, index) => (
              <ProductPaginationItem
                key={index}
                active={activePage}
                current={index + 1}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </ProductPaginationItem>
            ))}
        </ProductPaginationArea>
      )}
    </Container>
  );
};
