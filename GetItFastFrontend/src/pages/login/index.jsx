import { Layout, Card, Space } from 'antd';
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

import { ProfileForm } from "./login"
import { toast } from 'react-toastify';
import "./style.css";

const { Content } = Layout;


export const Login = () => {
    const {
        onSignIn,
    } = useAuth()

    const navigate = useNavigate()

    const submit = async (values) => {
        try {
            await onSignIn({
                email: values.email,
                password: values.password
            })
            navigate("/painel")
        } catch (error) {
            toast.error("Erro inesperado.")
        }
    }

    return (
        <ProfileForm />
    );
}
// <Content>
//     <div className='container'>
//         <div className="content">
//             <Card className='logincard' title="Acesso">
//                 <Form onSubmit={submit} onFinish={submit} form={form} layout='vertical'>
//                     <Form.Item label="E-mail" name="email">
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Senha" name="password">
//                         <Input.Password />
//                     </Form.Item>
//                     <Space>
//                         <Button type='primary' htmlType='submit' className='btn'>
//                             Login
//                         </Button>
//                     </Space>
//                 </Form>
//                 <li>Novo por aqui? Registre-se</li>
//             </Card>
//         </div>
//     </div>
// </Content>