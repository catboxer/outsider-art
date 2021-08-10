import React from "react"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
/* Webflow css */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  margin: 0;
  min-height: 100%;
}
img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
.w-block {
  display: block;
}
.w-inline-block {
  max-width: 100%;
  display: inline-block;
}
.w-clearfix:before,
.w-clearfix:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-clearfix:after {
  clear: both;
}
.w-nav {
  position: relative;
  background: #dddddd;
  z-index: 1000;
}
.w-nav:before,
.w-nav:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-nav:after {
  clear: both;
}
.w-nav-brand {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
}
.w-nav-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: #222222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.w-nav-link.w--current {
  color: #0082f3;
}
.w-nav-menu {
  position: relative;
  float: right;
}
[data-nav-menu-open] {
  display: block !important;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #C8C8C8;
  text-align: center;
  overflow: visible;
  min-width: 200px;
}
.w--nav-link-open {
  display: block;
  position: relative;
}
.w-nav-overlay {
  position: absolute;
  overflow: hidden;
  display: none;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
}
.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}
.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}
.w-nav[data-animation="over-left"] .w-nav-overlay,
.w-nav[data-animation="over-left"] [data-nav-menu-open] {
  right: auto;
  z-index: 1;
  top: 0;
}
.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}
.w-nav[data-animation="over-right"] .w-nav-overlay,
.w-nav[data-animation="over-right"] [data-nav-menu-open] {
  left: auto;
  z-index: 1;
  top: 0;
}
.w-nav-button {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* tap-highlight-color: rgba(0, 0, 0, 0); */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-nav-button:focus {
  outline: 0;
}
.w-nav-button.w--open {
  background-color: #C8C8C8;
  color: white;
}
.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}
.w-nav[data-collapse="all"] .w-nav-button {
  display: block;
}
.w--nav-dropdown-open {
  display: block;
}
.w--nav-dropdown-toggle-open {
  display: block;
}
.w--nav-dropdown-list-open {
  position: static;
}
@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}
@media screen and (max-width: 810px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }
  .w-nav-brand {
    padding-left: 10px;
  }
}
@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}


.w-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
}
.w-container:before,
.w-container:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-container:after {
  clear: both;
}
.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}
.w-row:before,
.w-row:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-row:after {
  clear: both;
}
.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}
.w-col {
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
}
.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}
.w-col-1 {
  width: 8.33333333%;
}
.w-col-2 {
  width: 16.66666667%;
}
.w-col-3 {
  width: 25%;
}
.w-col-4 {
  width: 33.33333333%;
}
.w-col-5 {
  width: 41.66666667%;
}
.w-col-6 {
  width: 50%;
}
.w-col-7 {
  width: 58.33333333%;
}
.w-col-8 {
  width: 66.66666667%;
}
.w-col-9 {
  width: 75%;
}
.w-col-10 {
  width: 83.33333333%;
}
.w-col-11 {
  width: 91.66666667%;
}
.w-col-12 {
  width: 100%;
}
.w-hidden-main {
  display: none !important;
}
@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: none !important;
  }
  .w-col-medium-1 {
    width: 8.33333333%;
  }
  .w-col-medium-2 {
    width: 16.66666667%;
  }
  .w-col-medium-3 {
    width: 25%;
  }
  .w-col-medium-4 {
    width: 33.33333333%;
  }
  .w-col-medium-5 {
    width: 41.66666667%;
  }
  .w-col-medium-6 {
    width: 50%;
  }
  .w-col-medium-7 {
    width: 58.33333333%;
  }
  .w-col-medium-8 {
    width: 66.66666667%;
  }
  .w-col-medium-9 {
    width: 75%;
  }
  .w-col-medium-10 {
    width: 83.33333333%;
  }
  .w-col-medium-11 {
    width: 91.66666667%;
  }
  .w-col-medium-12 {
    width: 100%;
  }
  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}
