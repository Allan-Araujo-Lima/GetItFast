import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

const { Header } = Layout

export const HeaderExp = () => {
    return (
        <Header className='header'>
            <div className='header-items'>
                <Menu className='menu'
                    theme='dark-blue'
                    mode='horizontal'>

                </Menu>
            </div>
        </Header>
    )
}