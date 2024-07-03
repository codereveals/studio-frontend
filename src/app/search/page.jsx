import React from "react";
import Card from "../__components/Card";

const SearchPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Card
        title="Word Counter"
        imgURL="/Wordcounter-generator-bg.png"
        url="/tools/word-counter"
      />
      <Card
        title="Text Capitilize"
        url="/tools/text-uppercase"
        imgURL="/capital.webp"
      />
      <Card
        title="Gradient Generator"
        url="tools/gradient-generator"
        imgURL="/gradient.webp"
      />
      <Card
        title="Color Generator"
        url="tools/color-generator"
        imgURL="/color.webp"
      />
      <Card
        title="Slug Generator"
        url="/tools/slug-generator"
        imgURL="/slug.webp"
      />
    </div>
  );
};

export default SearchPage;