@media screen and (max-width: 767px) {
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: inherit !important;
  }
  .w-row,
  .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }
  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }
  .w-col-small-1 {
    width: 8.33333333%;
  }
  .w-col-small-2 {
    width: 16.66666667%;
  }
  .w-col-small-3 {
    width: 25%;
  }
  .w-col-small-4 {
    width: 33.33333333%;
  }
  .w-col-small-5 {
    width: 41.66666667%;
  }
  .w-col-small-6 {
    width: 50%;
  }
  .w-col-small-7 {
    width: 58.33333333%;
  }
  .w-col-small-8 {
    width: 66.66666667%;
  }
  .w-col-small-9 {
    width: 75%;
  }
  .w-col-small-10 {
    width: 83.33333333%;
  }
  .w-col-small-11 {
    width: 91.66666667%;
  }
  .w-col-small-12 {
    width: 100%;
  }
}
@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: inherit !important;
  }
  .w-col {
    width: 100%;
  }
  .w-col-tiny-1 {
    width: 8.33333333%;
  }
  .w-col-tiny-2 {
    width: 16.66666667%;
  }
  .w-col-tiny-3 {
    width: 25%;
  }
  .w-col-tiny-4 {
    width: 33.33333333%;
  }
  .w-col-tiny-5 {
    width: 41.66666667%;
  }
  .w-col-tiny-6 {
    width: 50%;
  }
  .w-col-tiny-7 {
    width: 58.33333333%;
  }
  .w-col-tiny-8 {
    width: 66.66666667%;
  }
  .w-col-tiny-9 {
    width: 75%;
  }
  .w-col-tiny-10 {
    width: 83.33333333%;
  }
  .w-col-tiny-11 {
    width: 91.66666667%;
  }
  .w-col-tiny-12 {
    width: 100%;
  }
}
/* Webflow css end */
body {
  background-color: #f5f5f5;
  font-family: Roboto, sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}
h1 {
  margin: 0px 0px 18px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 43px;
  line-height: 47px;
  font-weight: 500;
}
h2 {
  margin: 30px 0px 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 28px;
  line-height: 31px;
  font-weight: 400;
}

h3 {
  margin: 10px 0px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
}

h4 {
  margin: 10px 0px 18px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
}

h5 {
  margin: 5px 0px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}

h6 {
  margin: 10px 0px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
}

p {
  margin-top: 0px;
  margin-bottom: 15px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
}

p:hover {
  color: #425977;
}

.button {
  display: inline-block;
  padding: 10px 23px;
  background-color: #000;
  -webkit-transition: background-color 250ms ease;
  transition: background-color 250ms ease;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.button:hover {
  background-color: #0050b8;
}

.button.blue {
  background-color: #0050b8;
}

.button.blue:hover {
  background-color: #000;
}

.tagline {
  margin-bottom: 4px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.all-content {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
}
.portrait{
  width: 150px;
}

.logo {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 31px;
  padding: 21px;
  border: 8px solid hsla(0, 0%, 100%, 0.38);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 72px;
  line-height: 60px;
  font-weight: 400;
}

.big-tagline {
  margin-bottom: 68px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 45px;
  line-height: 54px;
  font-weight: 300;
}

.byline {
  margin-bottom: 52px;
  font-family: Roboto, sans-serif;
  color: hsla(0, 0%, 100%, 0.74);
  font-size: 16px;
  font-weight: 300;
}

.footer-wrapper {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.34);
  text-align: center;
}

.footer-nav-link {
  display: block;
  width: 25%;
  height: 58px;
  padding-top: 17px;
  float: left;
  color:white;
  font-size: 1.5rem;
  border-right: 1px solid hsla(0, 0%, 100%, 0.34);
  opacity: 0.8;
  -webkit-transition: opacity 250ms ease, background-color 250ms ease;
  transition: opacity 250ms ease, background-color 250ms ease;
  text-decoration: none;
}

.footer-nav-link:hover {
  background-color: hsla(0, 0%, 100%, 0.09);
  opacity: 1;
}

.subscribe {
  margin-top: 3px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
}

.main-column {
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
}

.main-column.header {
  max-width: 600px;
  padding-top: 60px;
  padding-right: 15px;
  padding-left: 15px;
  background-position: 91% 50%;
  background-size: cover;
  box-shadow: inset -3px 0 0 0 rgba(0, 0, 0, 0.28);
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.64);
}

