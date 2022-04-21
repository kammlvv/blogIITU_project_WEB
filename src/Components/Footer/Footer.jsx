/* eslint-disable linebreak-style */
import React from 'react';
import styleFooter from './Footer.module.css';
import insta from './../img/insta.png';
import facebook from './../img/facebook.png';
import twitter from './../img/twitter.png';
import vk from './../img/vk.png';
// eslint-disable-next-line require-jsdoc
function Footer() {
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.support}>
        <p className={styleFooter.copyRight}>
          © 2022 TasksSolver (taskssolver.com, taskssolver.kz)
        </p>
        <a href="https://github.com/">
          <p className={styleFooter.rules}>Правила сервиса</p>
        </a>
      </div>
      <div className={styleFooter.socialNetworks}>
        <a className={styleFooter.links} href="https://www.instagram.com/">
          <img
            className={`${styleFooter.logo} ${styleFooter.insta}`}
            src={insta}
          />{' '}
        </a>
        <a className={styleFooter.links} href="https://www.facebook.com/">
          <img
            className={`${styleFooter.logo} ${styleFooter.facebook}`}
            src={facebook}
          />
        </a>
        <a className={styleFooter.links} href="https://twitter.com/">
          <img
            className={`${styleFooter.logo} ${styleFooter.twitter}`}
            src={twitter}
          />
        </a>
        <a className={styleFooter.links} href="https://vk.com/">
          <img className={`${styleFooter.logo} ${styleFooter.vk}`} src={vk} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
