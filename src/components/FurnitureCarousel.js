import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "img/garden-bench.jpg",
    altText: "30% Off Everything",
    header: "30% Off Everything",
    key: "1"
  },
  {
    src: "img/garden-furniture.jpg",
    altText: "New Deals Every Day!",
    caption: "Haven't found what you're looking for? Come back and see what we have in stock tomorrow!",
    header: "New Deals Every Day!",
    key: "2"
  },
  {
    src: "img/dressing-table.jpg",
    altText: "Blowout Deals!",
    header: "Blowout Deals!",
    key: "3"
  },
  {
    src: "img/patio-furniture.jpg",
    altText: "Get your furniture now!",
    header: "Get your furniture now!",
    key: "4"
  }
];

const FurnitureCarousel = () => <UncontrolledCarousel items={items}
                                            indicators={false}
                                            controls={false}
                                             />;

export default FurnitureCarousel;