.main-column.content {
  overflow: scroll;
  max-width: 800px;
  background-color: #fff;
  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12);
  font-family: Roboto, sans-serif;
  font-weight: 400;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12), inset -1px 0 0 0 rgba(0, 0, 0, 0.12);
}

.nav-menu {
  float: left;
}

.nav-link {
  padding: 19px 22px;
  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 -1px 0 0 transparent;
  font-family: 'Roboto Condensed', sans-serif;
  color: #333;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
}

.nav-link:hover {
  background-color: transparent;
  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 1px 0 0 #000;
}

.nav-link.w--current {
  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 1px 0 0 #00b874;
  color: #00b874;
}

.nav-link.w--current:hover {
  background-color: transparent;
}

.nav-link.page {
  padding-right: 28px;
  padding-left: 28px;
}

.article {
  position: relative;
  z-index: 3;
  display: block;
  padding: 40px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12);
  -webkit-transition: background-color 300ms ease, color 300ms ease;
  transition: background-color 300ms ease, color 300ms ease;
  color: #000;
  text-decoration: none;
}

.article:hover {
  background-color: #fcfcfc;
  color: #0050b8;
}

.article.suggested {
  width: 100%;
  padding: 22px;
  float: left;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  border-left: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: none;
}

.article.suggested.last {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: none;
}

.image-wrapper {
  width: 20%;
  padding-right: 10px;
  float: left;
  text-align: center;
}

.article-text-wrapper {
  width: 80%;
  padding-left: 10px;
  float: left;
}

.arrow {
  margin-top: 0px;
  float: right;
  font-size: 23px;
}

.article-info-wrapper {
  margin-top: .75rem;
}

.article-info-text {
  display: inline-block;
  margin-right: 6px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.34);
  font-size: 12px;
  line-height: 10px;
}

.article-info-text.tag {
  display: inline-block;
  padding: 4px 7px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 30px;
  text-transform: none;
  text-decoration: none;
}

.pagination-nav {
  position: relative;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12);
}

.form-wrapper {
  margin-top: 29px;
}

.field {
  height: 53px;
  margin-bottom: 17px;
  padding: 15px 14px;
  background-color: rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 0 8px 0 transparent;
  color: #0050b8;
  font-size: 16px;
  font-weight: 300;
}

.field:focus {
  border: 1px solid #0050b8;
  box-shadow: inset 0 0 8px 0 transparent, 0 0 6px 0 transparent;
}

.field.big {
  height: 150px;
}

.field.first {
  width: 48%;
  margin-right: 3%;
  float: left;
}

.field.last {
  width: 49%;
  float: left;
}

.field.email {
  clear: both;
}

.success-message {
  padding: 22px;
  border: 1px solid rgba(0, 80, 184, 0.22);
  background-color: rgba(0, 80, 184, 0.11);
  color: #0050b8;
}

.success-message.on-dark {
  border-color: #000;
  background-color: #fff;
}

.section {
  padding: 40px;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.12);
  max-width: 45vw;
}

.team-column {
  padding-right: 0px;
  padding-left: 0px;
}

.social-link {
  margin-right: 14px;
  opacity: 0.23;
  -webkit-transition: opacity 250ms ease;
  transition: opacity 250ms ease;
}

.social-link:hover {
  opacity: 1;
}

.thumbnail {
  margin-right: 10px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background-color: #fcfcfc;
}

.header-image {
  position: relative;
  height: 470px;
  z-index: -1;
}

.content-section {
  position: relative;
  z-index: 10;
  padding-top: 47px;
  padding-bottom: 47px;
  background-color: #fff;
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.07);
}

.content-section.footer {
  text-align: center;
}

.hollow-button {
  position: absolute;
  z-index: 11;
  left: 30px;
  top: 50px;
  padding: 7px 15px;
  border: 3px solid #fff;
  -webkit-transition: border-color 250ms ease;
  transition: border-color 250ms ease;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.19);
}

