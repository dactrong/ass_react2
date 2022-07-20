import { Col, Row, Space, Switch, Table, Tag, Typography } from 'antd';
import React, { useState } from 'react';
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
        key: 'iccon',
        dataIndex: 'iccon',

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
        iccon:<Switch/>

    },
    {
        key: '2',
        name: 'Sam Sung',
        stt: 2,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        iccon:<Switch/>
    },
    {
        key: '3',
        name: 'Oppo',
        stt: 3,
        money: '10.000đ',
        desc: 'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, ',
        icon: <FormOutlined />,
        
        iccon:<Switch/>
    },
];

const { Title } = Typography;


const ProductList: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const onChange = (checked: boolean) => {
        setLoading(!checked);
    };
    return (
        <>
            <Switch checked={!loading} onChange={onChange} />
            <Row>
                <Col span={12}><Title>Điện thoại</Title></Col>
                <Col span={12}> <Title> <Link to="/admin/product/add" ><PlusSquareTwoTone/></Link></Title> </Col>
            </Row>


            <Table columns={columns} dataSource={data } loading={!loading} />
        </>

    );
}


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