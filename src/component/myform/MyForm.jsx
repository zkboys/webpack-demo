import React from 'react';
import Page from '../page/Page';
import {Form, Input, Select, Checkbox, Radio, Breadcrumb} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
function handleSelectChange(value) {
    console.log('selected ' + value);
}
const MyForm = React.createClass({
    render() {
        return (
            <Page>
                <div className="admin-page-header">
                    <h1 className="admin-page-header-title">MyFrom</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
                        <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
                        <Breadcrumb.Item>某应用</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="admin-page-content">
                    <Form horizontal>
                        <FormItem
                            id="control-input"
                            label="输入框："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}>
                            <Input id="control-input" placeholder="Please enter..."/>
                        </FormItem>

                        <FormItem
                            id="control-textarea"
                            label="文本域："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}>
                            <Input type="textarea" id="control-textarea"/>
                        </FormItem>

                        <FormItem
                            id="select"
                            label="Select 选择器："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 14}}>
                            <Select id="select" size="large" defaultValue="lucy" style={{width:200}} onChange={handleSelectChange}>
                                <Option value="jack">jack</Option>
                                <Option value="lucy">lucy</Option>
                                <Option value="disabled" disabled>disabled</Option>
                                < Option value="yiminghe">yiminghe</Option>
                            </Select>
                        </FormItem>

                        <FormItem
                            label="Checkbox 多选框："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 18}}>
                            <label className="ant-checkbox-vertical">
                                <Checkbox />选项一
                            </label>
                            <label className="ant-checkbox-vertical">
                                <Checkbox />选项二
                            </label>
                            <label className="ant-checkbox-vertical">
                                <Checkbox disabled/>选项三（不可选）
                            </label>
                        </FormItem>

                        <FormItem
                            label="Checkbox 多选框："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 18}}>
                            <label className="ant-checkbox-inline">
                                <Checkbox />选项一
                            </label>
                            <label className="ant-checkbox-inline">
                                <Checkbox />选项二
                            </label>
                            <label className="ant-checkbox-inline">
                                <Checkbox />选项三
                            </label>
                        </FormItem>

                        <FormItem
                            label="Radio 单选框："
                            labelCol={{span: 6}}
                            wrapperCol={{span: 18}}>
                            <RadioGroup value="b">
                                <Radio value="a">A</Radio>
                                <Radio value="b">B</Radio>
                                <Radio value="c">C</Radio>
                                <Radio value="d">D</Radio>
                            </RadioGroup>
                        </FormItem>
                    </Form>
                </div>
            </Page>
        );
    }
});

export default MyForm;