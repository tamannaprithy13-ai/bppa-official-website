export type LocalizedText = { en: string; bn: string };

export const text = (en: string, bn: string): LocalizedText => ({ en, bn });

export const navigation = [
  { to: "/" as const, label: text("Home", "হোম") },
  { to: "/about" as const, label: text("About BPPA", "বিপিপিএ সম্পর্কে") },
  { to: "/para-pickleball" as const, label: text("Para Pickleball", "প্যারা পিকলবল") },
  { to: "/athletes" as const, label: text("Athletes", "অ্যাথলেট") },
  { to: "/events" as const, label: text("Events", "ইভেন্ট") },
  { to: "/news-media" as const, label: text("News & Media", "সংবাদ ও মিডিয়া") },
  { to: "/contact" as const, label: text("Contact", "যোগাযোগ") },
];

export const programs = [
  {
    number: "01",
    title: text("Discover the sport", "খেলাটি জানুন"),
    body: text("Introductory sessions designed to welcome new players and explain adaptive formats.", "নতুন খেলোয়াড়দের স্বাগত জানাতে এবং অভিযোজিত ধরন বোঝাতে পরিচিতিমূলক সেশন।"),
  },
  {
    number: "02",
    title: text("Develop athletes", "অ্যাথলেট উন্নয়ন"),
    body: text("A proposed pathway from community participation to structured training and competition.", "কমিউনিটি অংশগ্রহণ থেকে কাঠামোবদ্ধ প্রশিক্ষণ ও প্রতিযোগিতার প্রস্তাবিত পথ।"),
  },
  {
    number: "03",
    title: text("Build capacity", "সক্ষমতা বৃদ্ধি"),
    body: text("Future education opportunities for coaches, officials, volunteers, and event organizers.", "কোচ, কর্মকর্তা, স্বেচ্ছাসেবক ও আয়োজকদের জন্য ভবিষ্যৎ শিক্ষা কার্যক্রম।"),
  },
];

export const events = [
  { date: text("Date to be confirmed", "তারিখ নিশ্চিত হবে"), title: text("National Introduction Camp", "জাতীয় পরিচিতিমূলক ক্যাম্প"), place: text("Venue to be confirmed · Bangladesh", "ভেন্যু নিশ্চিত হবে · বাংলাদেশ"), type: text("Demo event", "ডেমো ইভেন্ট") },
  { date: text("Date to be confirmed", "তারিখ নিশ্চিত হবে"), title: text("Community Open Day", "কমিউনিটি ওপেন ডে"), place: text("Location to be confirmed", "স্থান নিশ্চিত হবে"), type: text("Demo event", "ডেমো ইভেন্ট") },
  { date: text("Date to be confirmed", "তারিখ নিশ্চিত হবে"), title: text("Coach & Volunteer Workshop", "কোচ ও স্বেচ্ছাসেবক কর্মশালা"), place: text("Location to be confirmed", "স্থান নিশ্চিত হবে"), type: text("Proposed program", "প্রস্তাবিত কার্যক্রম") },
];

export const news = [
  { category: text("Association update", "অ্যাসোসিয়েশন আপডেট"), title: text("BPPA begins development of its national para pickleball platform", "জাতীয় প্যারা পিকলবল প্ল্যাটফর্ম গঠনের কাজ শুরু করেছে বিপিপিএ"), excerpt: text("A draft announcement area for verified association updates and development milestones.", "যাচাইকৃত অ্যাসোসিয়েশন আপডেট ও উন্নয়ন মাইলফলকের জন্য খসড়া সংবাদ স্থান।") },
  { category: text("Get involved", "যুক্ত হোন"), title: text("Register interest in future participation opportunities", "ভবিষ্যৎ অংশগ্রহণের সুযোগে আগ্রহ নিবন্ধন করুন"), excerpt: text("This sample story will be replaced when an official participation process is confirmed.", "আনুষ্ঠানিক অংশগ্রহণ প্রক্রিয়া নিশ্চিত হলে এই নমুনা সংবাদটি প্রতিস্থাপিত হবে।") },
  { category: text("Media", "মিডিয়া"), title: text("Media resources are being prepared", "মিডিয়া রিসোর্স প্রস্তুত করা হচ্ছে"), excerpt: text("Approved photos, factsheets, and press information will be published here in a future phase.", "অনুমোদিত ছবি, তথ্যপত্র ও প্রেস তথ্য ভবিষ্যৎ পর্যায়ে এখানে প্রকাশিত হবে।") },
];

export const athletes = [
  { name: text("Athlete profile coming soon", "অ্যাথলেট প্রোফাইল শীঘ্রই"), discipline: text("Official details pending", "আনুষ্ঠানিক তথ্য অপেক্ষমাণ") },
  { name: text("Athlete profile coming soon", "অ্যাথলেট প্রোফাইল শীঘ্রই"), discipline: text("Official details pending", "আনুষ্ঠানিক তথ্য অপেক্ষমাণ") },
  { name: text("Athlete profile coming soon", "অ্যাথলেট প্রোফাইল শীঘ্রই"), discipline: text("Official details pending", "আনুষ্ঠানিক তথ্য অপেক্ষমাণ") },
];