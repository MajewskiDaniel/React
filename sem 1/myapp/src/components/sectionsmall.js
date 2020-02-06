import React from "react";
import Title from "./title";
import Paragraph from "./paragraph";

function SectionSmall() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <Title text="About" />
            <Paragraph>
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSmall;
