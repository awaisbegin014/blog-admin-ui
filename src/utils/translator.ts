// Google Translate API integration
const API_KEY = ''; // Replace with your actual API key

interface TranslationResponse {
  data: {
    translations: Array<{
      translatedText: string;
    }>;
  };
}

class PageTranslator {
  private originalTexts = new Map<Element, string>();
  private originalAttributes = new Map<Element, Map<string, string>>();
  private isTranslating = false;
  
  // Names and terms that should not be translated
  private preservedTerms = [
    'Yellow Solutions',
    'Alex Morgan',
    'Sophia Chen', 
    'Marcus Williams',
    'Leila Patel',
    'David Miller',
    'Sarah Johnson',
    'Michael Chang',
    'TechVision Inc.',
    'Innovate Partners',
    'GlobalConnect',
    'CEO',
    'CTO',
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS',
    'Google',
    'Microsoft',
    'API',
    'UI/UX',
    'HTML',
    'CSS',
    'SQL'
  ];

  async translateText(text: string, targetLang: string): Promise<string> {
    // Check if API key is not configured or is a placeholder
    if (!API_KEY || 
        API_KEY === 'YOUR_GOOGLE_TRANSLATE_API_KEY' || 
        API_KEY.startsWith('YOUR_') ||
        API_KEY.length < 20) {
      console.warn('Google Translate API key not configured. Using mock translation.');
      return this.mockTranslate(text, targetLang);
    }

    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            q: text,
            target: targetLang,
            format: 'text'
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Translation API error: ${response.status}`);
      }

      const data: TranslationResponse = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return this.mockTranslate(text, targetLang);
    }
  }

  private shouldPreserveText(text: string): boolean {
    // Check if text contains any preserved terms
    return this.preservedTerms.some(term => 
      text.includes(term) || text.toLowerCase().includes(term.toLowerCase())
    );
  }

  private mockTranslate(text: string, targetLang: string): string {
  if (targetLang === 'en') return text;

  const mockTranslations: Record<string, string> = {

    // Navbar
    'Yellow Solutions': 'Yellow Solutions',
    'Home': 'Heim',
    'Services': 'Leistungen',
    'About': 'Über',
    'Portfolio': 'Portfolio',
    'Team': 'Team',
    'Careers': 'Karriere',
    'Contact': 'Kontakt',
    'Get Started': 'Loslegen',

    // Hero section
    'Transforming Ideas into': 'Ideen in digitale',
    'Digital Reality': 'Realität umsetzen',
    'We craft innovative software solutions that empower businesses to thrive in the digital age, delivering exceptional experiences through cutting-edge technology.':
      'Wir entwickeln innovative Softwarelösungen, die Unternehmen dabei unterstützen, im digitalen Zeitalter erfolgreich zu sein und durch Spitzentechnologie außergewöhnliche Erlebnisse zu bieten.',

    'Explore Services': 'Dienstleistungen erkunden',
    
    // Services section
    'Our': 'Unsere',
    'Services -': 'Dienstleistungen',
    'Redefining': 'Grenzenlose',
    'impact': 'Wirkung',
    'innovation': 'Innovation',
    'excellence': 'Exzellenz',
    'success': 'Erfolg',
    'growth': 'Wachstum',
    'future': 'Zukunft',
    'progress': 'Fortschritt',
    'across the globe': 'auf der ganzen Welt',

    'Custom Software Development': 'Kundenspezifische Softwareentwicklung',
    'We build tailor-made software solutions that address your unique business challenges with modern technology stacks.':
      'Wir entwickeln maßgeschneiderte Softwarelösungen, die Ihre individuellen geschäftlichen Herausforderungen mit modernen Technologie-Stacks bewältigen.',

    'Web Application Development': 'Entwicklung von Webanwendungen',
    'Create stunning, high-performance web applications that deliver exceptional user experiences across all devices.':
      'Erstellen Sie beeindruckende, leistungsstarke Webanwendungen, die auf allen Geräten ein außergewöhnliches Benutzererlebnis bieten.',

    'Mobile App Development': 'Entwicklung mobiler Apps',
    'Native and cross-platform mobile applications that engage users and elevate your brand on iOS and Android.':
      'Native und plattformübergreifende mobile Anwendungen, die Benutzer einbinden und Ihre Marke auf iOS und Android aufwerten.',

    'UX/UI Design': 'UX/UI-Design',
    'Human-centered design solutions that combine aesthetics with functionality to create intuitive digital experiences.':
      'Menschzentrierte Designlösungen, die Ästhetik mit Funktionalität kombinieren, um intuitive digitale Erlebnisse zu schaffen.',

    'Cloud Services': 'Cloud-Dienste',
    'Scalable, secure cloud infrastructure and migration services optimized for performance and cost-efficiency.':
      'Skalierbare, sichere Cloud-Infrastruktur und Migrationsdienste, optimiert auf Leistung und Kosteneffizienz.',

    'Data Analytics & AI': 'Datenanalyse und KI',
    'Transform your raw data into actionable insights with our advanced analytics and machine learning solutions.':
      'Verwandeln Sie Ihre Rohdaten mit unseren erweiterten Analyse- und Machine-Learning-Lösungen in umsetzbare Erkenntnisse.',

    'Cybersecurity': 'Cybersicherheit',
    'Protect your digital assets with comprehensive security assessments, implementation, and monitoring services.':
      'Schützen Sie Ihre digitalen Assets mit umfassenden Sicherheitsbewertungen, Implementierungs- und Überwachungsdiensten.',

    'IT Consulting': 'IT-Beratung',
    'Strategic technology consulting to guide your digital transformation journey with expert advice and roadmaps.':
      'Strategische Technologieberatung, die Sie auf Ihrem Weg zur digitalen Transformation mit Expertenratschlägen und Roadmaps begleitet.',

    // About section headings
    'Crafting Digital Excellence Since': 'Digitale Exzellenz seit',
    'At Yellow Solutions, we combine technical expertise with creative problem-solving to deliver software solutions that exceed expectations. Our team of experienced developers, designers, and strategists work collaboratively to transform complex challenges into elegant digital experiences.':
      'Bei Yellow Solutions kombinieren wir technisches Know-how mit kreativer Problemlösung, um Softwarelösungen zu liefern, die Erwartungen übertreffen. Unser Team aus erfahrenen Entwicklern, Designern und Strategen arbeitet zusammen, um komplexe Herausforderungen in elegante digitale Erlebnisse zu verwandeln.',

    'We believe in building long-term partnerships with our clients, focusing on sustainable growth and continuous innovation. Our commitment to quality and attention to detail ensures that every solution we deliver is robust, scalable, and future-proof.':
      'Wir setzen auf langfristige Partnerschaften mit unseren Kunden und legen dabei Wert auf nachhaltiges Wachstum und kontinuierliche Innovation. Unser Engagement für Qualität und unsere Liebe zum Detail gewährleisten, dass jede unserer Lösungen robust, skalierbar und zukunftssicher ist.',

    'Agile methodology for adaptable project management': 'Agile Methodik für anpassungsfähiges Projektmanagement',
    'User-centered design approach for intuitive experiences': 'Benutzerzentrierter Designansatz für intuitive Erlebnisse',
    'Continuous integration and deployment practices': 'Kontinuierliche Integrations- und Bereitstellungsverfahren',
    'Rigorous testing and quality assurance protocols': 'Strenge Test- und Qualitätssicherungsprotokolle',
    'Ongoing maintenance and support services': 'Laufende Wartungs- und Supportleistungen',
    'Transparent communication throughout the process': 'Transparente Kommunikation während des gesamten Prozesses',
    'Start Your Project': 'Starten Sie Ihr Projekt',

    // Portfolio section headings
    'Our Portfolio': 'Unser Portfolio',
    'Explore our successful projects and digital solutions': 'Entdecken Sie unsere erfolgreichen Projekte und digitalen Lösungen',
    'All': 'Alle',
    'Web Development': 'Webentwicklung',
    'Custom Software': 'Kundenspezifische Software',
    'Mobile App': 'Mobile App',
    'Data Analytics': 'Datenanalyse',
    'View Project': 'Projekt ansehen',

    // Portfolio project titles and descriptions
    'E-Commerce Platform': 'E-Commerce-Plattform',
    'A comprehensive e-commerce solution with advanced analytics and inventory management.':
      'Eine umfassende E-Commerce-Lösung mit erweiterten Analysen und Bestandsverwaltung.',

    'Healthcare Management System': 'Gesundheitsmanagementsystem',
    'Digital transformation solution for healthcare providers with patient management and telemedicine features.':
      'Digitale Transformationslösung für Gesundheitsdienstleister mit Patientenverwaltung und Telemedizin-Funktionen.',

    'Financial Trading App': 'Finanzhandels-App',
    'Real-time trading platform with advanced charting and portfolio management capabilities.':
      'Echtzeit-Handelsplattform mit erweiterten Chart- und Portfolio-Management-Funktionen.',

    'Smart City Dashboard': 'Smart City Dashboard',
    'IoT-powered dashboard for city management with real-time data visualization and analytics.':
      'IoT-gestütztes Dashboard für Stadtverwaltung mit Echtzeit-Datenvisualisierung und Analysen.',

    'Learning Management System': 'Lernmanagementsystem',
    'Comprehensive educational platform with interactive courses and progress tracking.':
      'Umfassende Bildungsplattform mit interaktiven Kursen und Fortschrittsverfolgung.',

    'Cloud Migration Solution': 'Cloud-Migrationslösung',
    'Enterprise cloud migration with zero downtime and enhanced security protocols.':
      'Unternehmens-Cloud-Migration mit null Ausfallzeit und erweiterten Sicherheitsprotokollen.',

    // Team section headings
    'Our Team': 'Unser Team',
    'Meet the talented people behind our successful projects': 'Lernen Sie die talentierten Menschen hinter unseren erfolgreichen Projekten kennen',

    // Team member names (preserved as they are proper names)
    'Alex Morgan': 'Alex Morgan',
    'Sophia Chen': 'Sophia Chen',
    'Marcus Williams': 'Marcus Williams',
    'Leila Patel': 'Leila Patel',

    'CEO & Founder': 'CEO & Gründer',
    'Visionary leader with 15+ years in software development and business strategy.':
      'Visionärer Leiter mit über 15 Jahren Erfahrung in Softwareentwicklung und Geschäftsstrategie.',

    'CTO': 'Technischer Leiter',
    'Tech innovator specializing in cloud architecture and emerging technologies.':
      'Technischer Innovator, spezialisiert auf Cloud-Architektur und neue Technologien.',

    'Design Director': 'Designdirektor',
    'Award-winning designer with a passion for creating meaningful digital experiences.':
      'Preisgekrönter Designer mit einer Leidenschaft für die Schaffung bedeutungsvoller digitaler Erlebnisse.',

    'Lead Developer': 'Leitender Entwickler',
    'Full-stack expert who turns complex problems into elegant code solutions.':
      'Full-Stack-Experte, der komplexe Probleme in elegante Codelösungen umwandelt.',

    // Testimonials headings
    'Client': 'Kunden',
    'Testimonials': 'Referenzen',
    'What our clients say about our software solutions and services': 'Was unsere Kunden über unsere Softwarelösungen und Dienstleistungen sagen',

    // Testimonial names (preserved as they are proper names)
    'David Miller': 'David Miller',
    'Sarah Johnson': 'Sarah Johnson',
    'Michael Chang': 'Michael Chang',

    '"Yellow Solutions transformed our business with their custom software solution. Their team delivered beyond our expectations and continued to provide exceptional support."':
      '„Yellow Solutions hat unser Unternehmen mit seiner maßgeschneiderten Softwarelösung revolutioniert. Ihr Team hat unsere Erwartungen übertroffen und uns weiterhin hervorragend unterstützt."',

    '"Working with Yellow Solutions was a game-changer for our company. Their expertise in cloud migration saved us time and resources while improving our overall performance."':
      '„Die Zusammenarbeit mit Yellow Solutions war für unser Unternehmen von entscheidender Bedeutung. Ihre Expertise in der Cloud-Migration hat uns Zeit und Ressourcen gespart und gleichzeitig unsere Gesamtleistung verbessert."',

    '"The team at Yellow Solutions delivered our mobile app on time and within budget. Their attention to detail and user experience expertise resulted in an app our customers love."':
      '„Das Team von Yellow Solutions hat unsere mobile App pünktlich und im Rahmen des Budgets geliefert. Ihre Liebe zum Detail und ihr Fachwissen im Bereich Benutzerfreundlichkeit haben zu einer App geführt, die unsere Kunden lieben."',

    // Contact headings
    'Get in': 'Kontakt',
    'Touch': 'aufnehmen',
    "Ready to start your next project? We'd love to hear from you!":
      'Bereit für Ihr nächstes Projekt? Wir freuen uns auf Ihre Nachricht!',

    'Contact Information': 'Kontaktinformationen',
    'Email': 'E-Mail',
    'Phone': 'Telefon',
    'Address': 'Adresse',
    'Business Hours': 'Geschäftszeiten',
    'Monday - Friday: 9:00 AM - 6:00 PM': 'Montag - Freitag: 9:00 - 18:00 Uhr',
    'Saturday - Sunday: Closed': 'Samstag - Sonntag: Geschlossen',
    'Your Name': 'Ihr Name',
    'Your Email': 'Ihre E-Mail',
    'Subject': 'Thema',
    'Message': 'Nachricht',
    'Send Message': 'Nachricht senden',

    // Footer headings
    'Transforming ideas into powerful software solutions. Your trusted partner in digital innovation.':
      'Wir verwandeln Ideen in leistungsstarke Softwarelösungen. Ihr zuverlässiger Partner für digitale Innovationen.',
    'Quick Links': 'Direktlinks',
    'Our Services': 'Unsere Dienste',
    'Newsletter': 'Newsletter',
    'Subscribe to our newsletter for the latest updates and insights.':
      'Abonnieren Sie unseren Newsletter für die neuesten Updates und Einblicke.',
    'Your email': 'Ihre E-Mail',
    'Subscribe': 'Abonnieren',
    'All rights reserved.': 'Alle Rechte vorbehalten.',
    'Privacy Policy': 'Datenschutzrichtlinie',
    'Terms of Service': 'Servicebedingungen',

    // Blog headings
    'Latest': 'Neueste',
    'Stay updated with our latest thoughts on technology and innovation': 'Bleiben Sie auf dem Laufenden mit unseren neuesten Gedanken zu Technologie und Innovation',

    // Careers Page headings
    'Join the Team at': 'Treten Sie dem Team bei',
    "At Yellow Solutions, we're building the future—one line of code at a time. As a forward-thinking software house, we combine cutting-edge technologies, creative problem-solving, and a passion for innovation to deliver exceptional digital solutions. But behind every successful product is a team of talented individuals who make it all possible.":
      'Bei Yellow Solutions gestalten wir die Zukunft – Codezeile für Codezeile. Als zukunftsorientiertes Softwarehaus kombinieren wir modernste Technologien, kreative Problemlösungen und Innovationsfreude, um außergewöhnliche digitale Lösungen zu liefern. Hinter jedem erfolgreichen Produkt steht ein Team talentierter Menschen, die es möglich machen.',

    'Current Openings': 'Aktuelle Stellenangebote',
    'Sales – Cold Calling (Night Shift: 9 PM – 5 AM)': 'Vertrieb – Kaltakquise (Nachtschicht: 21:00 – 05:00 Uhr)',
    'Apply Now': 'Jetzt bewerben',
    'Full Name': 'Vollständiger Name',
    'Email Address': 'E-Mail-Adresse',
    'Contact Number': 'Kontaktnummer',
    'Position': 'Position',
    'Select a position': 'Wählen Sie eine Position',
    'Years of Experience': 'Jahrelange Erfahrung',
    'CV/Resume Drive Link*': 'Link zum Lebenslauf-Laufwerk*',
    'Please upload your resume to Google Drive (make sure the file is accessible via a public or shared link) and paste the link here.':
      'Bitte laden Sie Ihren Lebenslauf auf Google Drive hoch (stellen Sie sicher, dass die Datei über einen öffentlichen oder freigegebenen Link zugänglich ist) und fügen Sie den Link hier ein.',
    'Submit Application': 'Bewerbung einreichen',

  };
  // Try exact match first
  if (mockTranslations[text]) {
    return mockTranslations[text];
  }

  // Partial match replacement fallback
  let translated = text;
  for (const [key, val] of Object.entries(mockTranslations).sort((a, b) => b[0].length - a[0].length)) {
    translated = translated.replace(new RegExp(key, 'g'), val);
  }

  return translated;
}


  async translatePage(targetLang: string): Promise<void> {
    if (this.isTranslating) return;
    this.isTranslating = true;

    try {
      document.body.classList.add('translating');

      // Get all elements that contain text
      const elementsToTranslate = document.querySelectorAll('*');
      
      for (const element of elementsToTranslate) {
        // Skip certain elements
        const tagName = element.tagName.toLowerCase();
        if (['script', 'style', 'noscript', 'meta', 'title', 'svg', 'path'].includes(tagName)) {
          continue;
        }

        // Handle elements with direct text content (no child elements with text)
        if (element.children.length === 0 || this.hasOnlyTextContent(element)) {
          const textContent = element.textContent?.trim();
          if (textContent && textContent.length > 1) {
            
            // Save original if not saved
            if (!this.originalTexts.has(element)) {
              this.originalTexts.set(element, textContent);
            }

            if (targetLang === 'en') {
              // Restore original
              const original = this.originalTexts.get(element);
              if (original && element.textContent !== original) {
                element.textContent = original;
              }
            } else {
              // Translate
              const original = this.originalTexts.get(element) || textContent;
              const translated = await this.translateText(original, targetLang);
              if (element.textContent !== translated) {
                element.textContent = translated;
              }
            }
          }
        }
      }

      // Translate attributes
      await this.translateAttributes(targetLang);

    } catch (error) {
      console.error('Page translation error:', error);
    } finally {
      this.isTranslating = false;
      document.body.classList.remove('translating');
    }
  }

  private hasOnlyTextContent(element: Element): boolean {
    // Check if element has only text nodes or elements that don't contain text
    for (const child of element.children) {
      const childText = child.textContent?.trim();
      if (childText && childText.length > 0) {
        return false;
      }
    }
    return true;
  }

  private async translateAttributes(targetLang: string): Promise<void> {
    // Translate placeholder texts
    const inputElements = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    for (const input of inputElements) {
      const placeholder = input.getAttribute('placeholder');
      if (placeholder) {
        if (!this.originalAttributes.has(input)) {
          this.originalAttributes.set(input, new Map([['placeholder', placeholder]]));
        }

        if (targetLang === 'en') {
          const originalPlaceholder = this.originalAttributes.get(input)?.get('placeholder');
          if (originalPlaceholder) {
            input.setAttribute('placeholder', originalPlaceholder);
          }
        } else {
          const originalPlaceholder = this.originalAttributes.get(input)?.get('placeholder') || placeholder;
          const translatedPlaceholder = await this.translateText(originalPlaceholder, targetLang);
          input.setAttribute('placeholder', translatedPlaceholder);
        }
      }
    }

    // Translate alt texts
    const imgElements = document.querySelectorAll('img[alt]');
    for (const img of imgElements) {
      const alt = img.getAttribute('alt');
      if (alt) {
        if (!this.originalAttributes.has(img)) {
          this.originalAttributes.set(img, new Map([['alt', alt]]));
        }

        if (targetLang === 'en') {
          const originalAlt = this.originalAttributes.get(img)?.get('alt');
          if (originalAlt) {
            img.setAttribute('alt', originalAlt);
          }
        } else {
          const originalAlt = this.originalAttributes.get(img)?.get('alt') || alt;
          const translatedAlt = await this.translateText(originalAlt, targetLang);
          img.setAttribute('alt', translatedAlt);
        }
      }
    }

    // Translate aria-label attributes
    const ariaElements = document.querySelectorAll('[aria-label]');
    for (const element of ariaElements) {
      const ariaLabel = element.getAttribute('aria-label');
      if (ariaLabel) {
        if (!this.originalAttributes.has(element)) {
          this.originalAttributes.set(element, new Map([['aria-label', ariaLabel]]));
        }

        if (targetLang === 'en') {
          const originalAriaLabel = this.originalAttributes.get(element)?.get('aria-label');
          if (originalAriaLabel) {
            element.setAttribute('aria-label', originalAriaLabel);
          }
        } else {
          const originalAriaLabel = this.originalAttributes.get(element)?.get('aria-label') || ariaLabel;
          const translatedAriaLabel = await this.translateText(originalAriaLabel, targetLang);
          element.setAttribute('aria-label', translatedAriaLabel);
        }
      }
    }
  }
}

// Create global instance
const translator = new PageTranslator();

// Make translatePage available globally
declare global {
  interface Window {
    translatePage: (targetLang: string) => Promise<void>;
  }
}

window.translatePage = (targetLang: string) => translator.translatePage(targetLang);

export default translator;