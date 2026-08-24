import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site";

export default function Home(){return <>
 <section className="hero"><Image src="https://www.dakar-opava.cz/storage/01JKBA7QR23KVPH3NA4J9N2Y62.webp" alt="Nákladní vozidlo Dakar Opava na cestě" fill priority sizes="100vw"/><div className="heroShade"/><div className="wrap heroContent"><p className="eyebrow light">Doprava · logistika · spedice</p><h1>Bezpečně vezeme<br/>vaše podnikání dál.</h1><p className="heroLead">Od jedné palety po kompletní kamion. Vlastní zázemí, zkušený tým a služby propojené od nakládky až po doručení.</p><div className="heroActions"><Link className="button" href="/poptavka">Nezávazná poptávka</Link><Link className="button ghost" href="/sluzby">Prohlédnout služby</Link></div></div></section>
 <section className="stats"><div className="wrap statsGrid"><div><strong>1994</strong><span>rok založení</span></div><div><strong>Evropa</strong><span>oblast přepravy</span></div><div><strong>NON-STOP</strong><span>dispečink</span></div><div><strong>GPS</strong><span>monitoring vozidel</span></div></div></section>
 <section className="section wrap"><div className="sectionHead"><div><p className="eyebrow">Co pro vás zajistíme</p><h2>Jeden partner. Tři navazující služby.</h2></div><p>Praktické řešení pro výrobní firmy, dodavatele i jednotlivé zákazníky v Moravskoslezském kraji a po celé Evropě.</p></div><div className="serviceGrid">{services.map((s,i)=><article className="serviceCard" key={s.slug}><div className="cardImage"><Image src={s.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw"/></div><div className="cardBody"><span>0{i+1}</span><h3>{s.title}</h3><p>{s.short}</p><Link href={`/sluzby/${s.slug}`}>Zjistit více →</Link></div></article>)}</div></section>
 <section className="split section"><div className="splitImage"><Image src="https://www.dakar-opava.cz/storage/01JN10FE6HN8C8CG2T149J01H9.webp" alt="Areál společnosti Dakar Opava" fill sizes="50vw"/></div><div className="splitContent"><p className="eyebrow">Rodinná firma od roku 1994</p><h2>Stabilní zázemí pro bezpečné doručení</h2><p>Rosteme společně s našimi partnery, sledujeme vývoj v dopravě a logistice a užitečné změny převádíme do každodenní praxe.</p><p>Ze sídla v Rohově mezi Opavou a Ostravou zajišťujeme dopravu, skladování a pneuservis s důrazem na spolehlivost a osobní přístup.</p><Link className="textLink" href="/o-spolecnosti">Poznat náš příběh →</Link></div></section>
 <div className="wrap"><CTA/></div>
 </>}

