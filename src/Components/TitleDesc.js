import React from 'react'
import styled from 'styled-components/native';

/**
 * Visual component for rendering the title and description of each page
 */
const Container = styled.View`
  height: auto;
  padding-top: 40px;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;
const Desc = styled.View`
  height: 87px;
`;

const TitleDesc = ({ title, desc, children }) => {
  return (
    <Container>
      <Title style={{ fontFamily: "SourceSansPro_700Bold" }}>{title}</Title>
      <Desc>{children}</Desc>
    </Container>
  );
}

export default TitleDesc
