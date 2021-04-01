import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { CategoryArea, CategoryList, Container } from './HomeScreen.styled';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

export default () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);

  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    api.getCategories().then((res) => {
      if (res.error === '') {
        setCategories(res.result);
      }
    });
  }, []);
  useEffect(() => {}, [activeCategory]);
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
                title: 'Todas as categorias',
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
    </Container>
  );
};
