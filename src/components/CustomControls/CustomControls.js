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
      const experience = {disabled: currentSlideIndex === 1, key: 0, onClick: () => scrollToSlide(1)}
      const education = {disabled: currentSlideIndex === 5, key: 0, onClick: () => scrollToSlide(5)}
      const skills = {disabled: currentSlideIndex === 6, key: 0, onClick: () => scrollToSlide(6)}
      const projects = {disabled: currentSlideIndex === 7, key: 0, onClick: () => scrollToSlide(7)}
  
      return (
        <nav className="navbar">
           <span class="navbar-toggle" id="js-navbar-toggle">
              <Menu fontSize={'large'}/>
          </span>
          <a href={'javascript:void(0)'} className="logo"><a style={{color: '#FF0090', textShadow: '1px 1px 4px #808080'}}>JULIANA</a> LOUREIRO</a>
          <ul className="main-nav" id="js-menu">
              <li {...apresentation}><a href={'javascript:void(0)'} className="nav-links">Apresentação</a></li>
              <li {...experience}><a href={'javascript:void(0)'} className="nav-links">Experiência</a></li>
              <li {...education}><a href={'javascript:void(0)'} className="nav-links">Formação</a></li>
              <li {...skills}><a href={'javascript:void(0)'} className="nav-links">Habilidades</a></li>
              {/* <li {...projects}><a href={'javascript:void(0)'} className="nav-links">Projetos</a></li> */}
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