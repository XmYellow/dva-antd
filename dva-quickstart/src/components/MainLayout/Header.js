/**
 * Created by Administrator on 2017/1/5.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import {IndexLink, Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <Menu.Item key="home">
        <IndexLink to='/' activeClassName='route--active'>
          <Icon type="home"/>首页
        </IndexLink>
      </Menu.Item>
      <Menu.Item key="products">
        <IndexLink to='/products' activeClassName='route--active'>
          <Icon type="check"/>产品
        </IndexLink>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
