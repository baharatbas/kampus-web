export const supportNavItems = [
  { href: "/destek", label: "Destek Merkezi" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/abonelik", label: "Abonelik" },
  { href: "/iade-politikasi", label: "İade Politikası" },
  { href: "/gizlilik", label: "Gizlilik" },
  { href: "/veri-silme", label: "Hesap / Veri Silme" },
] as const;

export const supportCategories = [
  {
    id: "sik-karsilasilan",
    title: "Sık karşılaşılan sorunlar",
    description:
      "En çok aranan konular için kısa yönlendirmeler bu alanda toplanacak.",
  },
  {
    id: "hesap-giris",
    title: "Hesap ve giriş sorunları",
    description:
      "Oturum açma, hesap erişimi ve cihaz değişimi adımları için içerik alanı.",
  },
  {
    id: "uygulama-kullanimi",
    title: "Uygulama kullanımı",
    description:
      "Soru çözümü, içerikler ve çalışma akışıyla ilgili yardım metinleri için alan.",
  },
  {
    id: "premium",
    title: "Premium / abonelik",
    description: "Planlar, yenileme ve Premium erişimi hakkında bilgi alanı.",
    href: "/abonelik",
  },
  {
    id: "odeme",
    title: "Ödeme sorunları",
    description:
      "Satın alma ve ücretlendirme sorularının yer alacağı yönlendirme alanı.",
  },
  {
    id: "teknik",
    title: "Teknik sorunlar",
    description:
      "Uygulama performansı, güncelleme ve cihaz uyumu için içerik alanı.",
  },
  {
    id: "bildirim-ayarlar",
    title: "Bildirim ve hesap ayarları",
    description:
      "Bildirim tercihleri ve hesap ayarlarıyla ilgili açıklamalar için alan.",
  },
  {
    id: "gizlilik-veri",
    title: "Gizlilik ve veri işlemleri",
    description: "Veri işleme ve gizlilik konularına yönlendirme alanı.",
    href: "/gizlilik",
  },
  {
    id: "hesap-silme",
    title: "Hesap silme",
    description: "Hesap ve veri silme talebi için ayrı süreç sayfasına gider.",
    href: "/veri-silme",
  },
  {
    id: "iletisim",
    title: "İletişime geçme",
    description: "Destek ekibine ulaşmak için iletişim formuna yönlendirir.",
    href: "/iletisim",
  },
] as const;

export const contactTopics = [
  {
    id: "teknik",
    title: "Teknik Destek",
    description: "Uygulama, cihaz veya performans konularını bu kanaldan iletebilirsiniz.",
  },
  {
    id: "hesap",
    title: "Hesap Problemleri",
    description: "Giriş, hesap erişimi ve profil ile ilgili talepler için alan.",
  },
  {
    id: "premium",
    title: "Premium / Abonelik",
    description: "Planlar ve abonelik yönetimi soruları için içerik alanı.",
  },
  {
    id: "odeme",
    title: "Ödeme",
    description: "Satın alma ve ücretlendirme konularının toplanacağı alan.",
  },
  {
    id: "gizlilik",
    title: "Gizlilik ve Veri",
    description: "Gizlilik ve veri işlemleriyle ilgili talepler için alan.",
  },
  {
    id: "is-birligi",
    title: "İş Birliği",
    description: "Kurumsal ve iş birliği görüşmeleri için ayrılmış iletişim konusu.",
  },
] as const;

export type PricingPlan = {
  id: string;
  name: string;
  cadence: string;
  price: string;
  monthlyEquivalent?: string;
  saving?: string;
  badge?: string;
  note: string;
  featured?: boolean;
};

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "weekly",
    name: "Haftalık",
    cadence: "Her hafta yenilenir",
    price: "₺29,00",
    note: "Ücretsiz deneme yok, hemen başlar.",
  },
  {
    id: "monthly",
    name: "Aylık",
    cadence: "Her ay yenilenir",
    price: "₺99,00",
    note: "İstediğin zaman iptal edebilirsin.",
  },
  {
    id: "quarterly",
    name: "3 Aylık",
    cadence: "Her 3 ayda bir yenilenir",
    price: "₺249,00",
    monthlyEquivalent: "Aylık eşdeğeri ₺83",
    saving: "Aylığa göre %16 tasarruf",
    badge: "En popüler",
    note: "İstediğin zaman iptal edebilirsin.",
    featured: true,
  },
  {
    id: "yearly",
    name: "Yıllık",
    cadence: "Her yıl yenilenir",
    price: "₺699,00",
    monthlyEquivalent: "Aylık eşdeğeri ₺58,25",
    saving: "Aylığa göre %41 tasarruf",
    note: "İstediğin zaman iptal edebilirsin.",
  },
  {
    id: "lifetime",
    name: "Ömür Boyu",
    cadence: "Tek seferlik ödeme",
    price: "₺999,00",
    badge: "Tek sefer",
    note: "Süresiz erişim. Abonelik değildir, yenilenmez.",
  },
];

export const abonelikFaqs = [
  {
    question: "Premium neleri kapsıyor?",
    answer:
      "Premium, KampüsCep'teki tüm ders ve özelliklere sınırsız erişim sağlar.",
  },
  {
    question: "Abonelik otomatik yenilenir mi?",
    answer:
      "Haftalık, Aylık, 3 Aylık ve Yıllık planlar otomatik yenilenir. Ömür Boyu plan tek seferlik bir ödemedir ve yenilenmez.",
  },
  {
    question: "Aboneliğimi nasıl iptal ederim?",
    answer:
      "Aboneliği satın aldığın mağazadan iptal edebilirsin: App Store'da Ayarlar → Apple Kimliğin → Abonelikler, Google Play'de Play Store → Profil → Ödemeler ve abonelikler → Abonelikler. Aboneliği yenileme tarihinden en az 24 saat önce iptal etmen gerekir.",
  },
  {
    question: "Hesabımı silersem aboneliğim iptal olur mu?",
    answer:
      "Hayır. Hesabı silmek mağazadaki aboneliği kendiliğinden iptal etmez. Ücretlendirilmemek için aboneliği mağazadan ayrıca iptal etmelisin.",
  },
  {
    question: "Telefon değiştirirsem veya uygulamayı silip yeniden yüklersem satın aldığım plan kaybolur mu?",
    answer:
      "Hayır. Uygulamadaki \"Satın alımları geri yükle\" seçeneğiyle, aynı App Store veya Google Play hesabına bağlı satın alımlarını geri yükleyebilirsin.",
  },
  {
    question: "İade almak istiyorum, ne yapmalıyım?",
    answer:
      "Satın alımlar App Store veya Google Play üzerinden yapıldığı için iade talebini ilgili mağazaya iletmen gerekir. Adımlar için İade Politikası sayfasına bakabilirsin.",
  },
];
