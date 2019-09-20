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

//Esto lo sacamos de App para que quede más bonico
//Habría que ponerlo como dummy porque solo renderiza pero da error ¿? al exportar

export default searchBox;
