import { Button, Card, Checkbox, DatePicker, Form, Icon, Input, InputNumber, message, Radio, Select, Switch, TimePicker, Upload } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea

class FormRegister extends Component{
  render() {
    const { getFieldDecorator } = this.props.form
    const labelCol = {
      
    }
    return(
      <Card
        title="注册表单"
      >
        <Form>
          <FormItem label='用户名'>
            {
              getFieldDecorator('userName',{
                rules:[{
                  required:true,
                  message:"用户名不能为空"
                }]
              })(<Input placeholder="请输入用户名" type="text" />)
            }
          </FormItem>
        </Form>
      </Card>
    )
  }
}
export default Form.create()(FormRegister)