import PropTypes from 'prop-types'
import React from 'react'
import {ButtonBase} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

export default class CustomControls extends React.Component {
    static propTypes = {
      className: PropTypes.string,
      getCurrentSlideIndex: PropTypes.func.isRequired,
      onNext: PropTypes.func.isRequired,
      onPrev: PropTypes.func.isRequired,
      scrollToSlide: PropTypes.func.isRequired,
      slidesCount: PropTypes.number.isRequired,
      style: PropTypes.object,
    }
  
    static defaultProps = {
      className: 'full-page-controls',
      style: {
        left: '50%',
        width: '100%',
        position: 'fixed',
        transform: 'translateX(-50%)',
      },
    }

    componentDidMount(){
      let mainNav = document.getElementById("js-menu");
      let navBarToggle = document.getElementById("js-navbar-toggle");

      navBarToggle.addEventListener("click", function() {
        mainNav.classList.toggle("active");
  });

    }
    renderMenu(currentSlideIndex) {
      const { slidesCount, scrollToSlide } = this.props;
      const slidesNumbers = [];
  
      const apresentation = {disabled: currentSlideIndex === 0, key: 0, onClick: () => scrollToSlide(0)}
      const education = {disabled: currentSlideIndex === 1, key: 0, onClick: () => scrollToSlide(1)}
      const experience = {disabled: currentSlideIndex === 2, key: 0, onClick: () => scrollToSlide(2)}
      const skills = {disabled: currentSlideIndex === 3, key: 0, onClick: () => scrollToSlide(3)}
      const projects = {disabled: currentSlideIndex === 4, key: 0, onClick: () => scrollToSlide(4)}
  
      return (
        <nav className="navbar">
           <span class="navbar-toggle" id="js-navbar-toggle">
              <Menu fontSize={'large'}/>
          </span>
          <a href={'javascript:void(0)'} className="logo">logo</a>
          <ul className="main-nav" id="js-menu">
              <li {...apresentation}><a href={'javascript:void(0)'} className="nav-links">Apresentação</a></li>
              <li {...education}><a href={'javascript:void(0)'} className="nav-links">Formação</a></li>
              <li {...experience}><a href={'javascript:void(0)'} className="nav-links">Experiência</a></li>
              <li {...skills}><a href={'javascript:void(0)'} className="nav-links">Habilidades</a></li>
              <li {...projects}><a href={'javascript:void(0)'} className="nav-links">Projetos</a></li>
          </ul>
      </nav>
      )
      
    }
  
    render() {
      const {getCurrentSlideIndex, slidesCount, style, className} = this.props
      const currentSlideIndex = getCurrentSlideIndex()
  
      return (
        <div className={className} style={style}>
          {this.renderMenu(currentSlideIndex)}
        </div>
      );
    }
  }