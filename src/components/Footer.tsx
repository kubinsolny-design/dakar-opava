import Link from "next/link";
import { services, site } from "@/lib/site";
export function Footer(){return <footer><div className="wrap footerGrid"><div><div className="footerBrand">DAKAR <span>OPAVA</span></div><p>Doprava, logistika a pneuservis mezi Opavou a Ostravou. Rodinná firma od roku 1994.</p></div><div><h2>Služby</h2>{services.map(s=><Link key={s.slug} href={`/sluzby/${s.slug}`}>{s.title}</Link>)}</div><div><h2>Kontakt</h2><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.address}<br/>Po–Pá 7:00–16:00</p></div></div><div className="wrap copyright"><span>© {new Date().getFullYear()} Dakar Opava</span><Link href="/poptavka">Poptat přepravu či služby</Link></div></footer>}

