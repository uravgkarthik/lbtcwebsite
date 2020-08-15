import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "../Partners/partners.min.scss"

function Partners(props){
    return (
      <div className="col-md-4 col-sm-4 col-lg-4">
        <div className="orgn-bx2 bkgndwhite">
          <img
            src= {props.imgSrc}
            alt="org-img2-1.png"
            itemprop="image"
          />
        </div>
      </div>
    );
}

export default Partners;