// Yayınlanan alan adı. Canlıya alırken NEXT_PUBLIC_SITE_URL ortam değişkenini
// (ör. https://kampuscep.com) tanımlayın; tanımlı değilse yerel adres kullanılır.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const SITE_NAME = "KampüsCep";

export const sitePaths = [
  "/",
  "/ozellikler",
  "/sinavlar",
  "/hakkimizda",
  "/indir",
  "/destek",
  "/iletisim",
  "/abonelik",
  "/iade-politikasi",
  "/gizlilik",
  "/gizlilik-tercihleri",
  "/kullanim-kosullari",
  "/kvkk",
  "/cerez-politikasi",
  "/veri-silme",
] as const;
