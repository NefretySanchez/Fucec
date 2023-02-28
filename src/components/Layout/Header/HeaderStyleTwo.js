import React, { useState, useEffect, Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BurgerMenus from "./BurgerMenus";
import Head from "next/head";
import Image from "next/image";

const HeaderTwo = (props) => {
  const { isHome } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".header__area");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <title>Fucec</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="assets/img/img_fucec/Grupo 105.png"
          type="image/x-icon"
        />
      </Head>
      <header>
        <div
          id="header-sticky"
          className={
            isHome
              ? "header__area header__transparent header__padding-2 "
              : "header__area header__transparent header__padding-2 header__white"
          }
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="assets/img/img_fucec/Grupo 105.svg"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu main-menu-2 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <a href="/">Inicio</a>
                        </li>
                        <li>
                          <a href="/about">Nosotros</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Formación</a>

                          <ul className="submenu">
                            <li>
                              <a href="/course">Cursos</a>
                            </li>
                            <li>
                              <a href="/diplomados">Diplomados</a>
                            </li>
                            <li>
                              <a href="/formacion-continua">
                                Formación continua
                              </a>
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
                    </nav>
                  </div>
                  <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                    <a href="#" target="_blank" className="e-btn">
                      Tu Moodle
                    </a>
                  </div>
                  <div className="header__btn header__btn-2 ml-20 d-none d-sm-block">
                    <select>
                      <option>Español</option>
                      <option>Ingles</option>
                    </select>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div
                      className="sidebar-toggle-btn ml-30"
                      id="sidebar-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={() => setMenuOpen(false)}
          className={menuOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
    </React.Fragment>
  );
};

export default HeaderTwo;
