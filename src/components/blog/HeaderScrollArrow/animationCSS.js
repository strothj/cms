export default `
/******************************************
*                                         *
*               RUMILI                    *
*     http://boguz.github.io/rumuli/      *
*                                         *
******************************************/


/*********    SVG  ANIMATION 5   *********/
.scroll-arrow svg {
  height: 80px;
}

.scroll-arrow svg .scroll-arrow__arrow {
  -webkit-transform: scale(.8);
  -ms-transform: scale(.8);
  transform: scale(.8);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

.scroll-arrow svg .scroll-arrow__circle-1 {
  -webkit-animation-name: svg5_1;
  animation-name: svg5_1;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes svg5_1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.scroll-arrow svg .scroll-arrow__circle-2 {
  -webkit-animation-name: svg5_2;
  animation-name: svg5_2;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes svg5_2 {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.scroll-arrow svg .scroll-arrow__circle-3 {
  -webkit-animation-name: svg5_3;
  animation-name: svg5_3;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes svg5_3 {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  60% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;
