import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// import iconMarker from 'leaflet/dist/images/marker-icon.png';
import markerred from '../../img/marker-red.png';
import markerblue from '../../img/marker-blue.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';

import 'leaflet/dist/leaflet.css';

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
  });
}

function ExhibitionExploreMap(props) {
  const { exhibitions } = props;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const mapRef = useRef();
  const popRef = useRef();
  function handleClick(e) {
    //抓取被點擊marker的index
    setSelectedIndex(e.target.options.index);

    //解決popup在點擊close時改變url問題
    mapRef.current._popup._closeButton.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  function handlemouse() {
    // popRef.current.openPopup();
    console.log(popRef);
  }

  function getMarkerIcon(index) {
    if (index === selectedIndex) {
      return createIcon(markerred);
    } else {
      return createIcon(markerblue);
    }
  }

  return (
    <MapContainer
      className="markercluster-map"
      center={[25.0476181, 121.5152175]}
      zoom={12}
      maxZoom={18}
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org">OpenMapTiles</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {exhibitions.map((exhibition, index) => {
        return (
          <Marker
            key={exhibition.id}
            index={index}
            position={exhibition.position}
            icon={getMarkerIcon(index)}
            eventHandlers={{
              click: handleClick,
              mouseover: handlemouse,
            }}
            ref={popRef}
          >
            <Popup>
              <div className="d-flex">
                <Link to={`/exhibition/${exhibition.id}`}>
                  <img
                    src={`http://localhost:3003/images/exhibition/${exhibition.exhibition_img}`}
                    width="125px"
                    height="80px"
                    alt="..."
                  />
                </Link>

                <div>
                  <h4>
                    <Link
                      to={`/exhibition/${exhibition.id}`}
                      className="ex-map-title"
                    >
                      {exhibition.exhibition_name}
                    </Link>
                  </h4>
                  <div className="d-flex justify-content-between">
                    <div>{exhibition.city}</div>
                    <div>NT{exhibition.exhibition_price}</div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
      ;
    </MapContainer>
  );
}
export default ExhibitionExploreMap;
