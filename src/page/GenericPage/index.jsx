import React from "react";

const GenericPage = () => {
  const location = window.location.pathname;
  return (
    <div>
      <h2>{location} will be added soon...</h2>
    </div>
  );
};

export default GenericPage;
