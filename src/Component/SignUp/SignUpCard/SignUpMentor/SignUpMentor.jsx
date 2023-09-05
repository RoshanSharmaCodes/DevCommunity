import React from 'react'
import { Form, Button, DatePicker, Input, Select, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

const SignUpMentor = () => {

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };


  return (
    <div>
      <Form labelCol={{ span: 10}} >
        <Form.Item 
            name="fullName" 
            label="Full Name"
            rules={[
                {
                  required: true,
                  message: "Please type your name!",
                },
              ]}
              hasFeedback
            >
            <Input placeholder='Type your name'/>
        </Form.Item>

        <Form.Item 
            name="email" 
            label="Email"
            rules={[
                {
                  required: true,
                  message: "Please type your email!",
                },
              ]}
              hasFeedback>
            <Input placeholder='Type your email'/>
        </Form.Item>

        <Form.Item 
            name="password" 
            label="Password"
            rules={[
                {
                  required: true,
                  message: "Please type Password!",
                  min: 8,
                },
              ]}
              hasFeedback
            >
            <Input.Password placeholder='Type your password'/>
        </Form.Item>

        <Form.Item 
            name="confirmPassword" 
            label="Confirm Password"
            rules={[
                {
                  required: true,
                  message: "Confirm your username!",
                  min: 8,
                },
              ]}
              hasFeedback
              >
            <Input.Password placeholder='Confirm your password'/>
        </Form.Item>

        <Form.Item name="gender" label="Gender">
            <Select>
                <Select.Option value='male'>Male</Select.Option>
                <Select.Option value='female'>Female</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item 
            name="dob" 
            label="Date of Birth"
            rules={[
                {
                  required: true,
                  message: "Please Select your DOB!",
                },
              ]}
              hasFeedback
              >
            <DatePicker picker="date"  placeholder='Choose Date of Birth'/>
        </Form.Item>

        <Form.Item 
            name="url" 
            label="Socail link" 
            rules={[
                { required: true }, 
                { type: 'url', warningOnly: true }, 
                { type: 'string', min: 6 }]}>
            <Input placeholder="Portfolio/LinkedIn/Twitter" />
        </Form.Item>

        <Form.Item label="Profile Picture" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item className='submit'>
            <Button type="primary" htmlType='submit'>
                Sign Up
            </Button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default SignUpMentor
