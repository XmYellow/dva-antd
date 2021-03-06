import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Nav from '../components/Nav';
import MainLayout from  './../components/MainLayout/MainLayout'

function IndexPage({location}) {
  return (
    <MainLayout  location={location}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome}/>
      </div>
      </MainLayout>
  );
}
IndexPage.propTypes = {};

export default connect()(IndexPage);
