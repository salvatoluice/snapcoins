import React from 'react';
import { Collapse, Typography } from 'antd';

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