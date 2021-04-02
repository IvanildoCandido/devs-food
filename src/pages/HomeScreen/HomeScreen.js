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
import Modal from '../../components/Modal/Modal';
import ModalProduct from '../../components/ModalProduct/ModalProduct';

let searchTimer = null;
export default () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState('');

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

  const getProducts = async () => {
    const prods = await api.getProducts(
      activeCategory,
      activePage,
      activeSearch,
    );
    if (prods.error === '') {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
    }
  };

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 1000);
  }, [headerSearch]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, activePage, activeSearch]);
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
              <ProductItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
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
      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct data={modalData} setStatus={setModalStatus} />
      </Modal>
    </Container>
  );
};
