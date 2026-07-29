'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type LanguageCode = 'EN' | 'FR' | 'DE' | 'JA';

export const LANGUAGES: { code: LanguageCode; label: string; flag: string; locale: string }[] = [
  { code: 'EN', label: 'English', flag: '🇬🇧', locale: 'en' },
  { code: 'FR', label: 'Français', flag: '🇫🇷', locale: 'fr' },
  { code: 'DE', label: 'Deutsch', flag: '🇩🇪', locale: 'de' },
  { code: 'JA', label: '日本語', flag: '🇯🇵', locale: 'ja' },
];

const messages = {
  EN: {
    'nav.home': 'Home', 'nav.packages': 'Packages', 'nav.destinations': 'Destinations',
    'nav.experiences': 'Experiences', 'nav.hotels': 'Hotels', 'nav.shop': 'Shop',
    'nav.about': 'About', 'nav.contact': 'Contact', 'nav.plan': 'Plan My Trip',
    'nav.menu': 'Open menu', 'nav.close': 'Close menu', 'nav.language': 'Language',
    'footer.inspiration': 'Travel Inspiration, Monthly', 'footer.destinations': 'Destinations',
    'footer.services': 'Services', 'footer.contact': 'Contact Us', 'footer.join': 'Join',
    'footer.emailPlaceholder': 'your@email.com', 'footer.success': "You're on the list — thank you.",
    'footer.faq': 'Frequently Asked Questions', 'footer.rights': 'All rights reserved.',
    'shop.eyebrow': 'Carry the island with you', 'shop.title': 'The Paradise Shop',
    'shop.subtitle': 'Thoughtful apparel, keepsakes and travel essentials inspired by the colours and craft of Sri Lanka.',
    'shop.location': 'Designed in Sri Lanka', 'shop.curated': 'Curated collection',
    'shop.all': 'All', 'shop.items': 'items', 'shop.meaning': 'Made with meaning',
    'shop.paradise': 'A little piece of paradise',
    'shop.story': 'Our collection celebrates relaxed island living and the hands that make each piece special. Orders are personally confirmed through WhatsApp before payment and delivery.',
    'product.back': 'Back to shop', 'product.quantity': 'Quantity', 'product.option': 'Size / Option',
    'product.customerTitle': 'Customer & delivery details',
    'product.customerHint': 'Complete all required fields to enable your WhatsApp order.',
    'product.name': 'Full name', 'product.phone': 'Phone number', 'product.address': 'Delivery address',
    'product.city': 'City / Region', 'product.country': 'Country', 'product.notes': 'Order notes (optional)',
    'product.total': 'Order total', 'product.purchase': 'Purchase via WhatsApp',
    'product.disabled': 'Add your customer and delivery details to continue.',
    'product.confirmed': 'Personally confirmed order', 'product.delivery': 'Delivery arranged on WhatsApp',
  },
  FR: {
    'nav.home': 'Accueil', 'nav.packages': 'Circuits', 'nav.destinations': 'Destinations',
    'nav.experiences': 'Expériences', 'nav.hotels': 'Hôtels', 'nav.shop': 'Boutique',
    'nav.about': 'À propos', 'nav.contact': 'Contact', 'nav.plan': 'Planifier mon voyage',
    'nav.menu': 'Ouvrir le menu', 'nav.close': 'Fermer le menu', 'nav.language': 'Langue',
    'footer.inspiration': 'Inspiration voyage, chaque mois', 'footer.destinations': 'Destinations',
    'footer.services': 'Services', 'footer.contact': 'Nous contacter', 'footer.join': "S'inscrire",
    'footer.emailPlaceholder': 'votre@email.com', 'footer.success': 'Merci, votre inscription est confirmée.',
    'footer.faq': 'Questions fréquentes', 'footer.rights': 'Tous droits réservés.',
    'shop.eyebrow': "Emportez l'île avec vous", 'shop.title': 'La Boutique Paradise',
    'shop.subtitle': "Vêtements, souvenirs et essentiels de voyage inspirés des couleurs et de l'artisanat du Sri Lanka.",
    'shop.location': 'Conçu au Sri Lanka', 'shop.curated': 'Collection sélectionnée',
    'shop.all': 'Tout', 'shop.items': 'articles', 'shop.meaning': 'Créé avec du sens',
    'shop.paradise': 'Un petit morceau de paradis',
    'shop.story': "Notre collection célèbre la douceur de vivre insulaire et le savoir-faire de chaque artisan. Les commandes sont confirmées personnellement via WhatsApp avant paiement et livraison.",
    'product.back': 'Retour à la boutique', 'product.quantity': 'Quantité', 'product.option': 'Taille / Option',
    'product.customerTitle': 'Coordonnées client et livraison',
    'product.customerHint': 'Remplissez tous les champs obligatoires pour activer votre commande WhatsApp.',
    'product.name': 'Nom complet', 'product.phone': 'Numéro de téléphone', 'product.address': 'Adresse de livraison',
    'product.city': 'Ville / Région', 'product.country': 'Pays', 'product.notes': 'Notes de commande (facultatif)',
    'product.total': 'Total de la commande', 'product.purchase': 'Commander via WhatsApp',
    'product.disabled': 'Ajoutez vos coordonnées et votre adresse de livraison pour continuer.',
    'product.confirmed': 'Commande confirmée personnellement', 'product.delivery': 'Livraison organisée sur WhatsApp',
  },
  DE: {
    'nav.home': 'Startseite', 'nav.packages': 'Reisepakete', 'nav.destinations': 'Reiseziele',
    'nav.experiences': 'Erlebnisse', 'nav.hotels': 'Hotels', 'nav.shop': 'Shop',
    'nav.about': 'Über uns', 'nav.contact': 'Kontakt', 'nav.plan': 'Reise planen',
    'nav.menu': 'Menü öffnen', 'nav.close': 'Menü schließen', 'nav.language': 'Sprache',
    'footer.inspiration': 'Reiseinspiration, monatlich', 'footer.destinations': 'Reiseziele',
    'footer.services': 'Leistungen', 'footer.contact': 'Kontakt', 'footer.join': 'Anmelden',
    'footer.emailPlaceholder': 'ihre@email.com', 'footer.success': 'Vielen Dank – Sie sind angemeldet.',
    'footer.faq': 'Häufig gestellte Fragen', 'footer.rights': 'Alle Rechte vorbehalten.',
    'shop.eyebrow': 'Nehmen Sie die Insel mit', 'shop.title': 'Der Paradise Shop',
    'shop.subtitle': 'Sorgfältig ausgewählte Kleidung, Erinnerungsstücke und Reiseaccessoires, inspiriert von Sri Lanka.',
    'shop.location': 'Entworfen in Sri Lanka', 'shop.curated': 'Ausgewählte Kollektion',
    'shop.all': 'Alle', 'shop.items': 'Artikel', 'shop.meaning': 'Mit Bedeutung gefertigt',
    'shop.paradise': 'Ein kleines Stück Paradies',
    'shop.story': 'Unsere Kollektion feiert das entspannte Inselleben und die Menschen hinter jedem Stück. Bestellungen werden vor Zahlung und Lieferung persönlich über WhatsApp bestätigt.',
    'product.back': 'Zurück zum Shop', 'product.quantity': 'Menge', 'product.option': 'Größe / Option',
    'product.customerTitle': 'Kunden- und Lieferdaten',
    'product.customerHint': 'Füllen Sie alle Pflichtfelder aus, um Ihre WhatsApp-Bestellung zu aktivieren.',
    'product.name': 'Vollständiger Name', 'product.phone': 'Telefonnummer', 'product.address': 'Lieferadresse',
    'product.city': 'Stadt / Region', 'product.country': 'Land', 'product.notes': 'Bestellhinweise (optional)',
    'product.total': 'Bestellsumme', 'product.purchase': 'Über WhatsApp bestellen',
    'product.disabled': 'Geben Sie Ihre Kunden- und Lieferdaten ein, um fortzufahren.',
    'product.confirmed': 'Persönlich bestätigte Bestellung', 'product.delivery': 'Lieferung über WhatsApp vereinbart',
  },
  JA: {
    'nav.home': 'ホーム', 'nav.packages': 'ツアー', 'nav.destinations': '目的地',
    'nav.experiences': '体験', 'nav.hotels': 'ホテル', 'nav.shop': 'ショップ',
    'nav.about': '私たちについて', 'nav.contact': 'お問い合わせ', 'nav.plan': '旅行を計画',
    'nav.menu': 'メニューを開く', 'nav.close': 'メニューを閉じる', 'nav.language': '言語',
    'footer.inspiration': '毎月の旅のインスピレーション', 'footer.destinations': '目的地',
    'footer.services': 'サービス', 'footer.contact': 'お問い合わせ', 'footer.join': '登録',
    'footer.emailPlaceholder': 'your@email.com', 'footer.success': 'ご登録ありがとうございます。',
    'footer.faq': 'よくある質問', 'footer.rights': '無断転載を禁じます。',
    'shop.eyebrow': '島の思い出をいつもそばに', 'shop.title': 'パラダイスショップ',
    'shop.subtitle': 'スリランカの色彩と手仕事から生まれた、衣類、記念品、旅のアイテム。',
    'shop.location': 'スリランカでデザイン', 'shop.curated': '厳選コレクション',
    'shop.all': 'すべて', 'shop.items': '点', 'shop.meaning': '想いを込めたものづくり',
    'shop.paradise': '小さな楽園をお手元に',
    'shop.story': '穏やかな島の暮らしと職人の手仕事を讃えるコレクションです。お支払い・配送前にWhatsAppでご注文内容を確認いたします。',
    'product.back': 'ショップに戻る', 'product.quantity': '数量', 'product.option': 'サイズ / オプション',
    'product.customerTitle': 'お客様・配送情報',
    'product.customerHint': '必須項目を入力するとWhatsApp注文が有効になります。',
    'product.name': 'お名前', 'product.phone': '電話番号', 'product.address': '配送先住所',
    'product.city': '市区町村 / 地域', 'product.country': '国', 'product.notes': '注文メモ（任意）',
    'product.total': '注文合計', 'product.purchase': 'WhatsAppで注文',
    'product.disabled': 'お客様情報と配送情報を入力してください。',
    'product.confirmed': '担当者が注文を確認', 'product.delivery': '配送はWhatsAppで調整',
  },
} as const;

type MessageKey = keyof typeof messages.EN;
type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: MessageKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('EN');

  useEffect(() => {
    const saved = window.localStorage.getItem('magical-paradise-language') as LanguageCode | null;
    if (saved && LANGUAGES.some((item) => item.code === saved)) setLanguageState(saved);
  }, []);

  const setLanguage = (next: LanguageCode) => {
    setLanguageState(next);
    window.localStorage.setItem('magical-paradise-language', next);
  };

  useEffect(() => {
    document.documentElement.lang = LANGUAGES.find((item) => item.code === language)?.locale ?? 'en';
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key: MessageKey) => messages[language][key] ?? messages.EN[key],
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
