import React from 'react';
import './panel.scss';

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <h1>This is a panel component</h1>
        <div className="panel-judges">
            <div className="panel-title text-center">
            Panel of Judges
            </div>
            <div className="description text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, autem.
            </div>
            <div className="judge-list">
            </div>
            <div className="judges col-xs-3">
                <img className="judge-profile img-responsive" src="/app/assets/person1.jpg"/>
            <div className="judge-detail">
                </div>
            </div>
        </div>
        <div className="panel-more-info">
        <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quam consectetur quibusdam magni minus aut modi aliquid.
        </div>
        <div className="more-info"></div>

        </div> 
      </div>
    );
  }
}

export default Panel;
