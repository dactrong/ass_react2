import React from "react";
import { Row, Col, Carousel, Divider, Typography, Button } from "antd";
import HomeMenu from "../../components/Home/Menu";
import styled from "styled-components";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import Banner5 from "../../assets/images/banner5.png";
import Banner6 from "../../assets/images/banner6.png";
import Meta from "antd/lib/card/Meta";
import Card from "antd/lib/card/Card";
import LogoImage from "../../assets/image/Rectangle.png";
import LogoImage1 from "../../assets/image/Rectangle2.png";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

const style: React.CSSProperties = {
  background: "#ffffff",
  padding: "25px 0",
};
const styles: React.CSSProperties = {
  background: "#FFA3A3",
  padding: "10px 0",
  color: "#ffffff",
};

const HomePage = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col span={6}>
              <HomeMenu />
            </Col>
            <Col span={18}>
              <Carousel afterChange={onChange} autoplay>
                <Slider src={Banner1} />
                <Slider src={Banner2} />
                <Slider src={Banner3} />
                <Slider src={Banner4} />
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Section>
          <Divider orientation="left">Điện thoại nổi bật</Divider>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={4} style={style}>
              <div>
                <Card hoverable cover={<Image alt="example" src={LogoImage} />}>
                  <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                  <Row>
                    <Col span={12}>
                      <Text type="danger">10.790.000 ₫</Text>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">18.000.000 ₫</Text>
                    </Col>
                  </Row>
                  <Borders>
                    <Text>
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </Text>{" "}
                  </Borders>
                  <br />
                  <Row>
                    <Col span={12}>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                      <Link to="">{<StarOutlined />}</Link>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">72 đánh giá</Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </Section>
        <Section>
          <Divider orientation="left">Horizontal</Divider>
          <Dt>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
            </Row>
          </Dt>
          <Divider orientation="left">Horizontal</Divider>
          <Dt>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={styles}>
                  <Text style={styles}>72 đánh giá</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
            </Row>
          </Dt>
        </Section>

     
      </div>
    </>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Slider = styled.img`
  /* height: 300px;
  color: '#fff',;
	text-align: center;
	background-color: #364d79; */
`;
const Image = styled.img`
  height: 160px;
  width: 160px;
  left: 92px;
  top: 585px;
  border-radius: 0px;
  margin: auto;
  margin-top: 20px;
`;
const Section = styled.div`
  /* background-color: #eddddd; */
  max-width: 1505px;
  margin: auto;
`;
const Borders = styled.div`
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
`;
const Dt = styled.div`
  width: 1150px;
  margin: auto;
`;
const Bo = styled.div`
  border-radius: 10px;
  text-align: center;
  line-height: 1.8;
`;


export default HomePage;
