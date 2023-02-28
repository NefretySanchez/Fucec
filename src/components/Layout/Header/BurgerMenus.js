import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setcourses(false);
      setBlog(false);
      setPages(false);
    } else if (menu == "courses") {
      setHome(false);
      setcourses(!courses);
      setBlog(false);
      setPages(false);
    } else if (menu == "blog") {
      setHome(false);
      setcourses(false);
      setBlog(!blog);
      setPages(false);
    } else if (menu == "pages") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(!pages);
    }
  };

  return (
    <div className={menuOpen ? "sidebar__area open" : "sidebar__area"}>
      <div className="sidebar__wrapper">
        <div className="sidebar__close">
          <button
            className="sidebar__close-btn"
            id="sidebar__close-btn"
            onClick={() => setMenuOpen(false)}
          >
            <span>
              <i className="fas fa-times"></i>
            </span>
            <span>close</span>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="mm-menu mb-10">
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/about">Nosotros</a>
              </li>
              <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a
                  onClick={() => {
                    openMobileMenu("blog");
                  }}
                  href="#"
                >
                  Formación
                </a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <a href="/course">Cursos</a>
                  </li>
                  <li>
                    <a href="/diplomados">Diplomados</a>
                  </li>
                  <li>
                    <a href="/formacion-continua">Formación continua</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenus;
