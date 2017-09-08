import React from 'react';
import './panel.scss';
import EmpCard from '../EmpCard/EmpCard';

const {array} = React.PropTypes;

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-judges">
          <div className="panel-title text-center">
            Panel of Judges
          </div>
          <div className="description text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, autem.
          </div>
          <div className="judge-list row">
            {this.props.judgeList.map((item, index) => (
              <EmpCard key={index} imgSrc={item.imgSrc} empName={item.empName} empDes={item.empDes}/>
            ))}
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

Panel.propTypes = {
  judgeList: array
};

Panel.defaultProps = {
  judgeList: [
    {
      imgSrc: '/app/assets/person1.jpg',
      empName: 'Mr.Lorem',
      empDes: 'FE Developer'
    },
    {
      imgSrc: '/app/assets/person2.jpg',
      empName: 'Mr.Ipsum',
      empDes: 'Developer'
    },
    {
      imgSrc: '/app/assets/person4.png',
      empName: 'Mrs.Dolor',
      empDes: 'BE Developer'
    },
    {
      imgSrc: '/app/assets/person4.png',
      empName: 'Mrs.Dolor',
      empDes: 'BE Developer'
    }
  ]
};

export default Panel;
