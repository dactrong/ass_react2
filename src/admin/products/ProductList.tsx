import { Col, Row, Space, Table, Tag, Typography } from 'antd';
import React from 'react';
import { FormOutlined, CloseOutlined, PlusSquareTwoTone } from '@ant-design/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

    }
];
const data = [
    {
        key: '1',
        name: 'Iphon',
        stt: 1,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        icon1: <CloseOutlined />

    },
    {
        key: '2',
        name: 'Sam Sung',
        stt: 2,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        icon1: <CloseOutlined />
    },
    {
        key: '3',
        name: 'Oppo',
        stt: 3,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        icon1: <CloseOutlined />
    },
];
const { Title } = Typography;


const ProductList = () => (
    <>
        <Row>
            <Col span={12}><Title>Điện thoại</Title></Col>
            <Col span={12}> <Col1> <Link to ="/admin/product/add" ><PlusSquareTwoTone  /></Link></Col1>   </Col>
        </Row>


        <Table columns={columns} dataSource={data} />
    </>

);

// const Title1 = styled.title`
// position: absolute;
// width: 111px;
// height: 28px;
// left: 326px;
// top: 89px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 20px;
// line-height: 30px;


// `


export default ProductList;