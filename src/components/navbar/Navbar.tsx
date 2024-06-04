"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
type Props = {};

export default function Navbar({}: Props) {
  const routes = [
    {
      name: "Home",
      path: "/",
      icon: "home",
    },
    {
      name: "Likes",
      path: "/likes",
      icon: "heart",
    },
  ];
  const pathName = usePathname();
  const isRouteSelected = (routePath: string) => {
    return pathName === routePath;
  }
  return (
    <nav className={styles.nav}>
        <h1>Noon Social</h1>
      <ul >
        {routes.map((route) => (
          <li key={route.path} className="">
            <Link href={route.path}>
              <Image
                src={`/icons/${route.icon}-${isRouteSelected(route.path) ? "bold" : "linear"}.svg`}
                alt="navbar-icon"
                width={26}
                height={26}
              />
              <span>{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
