export const site = {
  name: "DAKAR OPAVA s.r.o.",
  short: "Dakar Opava",
  phone: "+420 602 720 798",
  phoneHref: "tel:+420602720798",
  email: "dakar@dakar-opava.cz",
  address: "Opavská 172, 747 25 Rohov",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dakar-opava.vercel.app",
};

export const services = [
  { slug: "doprava", title: "Mezinárodní a vnitrostátní doprava", short: "Od kusových zásilek a palet až po kompletní kamiony po celé ČR a Evropě.", image: "https://www.dakar-opava.cz/storage/01JKB992QS9WFSZ2N98Q8JZ6W4.png" },
  { slug: "skladovani-a-logistika", title: "Skladování a logistika", short: "Vnitřní i venkovní skladové plochy a navazující distribuční logistika.", image: "https://www.dakar-opava.cz/storage/01JKQY52EKXJTW1KGEEPJXBEAJ.png" },
  { slug: "pneuservis", title: "Pneuservis", short: "Kompletní pneuservis osobních i nákladních vozidel včetně uskladnění.", image: "https://www.dakar-opava.cz/storage/01JKQY2T3XP94M3HWA9F3943YV.png" },
] as const;

export const contacts = [
  { group: "Vedení společnosti", name: "Jan Hartmann", role: "Jednatel", phone: "+420 602 720 798", email: "hartmann@dakar-opava.cz" },
  { group: "Doprava a spedice", name: "Jan Tomášek", role: "Dispečer", phone: "+420 727 866 120", email: "dakar@dakar-opava.cz" },
  { group: "Doprava a spedice", name: "Romana Mazuchová", role: "Dispečer", phone: "+420 702 098 226", email: "dakar@dakar-opava.cz" },
  { group: "Sklad", name: "Zdeněk Gregořica", role: "Vedoucí skladu", phone: "+420 724 113 300", email: "sklad@dakar-opava.cz" },
  { group: "Pneuservis", name: "Zdeněk Šoltys", role: "Vedoucí pneuservisu a technik LKW", phone: "+420 602 419 257", email: "technik@dakar-opava.cz" },
  { group: "Fakturace", name: "Danuše Gregořicová", role: "Hlavní účetní", phone: "+420 602 720 798", email: "danuse@dakar-opava.cz" },
  { group: "Fakturace", name: "Jana Šoltysová", role: "Účetní", phone: "+420 553 675 940", email: "fakturace@dakar-opava.cz" },
];

