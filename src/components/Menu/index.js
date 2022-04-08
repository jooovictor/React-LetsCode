import { Menu as AntdMenu } from 'antd'
import { BtnRound } from './styles'

const Menu = () => (
    <AntdMenu mode="horizontal">
    <AntdMenu.Item key='home'>
      Home
    </AntdMenu.Item>
    <AntdMenu.Item key='team'>
      Equipe
    </AntdMenu.Item>
    <AntdMenu.Item key='aboutus'>
      Sobre nós
    </AntdMenu.Item>
    <AntdMenu.Item key='contact'>
      Contato
    </AntdMenu.Item>
    <AntdMenu.Item key='search'>
      <BtnRound/>
    </AntdMenu.Item>

  </AntdMenu>

)

export default Menu