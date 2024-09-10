import { Layout, Input, Form, Card, Space, Button } from "antd";

const { Content } = Layout;

import "./style.css"
import api from "../../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const UserRegister = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const submit = async (values) => {
        if (values.password !== values.password_confirmation) {
            return toast.warning("As senhas não conferem.")
        }
        try {
            await api.post('/users/signup', {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password
            })
            toast.success("Usuário criado com sucesso.")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Erro inesperado, tente novamente.")
        }
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