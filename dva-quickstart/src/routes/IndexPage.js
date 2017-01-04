import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Nav from '../components/Nav';

function IndexPage() {
  return (
    <div>
      <Nav />
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome}/>
      </div>
    </div>
  );
}
IndexPage.propTypes = {};

export default connect()(IndexPage);
