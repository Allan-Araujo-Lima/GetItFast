import { Layout, Input, Form, Card, Space, Button } from "antd";

import { Axios } from "axios";

const { Content } = Layout;

import "./style.css"

export const UserRegister = () => {

    const [form] = Form.useForm();

    const submit = (values) => {
        console.log(values)
    }



    return (
        <Content>
            <div className="content">
                <Card title="Registro" className="registercard">
                    <Form onSubmit={submit} onFinish={submit} form={form}>
                        <Form.Item label="Primeiro nome" name="primeiro_nome">
                            <Input.toString />
                        </Form.Item>
                        <Form.Item label="Último nome" name="ultimo_nome">
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Senha" name="senha">
                            <Input.Password visibilityToggle />
                        </Form.Item>
                        <Form.Item label="Confirmação da senha" name="senha_confirmacao">
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