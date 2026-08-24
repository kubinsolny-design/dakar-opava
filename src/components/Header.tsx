"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [["/", "Domů"], ["/sluzby", "Služby"], ["/o-spolecnosti", "O společnosti"], ["/kontakt", "Kontakt"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <header className="siteHeader">
    <div className="topline"><div className="wrap topInner"><span>For safe delivery</span><a href={site.phoneHref}>Dispečink NON-STOP: {site.phone}</a></div></div>
    <div className="wrap navRow">
      <Link href="/" className="brand" aria-label="Dakar Opava – domů"><Image src="https://www.dakar-opava.cz/storage/01JKBCWVH75ADK20J0VYCKB2K2.png" alt="Dakar Opava" width={210} height={72} priority /></Link>
      <button className="menuButton" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span/><span/><span/><b>Menu</b></button>
      <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Hlavní navigace">
        {nav.map(([href,label]) => <Link key={href} href={href} className={path === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/poptavka" className="button small" onClick={() => setOpen(false)}>Nezávazná poptávka</Link>
      </nav>
    </div>
  </header>;
}

