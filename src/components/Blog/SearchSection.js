import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="sidebar__widget mb-60">
        <div className="sidebar__widget-content">
          <div className="sidebar__search p-relative">
            <form action="#">
              <input type="text" placeholder="Buscar una entrada" />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
