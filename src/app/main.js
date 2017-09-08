import React, {Component} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Journies from './components/journies/Journies';
import Hero from './components/hero/Hero';
import Panel from './components/panel/panel';

export class Main extends Component {
  render() {
    return (
      <div className="wrapper d-flex flex-column">
        <Header />
        <main>
          <Hero title="HI, This is Hackathon" subTitle="We know you have got talent and we want you to show it!" buttonValue="click here"/>
          <Journies/>
          <Panel/>
        </main>
        <Footer/>
      </div>
    );
  }
}