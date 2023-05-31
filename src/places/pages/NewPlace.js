import React, { useCallback } from "react";

import Input from "../../shared/FormElements/Input";

import "./NewPlace.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isVlaid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isVlaid) => {}, []);

  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
