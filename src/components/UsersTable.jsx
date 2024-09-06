import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'User',
    dataIndex: 'img',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
  },

];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const UsersTable = ({data}) => (
  <Table key={data.key}
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
);
export default UsersTable;