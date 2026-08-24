import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = { title: "O společnosti", description: "Příběh rodinné dopravní společnosti Dakar Opava od roku 1994.", alternates: { canonical: "/o-spolecnosti" } };

const history = [
  { year: "1994", name: "Dakar spedition", fleet: "1 kamion", people: "2 zaměstnanci", note: "Založeno Milanem Gregořicou 4. 11. 1994" },
  { year: "1997", name: "Milan Gregořica – DAKAR", fleet: "2 kamiony", people: "5 zaměstnanců", note: "Stoletá voda, zaplavená firma a změna sídla" },
  { year: "1998", name: "Milan Gregořica – DAKAR", fleet: "4 kamiony", people: "8 zaměstnanců", note: "Další růst vlastního vozového parku" },
  { year: "2000", name: "Milan Gregořica – DAKAR", fleet: "9 kamionů", people: "15 zaměstnanců", note: "Koupě vlastního areálu ve Štěpánkovicích" },
  { year: "2002", name: "DAKAR + Dakar spedition", fleet: "11 kamionů", people: "17 zaměstnanců", note: "Sloučení dopravy a spedice" },
  { year: "2012", name: "DAKAR OPAVA s.r.o.", fleet: "17 kamionů", people: "23 zaměstnanců", note: "Změna firmy z fyzické osoby na s.r.o." },
  { year: "2022", name: "DAKAR OPAVA s.r.o.", fleet: "18 kamionů", people: "25 zaměstnanců", note: "Nový areál a rozšíření o skladování a pneuservis" },
  { year: "2024", name: "DAKAR OPAVA s.r.o.", fleet: "17 kamionů", people: "25 zaměstnanců", note: "30 let od založení firmy" },
];

export default function About() {
  return <>
    <section className="pageHero"><div className="wrap"><p className="eyebrow light">Náš příběh</p><h1>Rodinná firma, která se umí posunout dál.</h1><p>Od jednoho kamionu k propojené dopravě, logistice a pneuservisu.</p></div></section>
    <section className="split section"><div className="splitImage"><Image src="https://www.dakar-opava.cz/storage/01JN10FE6HN8C8CG2T149J01H9.webp" alt="Areál Dakar Opava v Rohově" fill sizes="50vw" /></div><div className="splitContent"><p className="eyebrow">For safe delivery</p><h2>Spolehlivost stojí na lidech a zázemí</h2><p>Naším cílem je zůstat stabilní rodinnou firmou, která dokáže rychle reagovat na potřeby zákazníků a dlouhodobě zlepšovat své služby.</p><p>Z Rohova na hlavním tahu mezi Opavou a polskou Ratiboří obsluhujeme zákazníky v České republice i po celé Evropě.</p></div></section>
    <section className="storySection"><div className="wrap storyHeading"><p className="eyebrow">Od roku 1994</p><h2>Jak se vypráví náš příběh</h2></div><div className="storyScroll"><div className="storyTimeline">
      {history.map((item, index) => <article className={`storyMilestone ${index % 2 ? "above" : "below"}`} key={item.year}><span className="storyYear">{item.year}</span><span className="storyDot" /><div className="storyCard"><h3>{item.name}</h3><strong>{item.fleet}</strong><strong>{item.people}</strong><p>{item.note}</p></div></article>)}
    </div></div></section>
    <div className="wrap"><CTA /></div>
  </>;
}

