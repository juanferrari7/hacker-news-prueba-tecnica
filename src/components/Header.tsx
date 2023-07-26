import { header, link } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
      <img className='' src='./logo.gif' />
      <a className={link} href='/'>
        Hacker News
      </a>
    </nav>
  )
}
