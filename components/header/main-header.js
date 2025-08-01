import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
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
              <Link href="/meals">Browse Meals</Link>
              <Link href="/community">Meals Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
