import React, { Component } from "react";
import Link from "next/link";

class Category extends Component {
  render() {
    return (
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-head mb-35">
          <h3 className="sidebar__widget-title">Categorias</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__category">
            <ul>
              <li>
                <Link href="#">
                  <a>Emprendimiento</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Organización</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Tecnología</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Audiovisual</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
