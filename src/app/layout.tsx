import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL(site.baseUrl), title:{default:"Dakar Opava | Doprava, logistika a pneuservis",template:"%s | Dakar Opava"},
 description:"Mezinárodní a vnitrostátní doprava, skladování, logistika a pneuservis mezi Opavou a Ostravou.",
 alternates:{canonical:"/"}, openGraph:{title:"Dakar Opava – For safe delivery",description:"Doprava, logistika a pneuservis od roku 1994.",url:"/",siteName:"Dakar Opava",locale:"cs_CZ",type:"website",images:[{url:"/opengraph-image"}]},
 twitter:{card:"summary_large_image",title:"Dakar Opava – For safe delivery",description:"Doprava, logistika a pneuservis od roku 1994.",images:["/opengraph-image"]},
 icons:{icon:"https://www.dakar-opava.cz/storage/01JKBCWVH75ADK20J0VYCKB2K2.png"}
};

export default function RootLayout({children}:{children:React.ReactNode}){const schema={"@context":"https://schema.org","@type":"LocalBusiness",name:site.name,url:site.baseUrl,telephone:"+420602720798",email:site.email,address:{"@type":"PostalAddress",streetAddress:"Opavská 172",addressLocality:"Rohov",postalCode:"747 25",addressCountry:"CZ"},openingHours:"Mo-Fr 07:00-16:00",areaServed:["Česká republika","Evropa"]};return <html lang="cs"><body><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}

