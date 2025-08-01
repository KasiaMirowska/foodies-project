import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <div className={classes.wrapper}>
      {/* <MainHeaderBackground /> */}
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="plate of food" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
