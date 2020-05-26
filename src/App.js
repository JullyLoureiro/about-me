import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import PropTypes from 'prop-types'
import './App.css'

class CustomControls extends React.Component {
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
      //paddingTop: '10px',
      position: 'fixed',
      transform: 'translateX(-50%)',
    },
  }

  renderMenu(currentSlideIndex) {
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
 

    const apresentation = {disabled: currentSlideIndex === 0, key: 0, onClick: () => scrollToSlide(0)}
    const education = {disabled: currentSlideIndex === 1, key: 0, onClick: () => scrollToSlide(1)};
    const experiencie = {disabled: currentSlideIndex === 2, key: 0, onClick: () => scrollToSlide(2)};
    const skills = {disabled: currentSlideIndex === 3, key: 0, onClick: () => scrollToSlide(3)};
    const projects = {disabled: currentSlideIndex === 4, key: 0, onClick: () => scrollToSlide(4)};

    return (
      <ul style={{padding: 10}}>
        <li {...apresentation}><a href={'javascript:void(0)'}>Apresentação</a></li>
        <li {...education}><a href={'javascript:void(0)'} >Educação</a></li>
        <li {...experiencie}><a href={'javascript:void(0)'}>Experiência</a></li>
        <li {...skills}><a href={'javascript:void(0)'}>Habilidades</a></li>
        <li {...projects}><a href={'javascript:void(0)'}>Projetos</a></li>
      </ul>
    )
    
  }

  render() {
    const {
      getCurrentSlideIndex, slidesCount, style, className,
    } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className} style={style}>
        {this.renderMenu(currentSlideIndex)}
      </div>
    );
  }
}

export default function FullPageExampleCustomControls() {
  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };
  const backgroundApresentation = {
   // backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  };

  return (
    <FullPage controls={CustomControls}>
      <Slide style={{...baseStyle, ...backgroundApresentation}}>
        <h1>Custom Controls</h1>
      </Slide>
      <Slide style={{ ...baseStyle}}>
        <h1>2</h1>
      </Slide>
      <Slide style={{ ...baseStyle}}>
        <h1>3</h1>
      </Slide>
      <Slide style={{ ...baseStyle}}>
        <h1>4</h1>
      </Slide>
      <Slide style={{ ...baseStyle}}>
        <h1>5</h1>
      </Slide>
    </FullPage>
  );
}