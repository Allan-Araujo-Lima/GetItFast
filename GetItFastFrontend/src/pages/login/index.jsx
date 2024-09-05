import { Layout, Form, Input, Card } from 'antd';

import "./style.css";

const { Content } = Layout;

export const Login = () => {
    return (
        <Content>
            <div className='container'>
                <div className="content">
                    <Card className='logincard' title="Acesso">
                        <Form>
                            <Form.Item label="Login" name="login">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Senha" name="senha">
                                <Input.Password />
                            </Form.Item>
                        </Form>
                        <li>Novo por aqui? Registre-se</li>
                    </Card>
                </div>
            </div>
        </Content>
    );
}