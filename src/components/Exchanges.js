import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from './services/cryptoApi';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {

  const { data, isFetching } = useGetExchangesQuery();
  console.log(data);
  return (
    <div>Exchanges coming soon, stay tuned in</div>
  )
}

export default Exchanges