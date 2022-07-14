import { Col, Row, Space, Table, Tag, Typography } from 'antd';
import React from 'react';
import { FormOutlined, CloseOutlined ,PlusSquareTwoTone} from '@ant-design/icons'
const columns = [
    {
        title: '/',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
    },

    {
        title: 'Thành Tiền',
        dataIndex: 'money',
        key: 'money',
    },
    {
        title: 'Mô tả',
        key: 'desc',
        dataIndex: 'desc',

    },
    {
        title: 'Thao tác',
        key: 'icon',
        dataIndex: 'icon',

    },
    {
        title: 'Ẩn/hiện',
        key: 'icon1',
        dataIndex: 'icon1',

    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        stt: 1,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        icon1: <CloseOutlined />

    },
    {
        key: '2',
        name: 'Jim Green',
        stt: 2,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        icon1: <CloseOutlined />
    },
    {
        key: '3',
        name: 'Joe Black',
        stt: 3,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        icon1: <CloseOutlined />
    },
];
const { Title } = Typography;


const ProductList = () =>(
    <>
     <Row>
      <Col span={12}><Title>Điện thoại</Title></Col>
      <Col span={12}><PlusSquareTwoTone /></Col>
    </Row>
      

<Table columns={columns} dataSource={data} />
</>

);

export default ProductList;