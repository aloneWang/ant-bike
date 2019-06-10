import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import { apiGetTableList } from '@/api'


class BasicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [],
      selectedRowKeys2:[],
      seleckItems:[],
      pagination:{}
    }
  }

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
      // 在做单选被选中的时候一定要与selectedRowKeys匹配一样的东西，要么索引要么值
      // 这玩意坑了一下午
      item.key = item.userName
    })
    this.getTablist()
    this.setState({
      columns,
      dataSource,
    })
  }
  async getTablist(page = 1) {
    const res = await apiGetTableList({page})
    let pagination = {
      total: 200,
      pageSize: 6,
      onChange:(page)=>{
        this.getTablist(page)
      }
    }
    if (res && res.code == 0) {
      const dataSource2 = res.result.list
      dataSource2.map(item => {
        item.key = item.userName
      })
      this.setState({
        dataSource2,
        pagination
      })
    }

  }
  onRowClick = record => { //record 当前数据 index 索引
    this.setState(() => ({
      selectedRowKeys: record.userName, // 当前选中的索引
    }))

    Modal.info({
      title: '当前用户信息',
      content: `用户名：${record.userName} 性别:${record.sex === 1 ? "男" : "女"} 生日:${record.birthday}`
    })
  }

  handleDelete = ()=>{
    const {seleckItems, dataSource2} = this.state
    let isDelete = seleckItems.length > 0 ? true : false
    
    Modal.info({ 
      title:'提示',
      content: isDelete ? '确定要删除吗' : '请选择要删除的选项',
      onOk:() => {
        // console.log(this.getTablist)
        return isDelete ? this.getTablist() : false
      }
    })
    
  }
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }
  render() {
    const { columns, dataSource, dataSource2, selectedRowKeys, selectedRowKeys2, pagination } = this.state
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection ={
      type:'checkbox',
      selectedRowKeys:selectedRowKeys2,
      onChange:(keys,items)=>{
        // console.log(items)
        this.setState({
          selectedRowKeys2:keys,
          seleckItems:items // 选中的项
        })
      }
    }
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
          className="mg10_0"
        >
          <Table
            bordered
            dataSource={dataSource2}
            columns={columns}
            pagination={false}
          >

          </Table>
        </Card>
        <Card
          title="Mooc-单选"
          className="mg10_0"
        >
          <Table
            bordered
            columns={columns}
            rowSelection={rowSelection}
            dataSource={dataSource2}
            pagination={false}
            onRow={(recode, index) => ({
              onClick: () => {
                this.onRowClick(recode, index)
              }
            })
            }
          >
          </Table>
        </Card>
        <Card
          title="Mooc-多选"
          className="mg10_0"
        >
          <div>
            <Button onClick={this.handleDelete}
              className="mg10_0"
            >删除</Button>
          </div>
          <Table
            bordered
            columns={columns}
            rowSelection={rowCheckSelection}
            dataSource={dataSource2}
            pagination={{
              ...pagination
            }}
          >

          </Table>
        </Card>
      </div>
    )
  }
}

export default BasicTable