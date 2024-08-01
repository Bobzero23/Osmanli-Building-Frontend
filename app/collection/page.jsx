import React from "react";

const CellectionCard = () => {
  return (
    <div className="border border-b-slate-700">
      <div className="w-[300px] h-[250px]"> Collection Card</div>
    </div>
  );
};

const Collection = () => {
  return (
    <div className="flex-center gap-1 flex-wrap p-2 border border-b-slate-700">
      {[1, 1, 1, 1, 1, 1].map((card) => (
        <CellectionCard />
      ))}
    </div>
  );
};

export default Collection;
