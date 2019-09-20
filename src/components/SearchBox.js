import React from "react";

class searchBox extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <input
        className="searchbox"
        type="search"
        placeholder="search monsters"
        onChange={handleChange}
      />
    );
  }
}

export default searchBox;
