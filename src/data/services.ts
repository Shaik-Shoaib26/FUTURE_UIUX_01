export interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  whatIsIt: string;
  benefits: string[];
  price: string;
  faq: { q: string; a: string }[];
  process?: { step: number; title: string; desc: string }[];
}

export const SERVICES_DATA: Record<string, ServiceDetailData> = {
  "teeth-cleaning": {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    subtitle: "Professional cleaning to maintain optimal oral hygiene and prevent decay.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    whatIsIt: "Professional teeth cleaning by a certified hygienist removes plaque, tartar, and stains that regular brushing can't handle. It is the most effective way to prevent gum disease and cavities.",
    benefits: [
      "Prevents cavities and tooth decay",
      "Stops tooth loss over time",
      "Brightens your smile by removing stains",
      "Freshens your breath naturally",
      "Boosts your overall body health",
      "Saves money on future complex dental work"
    ],
    price: "From $99 per session",
    faq: [
      { q: "Does teeth cleaning hurt?", a: "No, professional teeth cleaning is generally painless. You might feel some slight vibration and pressure during the scaling process." },
      { q: "How often should I get my teeth cleaned?", a: "We recommend a professional cleaning every six months for most patients, or every 3-4 months if you have a history of gum disease." }
    ],
    process: [
      { step: 1, title: "Exam", desc: "A brief examination of your teeth and gums." },
      { step: 2, title: "Scaling", desc: "Removal of plaque and tartar around the gum line and between teeth." },
      { step: 3, title: "Polishing", desc: "Using a high-powered brush to remove any leftover stains." },
      { step: 4, title: "Flossing", desc: "Deep flossing to ensure no debris remains." }
    ]
  },
  "root-canal": {
    id: "root-canal",
    title: "Root Canal Treatment",
    subtitle: "Painless root canal treatments by endodontic specialists to save your natural tooth.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    whatIsIt: "A root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The term 'root canal' comes from cleaning of the canals inside a tooth's root.",
    benefits: [
      "Saves your natural tooth",
      "Relieves severe tooth pain",
      "Prevents infection from spreading",
      "Highly successful with long-lasting results",
      "Restores normal chewing and biting",
      "Protects surrounding teeth from excess strain"
    ],
    price: "From $600 - $1,200",
    faq: [
      { q: "Are root canals painful?", a: "Thanks to modern anesthetics and techniques, root canals are now essentially painless, similar to getting a standard filling." },
      { q: "How long does a root canal take?", a: "Usually 60 to 90 minutes. Depending on the tooth, it might require one or two visits." }
    ],
    process: [
      { step: 1, title: "Anesthesia", desc: "Local anesthesia is applied to numb the tooth and surrounding area." },
      { step: 2, title: "Removal", desc: "The infected pulp inside the tooth is carefully removed." },
      { step: 3, title: "Cleaning", desc: "The inner chambers are cleaned, disinfected, and shaped." },
      { step: 4, title: "Filling", desc: "The tooth is filled and sealed with a rubber-like material and a temporary filling." }
    ]
  },
  "braces": {
    id: "braces",
    title: "Braces & Aligners",
    subtitle: "Straighten your teeth with modern invisible aligners or traditional braces.",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    whatIsIt: "Orthodontic treatments, including traditional metal braces and clear aligners (like Invisalign), help correct misaligned teeth, crowded smiles, and irregular bites.",
    benefits: [
      "Improves your smile aesthetics",
      "Makes teeth easier to clean",
      "Corrects bite issues (overbite/underbite)",
      "Reduces jaw pain from TMJ disorders",
      "Boosts long-term self-confidence",
      "Reduces wear on natural teeth"
    ],
    price: "Varies (Consultation Required)",
    faq: [
      { q: "How long will I need to wear braces?", a: "Treatment typically lasts between 12 to 24 months, depending on the complexity of your specific case." },
      { q: "Are clear aligners better than traditional braces?", a: "Clear aligners are more discreet and removable, but traditional braces are sometimes necessary for more complex tooth movements. We will help you choose the best option." }
    ]
  },
  "teeth-whitening": {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    subtitle: "Brighten your smile up to 8 shades in a single clinical session.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    whatIsIt: "Professional teeth whitening utilizes safe, concentrated bleaching agents applied directly to your teeth, activated by an LED light to remove deep stains effectively and safely.",
    benefits: [
      "Immediate, visible results",
      "Removes deep, stubborn stains from coffee or smoking",
      "Customizable whitening levels",
      "Safer for enamel than over-the-counter kits",
      "Long-lasting brightness",
      "Enhances confidence and appearance"
    ],
    price: "From $250",
    faq: [
      { q: "Will whitening make my teeth sensitive?", a: "Some patients experience mild sensitivity for a day or two after the procedure, but it subsides quickly. We use desensitizing gels to minimize this." },
      { q: "How long do the results last?", a: "Results can last from 1 to 3 years, depending on your dietary habits and oral hygiene routine." }
    ]
  },
  "dental-implants": {
    id: "dental-implants",
    title: "Dental Implants",
    subtitle: "Restore your confident smile and bite functionality with permanent, natural-looking dental implants.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    whatIsIt: "A dental implant is a titanium post (acting as a tooth root) that is surgically positioned into the jawbone beneath the gum line. This allows your dentist to mount replacement teeth or a bridge into that area.",
    benefits: [
      "Looks and feels like natural teeth",
      "Prevents bone loss in the jaw",
      "Restores normal speech and eating",
      "Durable and long-lasting",
      "No slipping or clicking like dentures",
      "Protects adjacent healthy teeth"
    ],
    price: "From $1,500 per implant",
    faq: [
      { q: "Is the implant procedure painful?", a: "Most patients report that the procedure involves less discomfort than a tooth extraction. We use advanced local anesthesia." },
      { q: "How long do dental implants last?", a: "With proper oral care, the implant post can last a lifetime. The attached crown typically lasts 10-15 years." }
    ],
    process: [
      { step: 1, title: "Initial Consultation", desc: "Thorough examination, 3D scans, and personalized treatment planning." },
      { step: 2, title: "Implant Placement", desc: "Surgical insertion of the titanium post into the jawbone under local anesthesia." },
      { step: 3, title: "Healing", desc: "The jawbone heals and fuses tightly with the implant over several months." },
      { step: 4, title: "Crown Placement", desc: "Attachment of the custom-made ceramic crown, completing the restoration." }
    ]
  },
  "kids-dentistry": {
    id: "kids-dentistry",
    title: "Kids Dentistry",
    subtitle: "Gentle and fun dental care to keep your little ones smiling bright.",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    whatIsIt: "Pediatric dentistry focuses on the oral health of children from infancy through the teen years. We provide preventive care, early cavity detection, and a fear-free environment tailored for kids.",
    benefits: [
      "Fosters positive attitudes towards dental visits",
      "Early detection of cavities and bite issues",
      "Fluoride treatments for cavity prevention",
      "Sealants to protect developing teeth",
      "Specialized gentle pediatric care",
      "Guidance for parents on home oral care"
    ],
    price: "From $80 per checkup",
    faq: [
      { q: "When should I bring my child for their first visit?", a: "The AAPD recommends that a child visit a dentist within six months after the presence of their first tooth, or by their first birthday." },
      { q: "Are dental x-rays safe for children?", a: "Yes. With contemporary safeguards like lead aprons and high-speed digital film, the amount of radiation received is extremely small." }
    ]
  }
};
