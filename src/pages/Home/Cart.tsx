import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/image/Rectangle.png";
import { StarOutlined, CloseOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
type Props = {};

const Cart = (props: Props) => {
  return (
    <Container>
      <div>
        <Row>
          <Col span={8}>
            {" "}
            <Link to=""> Trở về</Link>
          </Col>
          <Col span={8}> Giỏ hàng</Col>
        </Row>

        <Div5>
          <Row>
            
            <Col span={12}>
              <Im src={LogoImage} alt="" />
            </Col>
            
            <Col span={12}>
              <div>
                <Row>
                  <Col span={18}>
                    <h4>Samsung Galaxy S22-Đen</h4>
                  </Col>
                  <Col span={6}>
                    <button>
                      <CloseOutlined />
                    </button>
                  </Col>
                </Row>
              </div>
              <Div1>
                <Row>
                  <Col span={6}>
                    <P1>16.090.000 ₫</P1>
                  </Col>
                  <Col span={6}>
                    <p>16.090.000 ₫</p>
                  </Col>
                  <Col span={6}>
                    <P2>Giảm 27%</P2>
                  </Col>
                </Row>
              </Div1>
              <Div3>
                <Row>
                  <Col span={8}>Chọn số lượng :</Col>
                  <Col span={10}>
                    <In type="number" />
                  </Col>
                </Row>
              </Div3>
              <Div2>
                <p>- Chương trình khuyến mại:</p>
                <Text>
                  Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing
                  MP3, Phúc Long, Galaxy Play)
                </Text>
              </Div2>
            </Col>
            <hr />
          </Row>
          
        </Div5>
        <hr />
        <Div5>
          <Row>
            
            <Col span={12}>
              <Im src={LogoImage} alt="" />
            </Col>
            
            <Col span={12}>
              <div>
                <Row>
                  <Col span={18}>
                    <h4>Samsung Galaxy S22-Đen</h4>
                  </Col>
                  <Col span={6}>
                    <button>
                      <CloseOutlined />
                    </button>
                  </Col>
                </Row>
              </div>
              <Div1>
                <Row>
                  <Col span={6}>
                    <P1>16.090.000 ₫</P1>
                  </Col>
                  <Col span={6}>
                    <p>16.090.000 ₫</p>
                  </Col>
                  <Col span={6}>
                    <P2>Giảm 27%</P2>
                  </Col>
                </Row>
              </Div1>
              <Div3>
                <Row>
                  <Col span={8}>Chọn số lượng :</Col>
                  <Col span={10}>
                    <In type="number" />
                  </Col>
                </Row>
              </Div3>
              <Div2>
                <p>- Chương trình khuyến mại:</p>
                <Text>
                  Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing
                  MP3, Phúc Long, Galaxy Play)
                </Text>
              </Div2>
            </Col>
            <hr />
          </Row>
          
        </Div5>
        <Div5>
          <Row>
            
            <Col span={12}>
              <Im src={LogoImage} alt="" />
            </Col>
            
            <Col span={12}>
              <div>
                <Row>
                  <Col span={18}>
                    <h4>Samsung Galaxy S22-Đen</h4>
                  </Col>
                  <Col span={6}>
                    <button>
                      <CloseOutlined />
                    </button>
                  </Col>
                </Row>
              </div>
              <Div1>
                <Row>
                  <Col span={6}>
                    <P1>16.090.000 ₫</P1>
                  </Col>
                  <Col span={6}>
                    <p>16.090.000 ₫</p>
                  </Col>
                  <Col span={6}>
                    <P2>Giảm 27%</P2>
                  </Col>
                </Row>
              </Div1>
              <Div3>
                <Row>
                  <Col span={8}>Chọn số lượng :</Col>
                  <Col span={10}>
                    <In type="number" />
                  </Col>
                </Row>
              </Div3>
              <Div2>
                <p>- Chương trình khuyến mại:</p>
                <Text>
                  Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing
                  MP3, Phúc Long, Galaxy Play)
                </Text>
              </Div2>
            </Col>
            <hr />
          </Row>
          
        </Div5>
      </div>
    </Container>
  );
};

const Div5= styled.div`
    padding-top: 20px;
`
const Im = styled.img`
    padding-left: 20px;
`
const In = styled.input`
    width: 50px;
`
const Div3 =styled.div`
     font-size: 10px;
`
const Div2 =styled.div`
    background-color: #F6F6F6;
    padding: 10px;
    border-radius:5px;
    margin: 10px;
    font-size: 10px;

`
const P2 = styled.p`
    color: white;
    background: red;
    border-radius:5px ;
    text-align: center;
`
const P1 = styled.p`
    color: red;
   
`
const Div1 =styled.div`
    font-size: 10px;
`
const Container = styled.div`
  max-width: 500px;
  margin: auto;
  border: 1px solid red;
  margin-top: 20px;
`;

export default Cart;
