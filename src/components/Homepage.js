import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from './services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News'


const { Title } = Typography


const Homepage = () => {

  const{ data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  // console.log(data);

  if (isFetching) return 'Loading...'; 

  return (
    <>
      <Title evel={2} className="heading">
        Total Stats 
      </Title>   
      <Row>
        <Col span={12}>
          <Statistic title='Total Coins'value={globalStats.total} />
          <Statistic title='Total Exchanges'value={millify(globalStats.totalExchanges)} />
          <Statistic title='Total Market Cap'value={millify(globalStats.totalMarketCap)} />
          <Statistic title='Total 24hr Volume'value={millify(globalStats.total24hVolume)} />
          <Statistic title='Total Markets'value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top Coins In The Market Place</Title>
        <Title level={3} className='hshow-more'>
          <Link to='/cryptocurrencies'>see all</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Coin News</Title>
        <Title level={3} className='hshow-more'>
          <Link to='/news'>see all</Link>
        </Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage
