import { Layout, Input, Form, Card, Space, Button } from "antd";

const { Content } = Layout;

import "./style.css"
import api from "../../api/axios";
import { toast } from "react-toastify";


export const UserRegister = () => {

    const [form] = Form.useForm();

    const submit = async (values) => {
        await api.post('/users/signup', {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password
        })
    }

    return (
        <Content>
            <div className="content">
                <Card title="Registro" className="registercard">
                    <Form onSubmit={submit} onFinish={submit} form={form} layout="vertical">
                        <Form.Item label="Primeiro nome" name="first_name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Último nome" name="last_name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Senha" name="password">
                            <Input.Password visibilityToggle />
                        </Form.Item>
                        <Form.Item label="Confirmação da senha" name="password_confirmation">
                            <Input.Password visibilityToggle={false} />
                        </Form.Item>
                        <Space>
                            <Button type='primary' htmlType='submit' className="btn">
                                Calcular
                            </Button>
                            <Button htmlType='button'>
                                Limpar
                            </Button>
                        </Space>
                    </Form>
                </Card>
            </div>
        </Content>
    )
}