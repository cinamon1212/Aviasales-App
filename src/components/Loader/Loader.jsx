import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 30,
      margin: 0,
    }}
    spin
  />
);

export const Loader = () => <Spin indicator={antIcon} />;
