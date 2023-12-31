import React from "react"
import "./SignUpCard.css"
import { Button, Form, Input, Divider, Select } from "antd"
import {FaGithubSquare, FaGooglePlusSquare, FaTwitterSquare} from "react-icons/fa"

const SignUpCard = () => {

    const FormSubmit = () => {
      alert("Form Submitted")
    }

  return (
    <div className="signupCardContainer">
      <div className="signupCardMain">
        <div className="signupDesign">
        </div>
        <div className="signupArea">
          <div className="signupForm">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              width: 400,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={FormSubmit}
            onFinishFailed={FormSubmit}
            autoComplete="off"
          >

            <Form.Item 
              name="position" 
              label="" 
              rules={[
                {
                  required: true,
                  message: "Select your Position!",
                },
              ]}
              style={{width:600}}
              hasFeedback
              >
              <Select className="signupFields" defaultValue={"Student"} placeholder="Join as">
                <Select.Option value='Mentor'>Mentor</Select.Option>
                <Select.Option value='Student'>Student</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label=""
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please type your username!",
                },
              ]}
              style={{width:600}}
              hasFeedback
            >
              <Input className="signupFields" placeholder="Enter Username..."  />
            </Form.Item>


            <Form.Item 
            name="password" 
            label=""
            rules={[
                {
                  required: true,
                  message: "Please type Password!",
                  min: 8,
                },
              ]}
              style={{width:600}}
              hasFeedback
            >
            <Input.Password className="signupFields" placeholder='Type your password'/>
        </Form.Item>

        <Form.Item 
            name="confirmPassword" 
            label=""
            rules={[
                {
                  required: true,
                  message: "Confirm your username!",
                  min: 8,
                },
              ]}
              style={{width:600}}
              hasFeedback
              >
            <Input.Password className="signupFields" placeholder='Confirm your password'/>
        </Form.Item>

            <Form.Item
              style={{width:600}}
            >
              <Button className="signupFields" block type="primary" htmlType="submit" >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <Divider>Or</Divider>
          <div className="signupOptions">
              <FaGooglePlusSquare className="signupIcons"/>
              <FaGithubSquare className="signupIcons"/>
              <FaTwitterSquare className="signupIcons"/>
          </div>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default SignUpCard
