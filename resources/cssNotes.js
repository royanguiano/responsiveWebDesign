/**
 
zoom in: 
     transform: scale(1.05);
animation effect: 
    transform: all .2s;
create a border outside an element: 
    outline: 15px solid $color-green;
offset the border outside an element: 
    outline-offset: 20px; 

notes on lectures: 
use icon font
    1. download icons from http://linea.io/
    2. treat icons as text

skewed section
    transform: skewY(-7deg);
direct child selector
    .section-features{ //parent
        padding: 20rem 0;
        background-image: linear-gradient(to right bottom, rgba($color-light-green, .8), rgba($color-dark-green, .8)), url(../img/nat-4.jpg);
        background-size: cover;
        transform: skewY(-7deg);
        margin-top: -10rem;

        & > * {     //direct child selector > *
            transform: skewY(7deg);
        }
    }

notes on lecture: 
how to build a rotating card effect?
    parent element: positin relative;
    child element: position: absolute; //describe top, left, right, bottom
    then, 

    &:hover &__side--front {
        transform: rotateY(-180deg);
    }
    &:hover &__side--back {
        transform: rotateY(0);
    }
how to use perspective in css?
    perspective: 150rem;
    -moz-perspective: 150rem;
how to use backface-visibility property?
    backface-visibility: hidden; //hides the backside of an element
background blend modes
      background-blend-mode: hue;
how and when to use box-decoration-break?
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

 */