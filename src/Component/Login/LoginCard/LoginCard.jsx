import React from "react"
import "./LoginCard.css"
import { Button, Form, Input, Divider } from "antd"
import {FaGithubSquare, FaGooglePlusSquare, FaTwitterSquare} from "react-icons/fa"

const LoginCard = () => {
  const FormSubmit = () => {
    alert("Form Submitted")
  }

  return (
    <div className="loginCardContainer">
      <div className="loginCardMain">
        <div className="loginDesign"></div>
        <div className="loginForm">
          <div className="loginFormElement">
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
              label=""
              name="username"
              style={{width: 600, height: 50}}
              rules={[
                {
                  required: true,
                  message: "Please type your username!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Username..."  className="loginFields"/>
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please type your password!",
                },
              ]}
              style={{width:600}}
              hasFeedback
            >
              <Input.Password placeholder="Enter Password..." className="loginFields"/>
            </Form.Item>

            <Form.Item
              style={{width:600}}
            >
              <Button type="primary" htmlType="submit" className="loginFields" >
                Login
              </Button>
            </Form.Item>
          </Form>
          </div>
          <Divider>Or</Divider>
          <div className="loginOptions">
              <FaGooglePlusSquare className="loginIcons"/>
              <FaGithubSquare className="loginIcons"/>
              <FaTwitterSquare className="loginIcons"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
