import { Spinner } from '@/common';
import { Col, Pagination, Row } from 'antd';
import MovieCard from 'components/MovieCard';
import SearchFilter from 'components/SearchFilter';
import React, { useState } from 'react';
import MoviesDetailStyles, { Header, Title } from './styles';
import useSWR from 'swr';
import api from 'utils/api';

const fetcher = (url) => api.get(url).then((res) => res.data);

const MoviesDetail = () => {
  const [params, setParams] = useState({
    search: 'Game',
    year: 2020,
    page: 1,
    type: 'movie',
  });
  const { data } = useSWR(`/?s=${params.search}&y=${params.year}&page=${params.page}&type=${params.type}`, fetcher);

  return (
    <>
      <Header>
        <Title>Best Movies & Tv Shows!</Title>
      </Header>
      <MoviesDetailStyles>
        <SearchFilter params={params} setParams={setParams} />
        <MovieResults data={data} params={params} />
        <Pagination
          current={params?.page}
          total={data?.totalResults}
          onChange={(page) => setParams({ ...params, page })}
          hideOnSinglePage
          showSizeChanger={false}
          style={{ textAlign: 'center', margin: '45px 15px' }}
        />
      </MoviesDetailStyles>
    </>
  );
};

export default MoviesDetail;

const MovieResults = ({ data, params }) => {
  if (!data) {
    return <Spinner wrapperSize={830} />;
  }

  if (!data.Search) {
    return <div>{data.Error}</div>;
  }

  return (
    <Row gutter={[30, 30]} justify="center">
      {data.Search.map((item) => (
        <Col key={`${item.Title}-${item.Year}`}>
          <MovieCard movie={item} params={params} />
        </Col>
      ))}
    </Row>
  );
};