.hollow-button:hover {
  border-color: #00b874;
}

.author-image {
  display: block;
  margin: -70px auto 18px;
  border: 7px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.author-column {
  padding-right: 63px;
  padding-left: 40px;
  text-align: center;
}

.subscribe-section {
  padding-top: 52px;
  padding-bottom: 52px;
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.12);
  color: #fff;
  text-align: center;
}

.about-text {
  margin-bottom: 26px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  line-height: 20px;
}

.sign-up-field {
  width: 80%;
  height: 57px;
  margin-bottom: 0px;
  float: left;
  border: 0px solid #000;
  background-color: #fff;
  box-shadow: inset 0 0 8px 0 transparent;
  -webkit-transition: box-shadow 250ms ease;
  transition: box-shadow 250ms ease;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  font-weight: 400;
}

.sign-up-field:focus {
  box-shadow: inset 0 0 0 0 transparent, inset 0 0 0 2px #0050b8;
}

.sign-up-button {
  width: 20%;
  height: 57px;
  background-color: #425977;
  -webkit-transition: background-color 250ms ease;
  transition: background-color 250ms ease;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
}

.sign-up-button:hover {
  background-color: rgba(0, 80, 184, 0.72);
}

.author-social-links {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
}

.author-connect {
  margin-bottom: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #c2c2c2;
  font-size: 12px;
  text-transform: uppercase;
}

.subtitle {
  margin-bottom: 24px;
  padding-bottom: 31px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
}

.article-heading {
  margin-bottom: 18px;
  font-size: 43px;
  line-height: 47px;
  font-weight: 700;
}

.images {
  padding-top: 10px;
  padding-bottom: 17px;
  text-align: left;
}

/* css for image gallery */
/* Position the image container (needed to position the left and right arrows) */
.gallery-container {
  position: relative;
  max-width: 75%;
  justify-content: center;
  overflow: auto;
}

/* Hide the images by default */
.mySlides img{
border: black 4px solid;
}
.gallery-view {
  display: none;
}
/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.gallery-row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.gallery-column {
  float: left;
  width: 16.66%;
  margin-top: .25rem;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}
.demo img{
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.active,
.demo:hover {
  opacity: 1;
}
/* end css for image gallery */

.quote {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 37px;
  border-left: 3px solid rgba(0, 0, 0, 0.09);
  font-size: 26px;
  line-height: 31px;
  font-weight: 300;
}

.credits {
  position: absolute;
  top: 35px;
  right: 44px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: hsla(0, 0%, 100%, 0.61);
  font-size: 12px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.12), 1px 1px 3px rgba(0, 0, 0, 0.11);
}

