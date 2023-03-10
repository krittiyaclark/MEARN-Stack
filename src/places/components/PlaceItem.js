import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Map from "../../shared/components/UIElements/Map";
import { Modal } from "../../shared/components/UIElements/Modal";
import Button from "../../shared/FormElements/Button";

import "./PlaceItem.css";

export const PlaceItem = ({
  image,
  title,
  address,
  description,
  id,
  coordinates,
}) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};
