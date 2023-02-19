import React from "react";

import Input from "../../shared/FormElements/Input";

import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        // onChange={}
      />
    </form>
  );
};

export default NewPlace;