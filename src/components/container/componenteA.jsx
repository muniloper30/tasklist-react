import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import ComponenteB from "../pure/componenteB";

const ComponenteA = (contact) => {
  return (
    <div>
      <h2>Nombre : {contact.name}</h2>
      <h2>Apellido : {contact.lastname}</h2>
      <h4>Email : {contact.email}</h4>
      <ComponenteB estado={true} />
    </div>
  );
};

ComponenteA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponenteA;
