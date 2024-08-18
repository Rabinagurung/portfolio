import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo';
import Link from 'next/link';

const Footer = ({ currentTheme }) => {
  return (
    <div
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext
      }}>
      <div className={styles.footertable}>
        <Link passHref href='/'>
          <h2 className={styles.footerlogo}>{userinfo.logoText}</h2>
        </Link>
        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials
            ? userinfo.socials.map((social, key) => {
                return (
                  <Link passHref href={social.link} key={key}>
                    <li>{social.type}</li>
                  </Link>
                );
              })
            : null}
          <Link
            passHref
            href={`mailto:${
              userinfo.contact.email ? userinfo.contact.email : ''
            }`}>
            <li>Mail</li>
          </Link>
        </ul>
        <ul>
          <li className={styles.listHeading}>Pages</li>
          <Link passHref href='/'>
            <li>Home</li>
          </Link>
          <Link passHref href='/#about'>
            <li>About</li>
          </Link>

          <Link passHref href='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <hr
        style={{
          height: '1px',
          backgroundColor: currentTheme.subtext,
          border: 'none',
          opacity: '0.5'
        }}></hr>
      <h2 className={styles.footercontent}>
        &copy; {new Date().getFullYear()} {userinfo.logoText}. All Rights
        Reserved.
      </h2>
    </div>
  );
};

export default Footer;
