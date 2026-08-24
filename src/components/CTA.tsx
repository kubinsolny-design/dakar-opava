import Link from "next/link";
import { site } from "@/lib/site";
export function CTA({title="Potřebujete spolehlivé řešení?",text="Popište nám svou přepravu, skladování nebo servis. Ozveme se s dalším postupem."}:{title?:string,text?:string}){return <section className="cta"><div><p className="eyebrow light">Jsme připraveni pomoci</p><h2>{title}</h2><p>{text}</p></div><div className="ctaActions"><Link className="button white" href="/poptavka">Odeslat poptávku</Link><a className="textLink light" href={site.phoneHref}>Volat {site.phone} →</a></div></section>}

