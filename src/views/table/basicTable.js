import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import { apiGetTableList } from '@/api'

class BasicTable extends Component {

  componentWillMount() {
    const dataSource = [
      {

        id: '0',
        userName: 'Jack',
        sex: 1,
        state: 3,
        interest: 1,
        birthday: '2001-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: 0,
        state: 2,
        interest: 3,
        birthday: '2001-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Liny',
        sex: 1,
        state: 1,
        interest: 1,
        birthday: '2001-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      }
    ]
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者',
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest) {
          let config = {
            '1': '游泳',
            '2': '跑步',
            '3': '篮球',
            '4': '足球',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸',
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]
    
    dataSource.map((item) => {
      item.key = item.userName
    })
    this.getTablist()
    this.setState({
      columns,
      dataSource,
    })
  }
  async getTablist(){
    const res = await apiGetTableList()
    if(res.code == 0) {
      const dataSource2 = res.result.list
      dataSource2.map(item => {
        item.key = item.userName
      })
      this.setState({
        dataSource2
      })
    }
    
  }
  render() {
    const { columns, dataSource, dataSource2 } = this.state
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          >
          </Table>
        </Card>
        <Card 
          title="动态数据渲染表格-Mooc"
          style={{ margin: '10px 0' }}
          >
            <Table
              bordered
              dataSource= {dataSource2}
              columns={ columns }
              pagination={false}
            >

            </Table>
        </Card>
      </div>
    )
  }
}

export default BasicTable