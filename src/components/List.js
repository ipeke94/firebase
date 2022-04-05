import React from "react";
import mappingItems from "../constants/Map";

const List = () => {
  return (
    <div className="list">
      {mappingItems.map((mappingItem) => {
        return <div key={mappingItem.key}>✔️{mappingItem.key}</div>;
        // return <div key={mappingItem.key}>{mappingItem.key}</div>;
      })}
    </div>
  );
};

export default List;
