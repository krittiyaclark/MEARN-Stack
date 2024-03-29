import React, { useState, useContext } from "react";
import Card from "../../shared/components/UIElements/Card";
import Map from "../../shared/components/UIElements/Map";
import { Modal } from "../../shared/components/UIElements/Modal";
import Button from "../../shared/FormElements/Button";

import "./PlaceItem.css";
import { AuthContext } from "../../shared/context/auth-context";

export const PlaceItem = ({
  image,
  title,
  address,
  description,
  id,
  coordinates,
}) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  // Confirm DELETE
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showConfirmWarningModalHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleting");
  };

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
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item_modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to processed and delate this? Please note that it ccan't
          be ondone thereafter
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && <Button to={`/places/${id}`}>EDIT</Button>}
            {auth.isLoggedIn && (
              <Button danger onClick={showConfirmWarningModalHandler}>
                DELETE
              </Button>
            )}
            {auth.isLoggedIn && <Button to={`/places/${id}`}>EDIT</Button>}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};
