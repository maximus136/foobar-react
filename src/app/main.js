import React, {Component} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import {Title} from './title';
import {Techs} from './techs/techs';

export class Main extends Component {
  render() {
    return (
      <div className="wrapper d-flex flex-column">
        <Header />
        <main>
          <Hero title="HI, This is Hackathon" subTitle="We know you have got talent and we want you to show it!" buttonValue="click here"/>
        </main>
        <Footer/>
      </div>
    );
  }
}
