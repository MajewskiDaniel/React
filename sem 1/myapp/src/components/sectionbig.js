import React from "react";
import Title from "./title";
import Paragraph from "./paragraph";
import Button from "./button";

function SectionBig() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <Title text="Section Title" />
        <Paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Paragraph>
        <p>
          <Button text="Show more" />
        </p>
      </div>
    </section>
  );
}

export default SectionBig;