.big-image {
  border: 6px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.image-text {
  margin-top: 6px;
  color: #b8b8b8;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
}

.share-article-wrapper {
  margin-top: 42px;
  padding-top: 22px;
  padding-bottom: 22px;
  border-top: 3px solid rgba(0, 0, 0, 0.09);
}

.share-btn {
  display: block;
  width: 56px;
  margin-right: 14px;
  float: left;
}

.share-btn.facebook {
  width: 49px;
}

.alternative-h2 {
  margin-top: 0px;
  font-weight: 300;
}

.alternative-h2.suggestions {
  margin-bottom: 36px;
  text-align: center;
}

.footer-link {
  margin-right: 9px;
  margin-left: 9px;
  border-bottom: 2px solid #fff;
  -webkit-transition: color 250ms ease, border-color 250ms ease;
  transition: color 250ms ease, border-color 250ms ease;
  font-family: 'Roboto Condensed', sans-serif;
  color: #a6a6a6;
  text-decoration: none;
  text-transform: uppercase;
}

.footer-link:hover {
  border-bottom: 2px solid #c7c7c7;
}

.footer-link.proof {
  padding: 7px 8px;
  border: 2px solid rgba(0, 0, 0, 0.12);
}

.footer-link.proof:hover {
  border-color: #0050b8;
  color: #0050b8;
}

.thumbnail-title {
  margin-top: 0px;
  margin-bottom: 10px;
}

.thumbnail-title:hover {
  color: #425977;
}

.header-container {
  padding-top: 345px;
}

@media screen and (max-width: 991px) {
  .nav-link {
    padding-right: 13px;
    padding-left: 13px;
  }

  .section {
    padding: 25px 20px;
  }

  .header-image {
    height: 357px;
  }

  .header-container {
    padding-top: 241px;
  }
}

@media screen and (max-width: 810px) {
  .all-content {
    position: relative;
    padding-bottom: 59px;
  }

  .logo {
    display: inline-block;
    margin-top: 0px;
    margin-right: 14px;
    margin-bottom: 0px;
    padding: 13px 14px;
    border-width: 5px;
    font-size: 42px;
    line-height: 34px;
  }

  .big-tagline {
    display: inline-block;
    margin-bottom: 57px;
    font-size: 25px;
    line-height: 29px;
  }

  .footer-wrapper {
    background-color: #000;
  }

  .main-column {
    width: 100%;
    max-width: 1000px;
  }

  .main-column.header {
    position: static;
    max-width: 1000px;
    padding-top: 37px;
    padding-bottom: 42px;
    text-align: left;
  }

  .nav-menu {
    background-color: #fff;
  }

  .nav-link {
    //box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.23);
    box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 -1px 0 0 transparent;

    color: #000;
  }

  .nav-link.w--current {
    box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 1px 0 0 #00b874;
  }

  .nav-link.page {
    background-color: #fff;
    box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.12);
    color: #000;
  }

  .nav-link.page.w--current {
    color: #00b874;
  }

  .nav-link.page.w--current:hover {
    background-color: #fff;
  }

  .article.suggested {
    width: auto;
    margin-right: 10px;
    margin-left: 10px;
    box-shadow: none;
  }

  .section {
    padding: 27px 10px 1rem 1.5rem;
    max-width: 710px;
  }

  .social-link {
    margin-right: 19px;
    margin-left: 0px;
  }

  .thumbnail {
    margin-bottom: 10px;
  }

  .header-image {
    height: 117px;
    padding-top: 0px;
  }

  .content-section {
    padding-top: 27px;
    padding-bottom: 27px;
  }

  .author-image {
    margin-top: 16px;
    margin-right: 15px;
    margin-left: 0px;
    float: left;
  }

  .author-column {
    padding-right: 10px;
    padding-left: 10px;
    text-align: left;
  }

  .subscribe-section {
    padding-right: 28px;
    padding-left: 28px;
  }

  .about-text {
    margin-bottom: 16px;
  }

  .sign-up-field {
    width: 70%;
  }

  .sign-up-button {
    width: 30%;
  }

  .author-social-links {
    margin-top: 19px;
    margin-bottom: 0px;
    padding-top: 15px;
  }

  .author-connect {
    margin-bottom: 10px;
  }

  .credits {
    top: 5px;
    right: 10px;
  }

  .header-container {
    padding-top: 66px;
    padding-right: 10px;
    padding-left: 10px;
  }

  .menu {
    margin-top: 1px;
    float: right;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 17px;
  }

  .menu-icon {
    margin-right: 5px;
    float: left;
  }

  .menu-wrapper {
    border-left: 1px solid rgba(0, 0, 0, 0.09);
  }

  .menu-wrapper.w--open {
    background-color: #000;
  }
}

@media screen and (max-width: 479px) {
  h1 {
    font-size: 40px;
  }

  .logo {
    display: inline-block;
    margin-bottom: 13px;
    float: none;
  }

  .main-column.header {
    padding-bottom: 41px;
  }

  .nav-link.w--current {
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.22);
  }

  .article.suggested {
    box-shadow: none;
  }

  .field.first {
    width: 100%;
    float: none;
  }

  .field.last {
    width: 100%;
    float: none;
  }

  .team-column {
    text-align: center;
  }

  .social-link {
    margin-bottom: 23px;
  }

  .sign-up-field {
    width: 100%;
    margin-bottom: 13px;
  }

  .sign-up-button {
    width: 100%;
  }

  .footer-link {
    display: block;
    margin-bottom: 17px;
  }
}

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}