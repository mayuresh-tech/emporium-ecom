import React from "react";

import "./Heading.css";

const Heading = ({item}) => {
    return (
        <div className="collec-head">
            <h3 id="h3">{item.headingName}</h3>
        </div>
    );
}

export default Heading;