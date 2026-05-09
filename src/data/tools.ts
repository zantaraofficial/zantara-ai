export interface Tool {
  logo: string;
  name: string;
  cat: string;
  pricing: string;
  rating: string;
  rank: number;
  badge: string;
  link: string;
  desc: string;
  pros?: string;
}

export const toolsData: Record<string, Tool> = {
  // AI Chatbots
  chatgpt: { logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128", name: "ChatGPT", cat: "AI Chatbot", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 1, badge: "popular", link: "https://chatgpt.com", desc: "AI chatbot multifungsi untuk menjawab pertanyaan, membantu coding, membuat artikel, hingga meningkatkan produktivitas.", pros: "Coding, Creative Writing, General Reasoning" },
  claude: { logo: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128", name: "Claude", cat: "AI Chatbot", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 2, badge: "hot", link: "https://claude.ai", desc: "AI assistant unggul dalam membaca dokumen panjang, analisis teks, merangkum PDF, dan penulisan profesional.", pros: "Long Documents, Natural Nuance, Large Context" },
  deepseek: { logo: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128", name: "DeepSeek", cat: "AI Chatbot", pricing: "Free", rating: "⭐ 4.6", rank: 3, badge: "", link: "https://www.deepseek.com", desc: "AI chatbot dan coding assistant dengan performa cepat dan efisien." },
  gemini: { logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128", name: "Gemini", cat: "AI Chatbot", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 4, badge: "", link: "https://gemini.google.com", desc: "AI dari Google untuk pencarian, penulisan, riset, dan integrasi Google Workspace." },
  grok: { logo: "https://www.google.com/s2/favicons?domain=x.ai&sz=128", name: "Grok", cat: "AI Chatbot", pricing: "Paid", rating: "⭐ 4.5", rank: 5, badge: "", link: "https://grok.x.ai", desc: "AI chatbot dari xAI yang terintegrasi dengan platform X." },
  meta_ai: { logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128", name: "Meta AI", cat: "AI Chatbot", pricing: "Free", rating: "⭐ 4.5", rank: 6, badge: "", link: "https://www.meta.ai", desc: "AI assistant dari Meta untuk chat dan generasi konten." },
  ms_copilot: { logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128", name: "Microsoft Copilot", cat: "AI Chatbot", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 7, badge: "", link: "https://copilot.microsoft.com", desc: "AI assistant Microsoft untuk Office, coding, dan browsing." },
  perplexity: { logo: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128", name: "Perplexity", cat: "AI Chatbot", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 8, badge: "", link: "https://www.perplexity.ai", desc: "AI search engine dengan jawaban berbasis sumber internet real-time." },

  // AI Image Generation
  firefly: { logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128", name: "Adobe Firefly", cat: "AI Image Generator", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 9, badge: "", link: "https://firefly.adobe.com", desc: "Membuat gambar AI dan editing visual berbasis Adobe." },
  dalle: { logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128", name: "DALL-E", cat: "AI Image Generator", pricing: "Paid", rating: "⭐ 4.7", rank: 10, badge: "", link: "https://openai.com/dall-e", desc: "AI pembuat gambar dari teks (text-to-image)." },
  flux: { logo: "https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=128", name: "FLUX.1", cat: "AI Image Generator", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 11, badge: "hot", link: "https://blackforestlabs.ai", desc: "Model AI image generation berkualitas tinggi." },
  ideogram: { logo: "https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128", name: "Ideogram", cat: "AI Image Generator", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 12, badge: "", link: "https://ideogram.ai", desc: "AI image generator dengan kemampuan membuat teks akurat pada gambar." },
  midjourney: { logo: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128", name: "Midjourney", cat: "AI Image Generator", pricing: "Paid", rating: "⭐ 4.9", rank: 13, badge: "popular", link: "https://www.midjourney.com", desc: "AI untuk membuat artwork dan ilustrasi realistis.", pros: "Artistic Quality, Lighting, Detail" },
  recraft: { logo: "https://www.google.com/s2/favicons?domain=recraft.ai&sz=128", name: "Recraft", cat: "AI Image Generator", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 14, badge: "", link: "https://www.recraft.ai", desc: "AI design tool untuk logo, icon, dan ilustrasi." },
  stable_diffusion: { logo: "https://www.google.com/s2/favicons?domain=stability.ai&sz=128", name: "Stability AI", cat: "AI Image Generator", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 15, badge: "", link: "https://stability.ai", desc: "Model open-source AI image generation." },

  // AI Writing
  copy_ai: { logo: "https://www.google.com/s2/favicons?domain=copy.ai&sz=128", name: "Copy.ai", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 16, badge: "", link: "https://www.copy.ai", desc: "Membuat copywriting, caption, dan konten marketing otomatis." },
  grammarly: { logo: "https://www.google.com/s2/favicons?domain=grammarly.com&sz=128", name: "Grammarly", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 17, badge: "popular", link: "https://www.grammarly.com", desc: "Koreksi grammar dan peningkatan kualitas tulisan." },
  jasper: { logo: "https://www.google.com/s2/favicons?domain=jasper.ai&sz=128", name: "Jasper", cat: "AI Writing", pricing: "Paid", rating: "⭐ 4.8", rank: 18, badge: "", link: "https://www.jasper.ai", desc: "AI content writer untuk blog dan marketing." },
  jotbot: { logo: "https://www.google.com/s2/favicons?domain=jotbot.ai&sz=128", name: "JotBot", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 19, badge: "", link: "https://jotbot.ai", desc: "AI writing assistant untuk catatan dan penulisan cepat." },
  quarkle: { logo: "https://www.google.com/s2/favicons?domain=quarkle.ai&sz=128", name: "Quarkle", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.5", rank: 20, badge: "", link: "https://quarkle.ai", desc: "AI writing dan ide generation tool." },
  quillbot: { logo: "https://www.google.com/s2/favicons?domain=quillbot.com&sz=128", name: "QuillBot", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 21, badge: "", link: "https://quillbot.com", desc: "Alat parafrase dan rewrite teks otomatis." },
  rytr: { logo: "https://www.google.com/s2/favicons?domain=rytr.me&sz=128", name: "Rytr", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 22, badge: "", link: "https://rytr.me", desc: "AI writing tool ringan untuk berbagai kebutuhan konten." },
  sudowrite: { logo: "https://www.google.com/s2/favicons?domain=sudowrite.com&sz=128", name: "Sudowrite", cat: "AI Writing", pricing: "Paid", rating: "⭐ 4.7", rank: 23, badge: "", link: "https://sudowrite.com", desc: "AI penulisan kreatif untuk cerita dan novel." },
  writesonic: { logo: "https://www.google.com/s2/favicons?domain=writesonic.com&sz=128", name: "Writesonic", cat: "AI Writing", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 24, badge: "", link: "https://writesonic.com", desc: "AI content generator untuk SEO dan artikel." },

  // AI Presentation
  beautiful_ai: { logo: "https://www.google.com/s2/favicons?domain=beautiful.ai&sz=128", name: "Beautiful.ai", cat: "AI Presentation", pricing: "Paid", rating: "⭐ 4.7", rank: 25, badge: "", link: "https://www.beautiful.ai", desc: "Membuat presentasi otomatis dengan desain profesional." },
  gamma: { logo: "https://www.google.com/s2/favicons?domain=gamma.app&sz=128", name: "Gamma", cat: "AI Presentation", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 26, badge: "hot", link: "https://gamma.app", desc: "AI presentation dan dokumen interaktif modern." },
  pitch: { logo: "https://www.google.com/s2/favicons?domain=pitch.com&sz=128", name: "Pitch", cat: "AI Presentation", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 27, badge: "", link: "https://pitch.com", desc: "Platform presentasi kolaboratif berbasis AI." },
  plus_ai: { logo: "https://www.google.com/s2/favicons?domain=plusdocs.com&sz=128", name: "Plus AI", cat: "AI Presentation", pricing: "Paid", rating: "⭐ 4.6", rank: 28, badge: "", link: "https://www.plusdocs.com", desc: "AI pembuat slide untuk Google Slides dan PowerPoint." },
  popai: { logo: "https://www.google.com/s2/favicons?domain=popai.pro&sz=128", name: "PopAI", cat: "AI Presentation", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 29, badge: "", link: "https://www.popai.pro", desc: "AI presentation dan chatbot untuk produktivitas." },
  presentation_ai: { logo: "https://www.google.com/s2/favicons?domain=presentation.ai&sz=128", name: "Presentation.AI", cat: "AI Presentation", pricing: "Paid", rating: "⭐ 4.5", rank: 30, badge: "", link: "https://www.presentation.ai", desc: "Membuat presentasi otomatis dari prompt." },
  slidesgo: { logo: "https://www.google.com/s2/favicons?domain=slidesgo.com&sz=128", name: "Slidesgo", cat: "AI Presentation", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 31, badge: "", link: "https://slidesgo.com", desc: "Template presentasi siap pakai dengan bantuan AI." },
  tome: { logo: "https://www.google.com/s2/favicons?domain=tome.app&sz=128", name: "Tome", cat: "AI Presentation", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 32, badge: "", link: "https://tome.app", desc: "AI storytelling dan presentasi visual." },

  // AI Spreadsheet
  bricks: { logo: "https://www.google.com/s2/favicons?domain=bricks.ai&sz=128", name: "Bricks", cat: "AI Spreadsheet", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 33, badge: "", link: "https://www.bricks.ai", desc: "Spreadsheet AI untuk analisis data otomatis." },
  formulabot: { logo: "https://www.google.com/s2/favicons?domain=formulabot.com&sz=128", name: "Formula Bot", cat: "AI Spreadsheet", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 34, badge: "", link: "https://formulabot.com", desc: "Membantu membuat formula spreadsheet otomatis." },
  gigasheet: { logo: "https://www.google.com/s2/favicons?domain=gigasheet.com&sz=128", name: "Gigasheet", cat: "AI Spreadsheet", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 35, badge: "", link: "https://www.gigasheet.com", desc: "Mengolah data besar tanpa coding." },
  rows: { logo: "https://www.google.com/s2/favicons?domain=rows.com&sz=128", name: "Rows", cat: "AI Spreadsheet", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 36, badge: "hot", link: "https://rows.com", desc: "Spreadsheet modern dengan integrasi AI." },
  sheetai: { logo: "https://www.google.com/s2/favicons?domain=sheetai.app&sz=128", name: "SheetAI", cat: "AI Spreadsheet", pricing: "Free / Paid", rating: "⭐ 4.5", rank: 37, badge: "", link: "https://www.sheetai.app", desc: "Integrasi AI langsung ke Google Sheets." },

  // AI Scheduling
  calendly: { logo: "https://www.google.com/s2/favicons?domain=calendly.com&sz=128", name: "Calendly", cat: "AI Scheduling", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 38, badge: "popular", link: "https://calendly.com", desc: "Penjadwalan meeting otomatis." },
  clockwise: { logo: "https://www.google.com/s2/favicons?domain=getclockwise.com&sz=128", name: "Clockwise", cat: "AI Scheduling", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 39, badge: "", link: "https://www.getclockwise.com", desc: "Optimasi jadwal kerja dan meeting dengan AI." },
  motion: { logo: "https://www.google.com/s2/favicons?domain=usemotion.com&sz=128", name: "Motion", cat: "AI Scheduling", pricing: "Paid", rating: "⭐ 4.8", rank: 40, badge: "hot", link: "https://www.usemotion.com", desc: "AI task manager dan penjadwalan otomatis." },
  reclaim_ai: { logo: "https://www.google.com/s2/favicons?domain=reclaim.ai&sz=128", name: "Reclaim AI", cat: "AI Scheduling", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 41, badge: "", link: "https://reclaim.ai", desc: "Mengatur kalender dan produktivitas otomatis." },
  taskade: { logo: "https://www.google.com/s2/favicons?domain=taskade.com&sz=128", name: "Taskade", cat: "AI Scheduling", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 42, badge: "", link: "https://www.taskade.com", desc: "Kolaborasi tim, task management, dan AI workflow." },
  trevor_ai: { logo: "https://www.google.com/s2/favicons?domain=trevorai.com&sz=128", name: "Trevor AI", cat: "AI Scheduling", pricing: "Free / Paid", rating: "⭐ 4.5", rank: 43, badge: "", link: "https://trevorai.com", desc: "AI planner untuk manajemen tugas harian." },

  // AI Knowledge Management
  mem: { logo: "https://www.google.com/s2/favicons?domain=mem.ai&sz=128", name: "Mem", cat: "AI Knowledge", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 44, badge: "", link: "https://mem.ai", desc: "AI note-taking dan knowledge management." },
  notion: { logo: "https://www.google.com/s2/favicons?domain=notion.so&sz=128", name: "Notion", cat: "AI Knowledge", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 45, badge: "popular", link: "https://www.notion.so", desc: "Workspace digital untuk catatan, database, dokumentasi, dan kolaborasi tim.", pros: "Organization, Notes, Teamwork" },
  tettra: { logo: "https://www.google.com/s2/favicons?domain=tettra.com&sz=128", name: "Tettra", cat: "AI Knowledge", pricing: "Paid", rating: "⭐ 4.7", rank: 46, badge: "", link: "https://tettra.com", desc: "Knowledge base untuk dokumentasi tim." },

  // AI Coding
  askcodi: { logo: "https://www.google.com/s2/favicons?domain=askcodi.com&sz=128", name: "AskCodi", cat: "AI Coding", pricing: "Free / Paid", rating: "⭐ 4.5", rank: 47, badge: "", link: "https://www.askcodi.com", desc: "AI coding assistant untuk membuat kode otomatis dan debugging." },
  codiga: { logo: "https://www.google.com/s2/favicons?domain=codiga.io&sz=128", name: "Codiga", cat: "AI Coding", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 48, badge: "", link: "https://www.codiga.io", desc: "Analisis kualitas kode dan coding assistant." },
  cursor: { logo: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128", name: "Cursor", cat: "AI Coding", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 49, badge: "popular", link: "https://cursor.com", desc: "Editor coding modern berbasis VS Code dengan fitur AI bawaan.", pros: "AI Editor, Speed, Smart Autocomplete" },
  github_copilot: { logo: "https://www.google.com/s2/favicons?domain=github.com&sz=128", name: "GitHub Copilot", cat: "AI Coding", pricing: "Paid", rating: "⭐ 4.9", rank: 50, badge: "popular", link: "https://github.com/features/copilot", desc: "Asisten coding AI dari GitHub dengan autocomplete real-time." },
  qodo: { logo: "https://www.google.com/s2/favicons?domain=qodo.ai&sz=128", name: "Qodo", cat: "AI Coding", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 51, badge: "", link: "https://www.qodo.ai", desc: "AI coding dan testing assistant." },
  replit: { logo: "https://www.google.com/s2/favicons?domain=replit.com&sz=128", name: "Replit", cat: "AI Coding", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 52, badge: "", link: "https://replit.com", desc: "Online IDE dengan fitur AI coding." },
  tabnine: { logo: "https://www.google.com/s2/favicons?domain=tabnine.com&sz=128", name: "Tabnine", cat: "AI Coding", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 53, badge: "", link: "https://www.tabnine.com", desc: "AI autocomplete untuk coding." },

  // AI Meeting Notes
  avoma: { logo: "https://www.google.com/s2/favicons?domain=avoma.com&sz=128", name: "Avoma", cat: "AI Meeting", pricing: "Paid", rating: "⭐ 4.7", rank: 54, badge: "", link: "https://www.avoma.com", desc: "AI meeting assistant dan rangkuman meeting." },
  equal_time: { logo: "https://www.google.com/s2/favicons?domain=equaltime.io&sz=128", name: "Equal Time", cat: "AI Meeting", pricing: "Free / Paid", rating: "⭐ 4.5", rank: 55, badge: "", link: "https://www.equaltime.io", desc: "Analisis distribusi waktu bicara dalam meeting." },
  fathom: { logo: "https://www.google.com/s2/favicons?domain=fathom.video&sz=128", name: "Fathom", cat: "AI Meeting", pricing: "Free", rating: "⭐ 4.8", rank: 56, badge: "", link: "https://fathom.video", desc: "Rekam dan ringkas meeting otomatis secara gratis." },
  fellow: { logo: "https://www.google.com/s2/favicons?domain=fellow.app&sz=128", name: "Fellow", cat: "AI Meeting", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 57, badge: "", link: "https://fellow.app", desc: "Meeting management dan AI notes." },
  fireflies: { logo: "https://www.google.com/s2/favicons?domain=fireflies.ai&sz=128", name: "Fireflies.ai", cat: "AI Meeting", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 58, badge: "hot", link: "https://fireflies.ai", desc: "Transkripsi meeting otomatis berbasis AI." },
  krisp: { logo: "https://www.google.com/s2/favicons?domain=krisp.ai&sz=128", name: "Krisp", cat: "AI Meeting", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 59, badge: "", link: "https://krisp.ai", desc: "Penghilang noise dan AI meeting assistant." },
  otter: { logo: "https://www.google.com/s2/favicons?domain=otter.ai&sz=128", name: "Otter.ai", cat: "AI Meeting", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 60, badge: "", link: "https://otter.ai", desc: "AI transcription dan meeting notes." },

  // AI Video
  descript: { logo: "https://www.google.com/s2/favicons?domain=descript.com&sz=128", name: "Descript", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 61, badge: "", link: "https://www.descript.com", desc: "Editing video dan audio berbasis teks." },
  haiper: { logo: "https://www.google.com/s2/favicons?domain=haiper.ai&sz=128", name: "Haiper AI", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 62, badge: "", link: "https://haiper.ai", desc: "AI video generator dari teks dan gambar." },
  invideo: { logo: "https://www.google.com/s2/favicons?domain=invideo.io&sz=128", name: "InVideo AI", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 63, badge: "", link: "https://invideo.io", desc: "Membuat video otomatis dengan AI." },
  kling: { logo: "https://www.google.com/s2/favicons?domain=klingai.com&sz=128", name: "Kling AI", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 64, badge: "hot", link: "https://klingai.com", desc: "AI video generation realistis." },
  krea: { logo: "https://www.google.com/s2/favicons?domain=krea.ai&sz=128", name: "Krea AI", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 65, badge: "hot", link: "https://www.krea.ai", desc: "AI visual dan video generation real-time." },
  ltx_studio: { logo: "https://www.google.com/s2/favicons?domain=ltx.studio&sz=128", name: "LTX Studio", cat: "AI Video", pricing: "Paid", rating: "⭐ 4.7", rank: 66, badge: "", link: "https://ltx.studio", desc: "AI filmmaking dan storyboard creator." },
  luma: { logo: "https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128", name: "Luma AI", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 67, badge: "hot", link: "https://lumalabs.ai", desc: "AI video dan 3D generation." },
  pika: { logo: "https://www.google.com/s2/favicons?domain=pika.art&sz=128", name: "Pika AI", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 68, badge: "", link: "https://pika.art", desc: "AI video animation dan generation." },
  runway: { logo: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128", name: "Runway", cat: "AI Video", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 69, badge: "popular", link: "https://runwayml.com", desc: "Platform AI untuk editing video profesional dan text-to-video." },
  sora: { logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128", name: "Sora", cat: "AI Video", pricing: "N/A", rating: "⭐ 5.0", rank: 70, badge: "coming", link: "https://openai.com/sora", desc: "AI text-to-video revolusioner dari OpenAI." },

  // AI Email Assistance
  clippit: { logo: "https://www.google.com/s2/favicons?domain=clippit.ai&sz=128", name: "Clippit.ai", cat: "AI Email", pricing: "Free / Paid", rating: "⭐ 4.5", rank: 71, badge: "", link: "https://clippit.ai", desc: "AI email dan productivity assistant." },
  friday: { logo: "https://www.google.com/s2/favicons?domain=friday.ai&sz=128", name: "Friday", cat: "AI Email", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 72, badge: "", link: "https://friday.ai", desc: "Produktivitas dan AI task assistant." },
  mailmaestro: { logo: "https://www.google.com/s2/favicons?domain=maestro.com&sz=128", name: "MailMaestro", cat: "AI Email", pricing: "Paid", rating: "⭐ 4.7", rank: 73, badge: "", link: "https://www.maestro.com", desc: "AI email writer untuk Gmail dan Outlook." },
  shortwave: { logo: "https://www.google.com/s2/favicons?domain=shortwave.com&sz=128", name: "Shortwave", cat: "AI Email", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 74, badge: "", link: "https://www.shortwave.com", desc: "Email client modern dengan AI." },
  superhuman: { logo: "https://www.google.com/s2/favicons?domain=superhuman.com&sz=128", name: "Superhuman", cat: "AI Email", pricing: "Paid", rating: "⭐ 4.9", rank: 75, badge: "hot", link: "https://superhuman.com", desc: "Email client super cepat dengan fitur AI." },

  // AI Automation
  integrately: { logo: "https://www.google.com/s2/favicons?domain=integrately.com&sz=128", name: "Integrately", cat: "AI Automation", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 76, badge: "", link: "https://integrately.com", desc: "Automasi workflow tanpa coding." },
  make: { logo: "https://www.google.com/s2/favicons?domain=make.com&sz=128", name: "Make", cat: "AI Automation", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 77, badge: "", link: "https://www.make.com", desc: "Platform visual automation untuk integrasi aplikasi." },
  monday: { logo: "https://www.google.com/s2/favicons?domain=monday.com&sz=128", name: "Monday.com", cat: "AI Automation", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 78, badge: "", link: "https://monday.com", desc: "Project management dengan automasi AI." },
  n8n: { logo: "https://www.google.com/s2/favicons?domain=n8n.io&sz=128", name: "n8n", cat: "AI Automation", pricing: "Free", rating: "⭐ 4.7", rank: 79, badge: "", link: "https://n8n.io", desc: "Workflow automation open-source." },
  wrike: { logo: "https://www.google.com/s2/favicons?domain=wrike.com&sz=128", name: "Wrike", cat: "AI Automation", pricing: "Paid", rating: "⭐ 4.6", rank: 80, badge: "", link: "https://www.wrike.com", desc: "Project management dan kolaborasi tim." },
  zapier: { logo: "https://www.google.com/s2/favicons?domain=zapier.com&sz=128", name: "Zapier", cat: "AI Automation", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 81, badge: "popular", link: "https://zapier.com", desc: "Platform automation populer untuk menghubungkan ribuan aplikasi." },

  // AI Design
  autodraw: { logo: "https://www.google.com/s2/favicons?domain=autodraw.com&sz=128", name: "AutoDraw", cat: "AI Design", pricing: "Free", rating: "⭐ 4.5", rank: 82, badge: "", link: "https://www.autodraw.com", desc: "Mengubah sketsa menjadi ilustrasi otomatis." },
  canva: { logo: "https://www.google.com/s2/favicons?domain=canva.com&sz=128", name: "Canva", cat: "AI Design", pricing: "Free / Paid", rating: "⭐ 4.9", rank: 83, badge: "popular", link: "https://www.canva.com", desc: "Platform desain grafis online dengan fitur AI." },
  design_com: { logo: "https://www.google.com/s2/favicons?domain=design.com&sz=128", name: "Design.com", cat: "AI Design", pricing: "Paid", rating: "⭐ 4.6", rank: 84, badge: "", link: "https://www.design.com", desc: "Pembuatan logo dan branding otomatis." },
  framer: { logo: "https://www.google.com/s2/favicons?domain=framer.com&sz=128", name: "Framer", cat: "AI Design", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 85, badge: "hot", link: "https://www.framer.com", desc: "Tool desain website, UI/UX, dan prototyping berbasis AI." },
  ms_designer: { logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128", name: "Microsoft Designer", cat: "AI Design", pricing: "Free", rating: "⭐ 4.7", rank: 86, badge: "", link: "https://designer.microsoft.com", desc: "AI design tool dari Microsoft untuk membuat desain visual otomatis." },
  uizard: { logo: "https://www.google.com/s2/favicons?domain=uizard.io&sz=128", name: "Uizard", cat: "AI Design", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 87, badge: "", link: "https://uizard.io", desc: "AI UI/UX design tool untuk wireframe dan mockup." },

  // AI Data Viz
  deckpilot: { logo: "https://www.google.com/s2/favicons?domain=deckpilot.io&sz=128", name: "Deckpilot", cat: "AI Data Viz", pricing: "Paid", rating: "⭐ 4.6", rank: 88, badge: "", link: "https://deckpilot.io", desc: "AI untuk membuat dashboard dan visualisasi data otomatis." },
  flourish: { logo: "https://www.google.com/s2/favicons?domain=flourish.studio&sz=128", name: "Flourish", cat: "AI Data Viz", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 89, badge: "", link: "https://flourish.studio", desc: "Visualisasi data interaktif dan presentasi chart modern." },
  julius: { logo: "https://www.google.com/s2/favicons?domain=julius.ai&sz=128", name: "Julius AI", cat: "AI Data Viz", pricing: "Free / Paid", rating: "⭐ 4.8", rank: 90, badge: "hot", link: "https://julius.ai", desc: "AI analyst untuk analisis dan visualisasi data." },
  visme: { logo: "https://www.google.com/s2/favicons?domain=visme.co&sz=128", name: "Visme", cat: "AI Data Viz", pricing: "Free / Paid", rating: "⭐ 4.7", rank: 91, badge: "", link: "https://www.visme.co", desc: "Tool desain presentasi, infografis, dan visualisasi data." },
  zing_data: { logo: "https://www.getzingdata.com/favicon.ico", name: "Zing Data", cat: "AI Data Viz", pricing: "Free / Paid", rating: "⭐ 4.6", rank: 92, badge: "", link: "https://www.getzingdata.com", desc: "Mobile AI analytics dan visualisasi data." },
};
