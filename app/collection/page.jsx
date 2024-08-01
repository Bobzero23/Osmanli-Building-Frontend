import React from "react";

const CellectionCard = () => {
  return <div></div>;
};

const Collection = () => {
  return (
    <div>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((card) => (
        <CellectionCard />
      ))}
    </div>
  );
};

export default Collection;
