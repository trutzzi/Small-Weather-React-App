import React from 'react'
import { Map, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import {useSpring, animated} from "react-spring"

function SimpleExample(props) {
  const fade = useSpring({
    from: {opacity: 0},
    opacity: 1,
  })
  let { lat, lon } = props.coord
  const position = [lat, lon];
  return (
    <animated.div style={fade} className="themap">
      <Map center={position} zoom={props.zoom} style={{ width: '100%', height: '100%' }}
        onViewportChanged={(view) => props.view(view)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </Map>
      <p>Move the map to search weather by area</p>
    </animated.div>
  );
}


export default SimpleExample