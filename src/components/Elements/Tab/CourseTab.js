import React, { Component } from "react";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";

export default () => (
  <section className="course__area pt-115 pb-120 grey-bg">
    <Tabs variant="enclosed" id="react-tabs-276">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
                Encuentra el programa adecuado para ti
              </h2>
              <p>
                No tienes que luchar solo, tienes nuestra asistencia y ayuda.
              </p>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="course__menu d-flex justify-content-lg-end mb-60">
              <div className="masonary-menu filter-button-group">
                <Link href="/">
                  Conocer todos los programas
                </Link>
              </div>
            </div>
          </div>
        </div>
        <TabPanel>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/cursos.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a>Cursos</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>40 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Manejo de protocolos de Bioseguridad para personal de servicios generales.</a>
                    </Link>
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status">
                    <span>Virtual</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                      Descargar brochure
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/diplomado.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="sky-blue">Diplomados</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>40 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Tipologias textuales.</a>
                    </Link>
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                      Descargar brochure
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/tecnica-agro.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="yellow">Programas técnico laborales</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>1060 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Técnico laboral en Agroturismo.</a>
                    </Link>
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="yellow">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                      Descargar brochure
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/informatica.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="sky-blue">Diplomados</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>120 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Herramientas informáticas para la dinamización de ambientes virtuales.</a>
                    </Link>
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                      Descargar brochure
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/tecnica-energia.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="yellow">Programas técnico laborales</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>1320 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Técnico laboral en energía fotovoltaica.</a>
                    </Link>
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="yellow">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                      Descargar brochure
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/innovacion.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a>Cursos</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>08 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Taller de innovación y calidad.</a>
                    </Link>
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span>Virtual</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                      Descargar brochure
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-2.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="sky-blue">Art & Design</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>72 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Fundamentals of music theory Learn new</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-2.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Barry Tone</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">$32.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-3.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="green">Development</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>14 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Strategy law and organization Foundation</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-3.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Elon Gated</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="green">$46.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-4.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="blue">Marketing</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>22 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>The business Intelligence analyst Course 2022</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-4.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Eleanor Fant</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="blue">$62.00</span>
                    <span className="old-price">$97.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-5.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="orange">Audio & Music</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>18 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Build your media and Public presence</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-5.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Steve Smith</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="orange">$62.00</span>
                    <span className="old-price">$97.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-2.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="sky-blue">Art & Design</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>72 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Fundamentals of music theory Learn new</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-2.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Andrew Nihal</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">$32.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-3.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="green">Development</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>14 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Strategy law and organization Foundation</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-3.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Jhon Saif</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="green">$46.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-4.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="blue">Marketing</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>22 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>The business Intelligence analyst Course 2022</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-4.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Kevin Peter</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="blue">$62.00</span>
                    <span className="old-price">$97.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-5.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="orange">Audio & Music</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>18 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Build your media and Public presence</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-5.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Peter Parker</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="orange">$62.00</span>
                    <span className="old-price">$97.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-6.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="pink">UX Design</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>13 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (72)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Creative writing through Storytelling</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-6.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Steve Long</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="pink">$46.00</span>
                    <span className="old-price">$72.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-1.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a>Art & Design</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>43 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Become a product Manager learn the skills & job.</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-1.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Peterson</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status">
                    <span>Free</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-2.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="sky-blue">Art & Design</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>72 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Fundamentals of music theory Learn new</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-2.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Willamson</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">$32.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-3.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="green">Development</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>14 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Strategy law and organization Foundation</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-3.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Martin</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="green">$46.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-2.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="sky-blue">Art & Design</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>72 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Fundamentals of music theory Learn new</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-2.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Jhon Doe</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">$32.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-3.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="green">Development</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>14 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Strategy law and organization Foundation</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-3.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Spider</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="green">$46.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-4.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="blue">Marketing</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>22 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>The business Intelligence analyst Course 2022</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-4.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Ross Taylor</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="blue">$62.00</span>
                    <span className="old-price">$97.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/course/course-5.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <div className="course__tag">
                    <Link href="/course-details">
                      <a className="orange">Audio & Music</a>
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>18 Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href="/course-details">
                      <a>Build your media and Public presence</a>
                    </Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-5.jpg"
                        alt="img not found"
                      />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        <a>Mitchel Stark</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="orange">$62.00</span>
                    <span className="old-price">$97.00</span>
                  </div>
                  <div className="course__btn">
                    <Link href="/course-details">
                      <a className="link-btn">
                        Know Details
                        <i className="fas fa-arrow-right"></i>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  </section>
);