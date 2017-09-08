import React from 'react';

import './footer.scss';
const Footer = () => {
  return (
    <footer className="row">
      <div className="row footer-block-container">
        <div className = "col-lg-3 col-md-6 col-sm-12 text-center">
          <h4>
            Lorem ipsum
          </h4>
          <span>
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
          </span>
        </div>
        <div className = "col-lg-3 col-md-6 col-sm-12 text-center">
        <h4>
          Lorem ipsum
        </h4>
        <span>
          Lorem ipsum dolor sit
          Nesciunt itaque, alias possimus
          Lorem ipsum dolor sit
          Nesciunt itaque, alias possimus
          Lorem ipsum dolor sit
          Nesciunt itaque, alias possimus
        </span>
      </div>
      <div className = "col-lg-3 col-md-6 col-sm-12 text-center">
          <h4>
            Lorem ipsum
          </h4>
          <span>
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
          </span>
        </div>
        <div className = "col-lg-3 col-md-6 col-sm-12 text-center">
          <h4>
            Lorem ipsum
          </h4>
          <span>
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
            Lorem ipsum dolor sit
            Nesciunt itaque, alias possimus
          </span>
        </div>
      </div>
      <div className="social-media-container d-flex justify-content-between">
        <span>Copyright &copy; 2017 Deloitte. All rights reserved.</span>
        <div className="social-media">
          <a href="#">
            <img src="/app/assets/fb.jpg" />
          </a>
          <a href="#">
            <img src="/app/assets/twitter.jpg" />
          </a>
          <a href="#">
            <img src="/app/assets/instagram.jpg" />
          </a>
          <a href="#">
            <img src="/app/assets/message.jpg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

