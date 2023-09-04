import React from "react"
import "./LoginCard.css"
import { Button, Form, Input, Divider } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-solid-svg-icons"
import {FaGithubSquare, FaGooglePlusSquare, FaLinkedinIn} from "react-icons/fa"

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
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={FormSubmit}
            onFinishFailed={FormSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please type your username!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please type your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </div>
          <Divider>Or</Divider>
          <div className="loginOptions">
              <FaGooglePlusSquare className="loginIcons"/>
              <FaGithubSquare className="loginIcons"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
