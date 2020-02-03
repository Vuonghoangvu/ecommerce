import React from "react";
import MenuItem from "../menuItem/menuItem";
import "./directory.scss";
import sections from "./directory.data";

class Directory extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
