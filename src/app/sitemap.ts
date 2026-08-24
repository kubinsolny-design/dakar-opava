import type {MetadataRoute} from "next"; import {site,services} from "@/lib/site"; export default function sitemap():MetadataRoute.Sitemap{const paths=["","/sluzby","/o-spolecnosti","/kontakt","/poptavka",...services.map(s=>`/sluzby/${s.slug}`)];return paths.map((p,i)=>({url:`${site.baseUrl}${p}`,lastModified:new Date(),changeFrequency:i===0?"weekly":"monthly",priority:i===0?1:.8}))}

