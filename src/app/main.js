import React, {Component} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Journies from './components/journies/Journies';
import {Title} from './title';
import {Techs} from './techs/techs';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container} className="wrapper">
        <Header/>
        <Journies/>
        <main style={styles.main}>
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
