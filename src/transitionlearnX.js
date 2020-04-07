import React from 'react';
import { useSpring, animated } from 'react-spring'
function Transitionlearn(props) {
  let fade = useSpring({
    number: props.title,
    from: {
      opacity: 0,
      number: 0
    },
    enter: { opacity: 1 }
  })
  return (
    <animated.div style={fade}>
      <animated.h1>{fade.number}</animated.h1>
    </animated.div>
  );
}

export default Transitionlearn;