import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import LogoMarca from "../../assets/LogoMarca.svg";

import "./style.css"

const { Header } = Layout

const items = ["Loja", "Cadastro", "Ajuda", "Sobre"].map((key) => ({
    key,
    label: <Link className='link' to={`/${key.toLowerCase()}`}>{key}</Link>
}))

export const HeaderExp = () => {
    return (
        <Layout className='app-header'>
            <Header>
                <Link to='/'>
                    <img className="header-img" src={LogoMarca} /></Link>
                <Menu
                    theme='dark-blue'
                    mode='horizontal'
                    items={items}
                >
                </Menu>
            </Header>
        </Layout>
    )
}