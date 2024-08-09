import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import LogoMarca from "../../assets/LogoMarca.svg";

import "./style.css"

const { Header } = Layout

const items = ["Loja", "Cadastro", "Ajuda", "Sobre"].map((key) => ({
    key,
    label: <Link to={`/${key.toLowerCase()}`}>{key}</Link>
}))

export const HeaderExp = () => {
    return (
        <div className='layout-container'>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <div className='header'>
                    <div>
                        <Link to='/'
                            style={{ display: 'flex', alignSelf: 'center' }}>
                            <img className="header-img" src={LogoMarca} /></Link>
                    </div>
                    <Menu
                        theme='dark-blue'
                        mode='horizontal'
                        items={items}
                        style={{
                            flex: 1,
                            minWidth: 0,
                        }}
                    >
                    </Menu>
                </div>
            </Header>
        </div>
    )
}