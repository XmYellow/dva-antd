/**
 * Created by Administrator on 2017/1/4.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import {IndexLink,Link} from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = React.createClass({
  getInitialState() {
    return {
      current: 'home',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <IndexLink to='/' activeClassName='route--active'>
            <Icon type="home"/>首页
          </IndexLink>
        </Menu.Item>
        <Menu.Item key="product">
          <IndexLink to='/products' activeClassName='route--active'>
            <Icon type="check"/>产品
          </IndexLink>
        </Menu.Item>

      </Menu>
    );
  },
});
export default Nav;
