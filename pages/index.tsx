import React from 'react';
import styled from 'styled-components';
import { getPosts } from './api/posts';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;


const App = () => <Title>My page with styled</Title>;

export async function getStaticProps() {
  const result = await getPosts();

  return {
    props: {
      posts: result.Plans,
    },
  };
}

export default App;
