import React from 'react';
import MovieCardStyles, { Title, StyledTag, TextWrapper, MetaWrapper } from './styles';
import Highlighter from 'react-highlight-words';

const MovieCard = ({ movie, params }) => {
  console.log({ params });
  return (
    <MovieCardStyles poster={movie?.Poster}>
      <TextWrapper>
        <Title>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[params?.search]}
            autoEscape={true}
            textToHighlight={movie?.Title}
          />
        </Title>
        <MetaWrapper>
          <StyledTag color="#EF4444">{movie?.Type}</StyledTag>
          <StyledTag color="#8B5CF6">{movie?.Year}</StyledTag>
        </MetaWrapper>
      </TextWrapper>
    </MovieCardStyles>
  );
};

export default MovieCard;
