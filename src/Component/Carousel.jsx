import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import "./Carousel.css";
// import './theme.less';
const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 50,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    default: { duration: 300 },
  },
});
class crousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      slides: [
        "Web Designing",
        "Web Development",
        "Front-End Developer",
        "Backend Dveloper",
        "Full Stack Dveloper",
      ],
      currentSlide: 0,
      slideTimer: 1 * 1000,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.changeSlide();
    }, 5000);
  }
  changeSlide() {
    let { slides, currentSlide } = this.state;
    let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0;
    console.log(currentSlide, nextSlide);

    this.setState({ isVisible: false, currentSlide: nextSlide });
    const that = this;
    setTimeout(function () {
      that.setState({ isVisible: true });
    }, 500);
  }
  render() {
    let { isVisible, slides, currentSlide } = this.state;

    return (
      <div className="container" onClick={this.changeSlide.bind(this)}>
        <PoseGroup>
          {isVisible && [
            <Shade key="shade" className="shade" />,
            <Modal key="modal" className="modal">
              <h1>{slides[currentSlide]}</h1>
            </Modal>,
          ]}
        </PoseGroup>
      </div>
    );
  }
}
export default crousal;
