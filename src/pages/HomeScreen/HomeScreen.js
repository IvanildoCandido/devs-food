import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Container } from './HomeScreen.styled';

export default () => {
  const [headerSearch, setHeaderSearch] = useState('');
  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
    </Container>
  );
};
