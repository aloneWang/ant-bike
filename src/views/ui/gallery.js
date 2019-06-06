import React, { Component } from 'react'
import { Card, Row, Col, Modal, Tabs } from 'antd'

const TabPane = Tabs.TabPane
class Gallery extends Component {
  state = {
    showModal:false,
    imgs: [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
  }
  

  componentWillMount() {
    const imgs = this.state.imgs
    this.imgList = this.renderImg(imgs, '/gallery/')
    this.imgList2 = this.renderImg(imgs, '/gallery2/')
  }
  showImg(item){
    this.setState({
      currentImg: item,
      showModal:true
    })
  }
  renderImg(imgs, path) {
    return imgs.map(item => {
      if(Array.isArray(item)) {
        return this.renderImg(item, path)
      }
      return (
        <Card
          hoverable
          key={item}
          style={{ marginBottom: 10 }}
          onClick={ ()=> this.showImg(path+item) }
          cover={<img src={path + item} alt="图片" />}
        >
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      )
    })
  }
  render() {
    const imgList = this.imgList
    const imgList2 = this.imgList2
    return (
      <div className='card-wrap'>
        <Tabs>
          <TabPane tab="tab 画廊" key="1">
            <Row gutter={10}>
              <Col md={5}>
                {imgList[0]}
              </Col>
              <Col md={5}>
                {imgList[1]}
              </Col>
              <Col md={5}>
                {imgList[2]}
              </Col>
              <Col md={5}>
                {imgList[3]}
              </Col>
              <Col md={4}>
                {imgList[4]}
              </Col>
            </Row>
          </TabPane>
          <TabPane tab=" 邓紫棋" key="2">
            <Row gutter={15}>
              <Col md={4}>
                {imgList2[0]}
              </Col>
              <Col md={5}>
                {imgList2[1]}
              </Col>
              <Col md={6}>
                {imgList2[2]}
              </Col>
              <Col md={5}>
                {imgList2[3]}
              </Col>
              <Col md={4}>
                {imgList2[4]}
              </Col>
            </Row>
          </TabPane>
        </Tabs>
        <Modal 
          title="react" 
          width={300}
          height={200}
          visible={ this.state.showModal }
          onCancel = { () => this.setState({
            showModal:false
          })}
          footer={null}
          >
          <img src={this.state.currentImg} style={{ width:"100%"}}/>
        </Modal>
      </div>
    )
  }

}
export default Gallery