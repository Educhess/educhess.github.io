import React, { useState } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";

import { arrayMove } from 'react-sortable-hoc';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photo_gallery";

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

function Gallerypics() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div>
      <h2 className="bg-purple-50 font-bold"><u>GALLERY</u></h2>
      {/* <h3>Drag photo to rearrange</h3> */}
      <SortableGallery className="bg-purple-50 text-9xl" items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
export default Gallerypics;
