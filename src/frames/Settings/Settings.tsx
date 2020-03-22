import React from "react";
import {Link} from "react-router-dom";

import * as settings from "../../config/settings";

import "./settings.scss";

const Settings = (props: any) => {
  console.log(props);
  const redirectToTv = () => props.history.push("/");

  return(
    <div className="settings">
      <div className="navigation">
        <div className="tabs">
          {settings.hasSourceURI() && <Link className="tab-item" to="/">TV</Link>}
          <Link className="tab-item" to="/about">About</Link>
        </div>

        <div className="actions">
          <button className="btn" onClick={redirectToTv}>Save</button>
        </div>
      </div>

      <div className="">
        TODO: add form
      </div>
    </div>
  );
};

export default Settings;
