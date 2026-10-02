import { StoneProduct, SculptureItem, ProjectGalleryItem, BlogPost } from '../types';

export const HERO_IMAGE = '/src/assets/images/rajasthan_stone_hero_1790956520444.jpg';
export const ARTISAN_IMAGE = '/src/assets/images/marble_artisan_1790956535162.jpg';
export const RED_SANDSTONE_IMAGE = '/src/assets/images/red_sandstone_arch_1790956552399.jpg';
export const LOGO_IMAGE = '/src/assets/images/aston_stone_logo_1790959064288.jpg';

export const COMPANY_CONTACT = {
  name: "ASTON STONE CORPORATION",
  tagline: "Rajasthan's Natural Stone. Crafted for the World.",
  subTagline: "Premium Natural Stone & Marble Craftsmanship from Rajasthan, India.",
  phone: "+91 7877443079",
  whatsappNumber: "917877443079",
  email1: "astonstone26@gmail.com",
  email2: "deepaksaini0425@gmail.com",
  address: "Aston Stone, Sikandra, Girdharpura, Dausa, Rajasthan – 303326, India",
  googleMapsUrl: "https://maps.app.goo.gl/WPJDoqjMC6CQVyBB8",
  logoUrl: LOGO_IMAGE,
};

export const STONE_PRODUCTS: StoneProduct[] = [
  // Marble
  {
    id: "makrana-white-marble",
    name: "Makrana Pure White Marble",
    category: "marble",
    origin: "Makrana, Rajasthan, India",
    color: "Pure Milk White with subtle translucent calcite crystalline matrix",
    pattern: "Subtle linear crystal grain with occasional faint grey veining",
    finishes: ["Mirror Polished", "Honed", "Brushed Antique", "Leather Finish"],
    recommendedApplications: ["High-end Residential Flooring", "Luxury Bathroom Vanities", "Temple & Religious Sanctuaries", "Architectural Columns", "Custom Marble Sculptures"],
    standardThickness: "16mm, 18mm, 20mm, 30mm & Custom Cut-to-Size",
    surfaceTexture: "Smooth, dense crystalline calcium carbonate structure",
    description: "Renowned globally as the marble of historic Indian monuments. 98%+ calcite content provides outstanding durability, natural luster, and virtually zero water absorption.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    technicalSpecsPlaceholder: {
      density: "Approx. 2.65 - 2.72 g/cm³ [Lab Test Certificate On Request]",
      waterAbsorption: "Under 0.15% [Lab Verified]",
      compressiveStrength: "100 - 140 MPa [Standard Test Available]",
      flexuralStrength: "15 - 22 MPa [Project Specific Batch Report]",
    }
  },
  {
    id: "rajasthan-green-marble",
    name: "Verde Rajasthan Green Marble",
    category: "marble",
    origin: "Udaipur / Dungarpur, Rajasthan, India",
    color: "Deep Forest Green / Emerald Green with dark webbed veining",
    pattern: "Serpentine dramatic swirling veins and deep forest mineral layers",
    finishes: ["High Gloss Polish", "Honed", "Tumbled", "Leathered"],
    recommendedApplications: ["Feature Accent Walls", "Kitchen Countertops", "Hotel Lobbies", "Stair Riser & Treads", "Bespoke Table Tops"],
    standardThickness: "18mm, 20mm, 30mm & Cut-to-Size",
    surfaceTexture: "Serpentine natural stone with rich contrast",
    description: "One of the most sought-after Indian natural marbles worldwide. Highly resilient serpentine structure suitable for both domestic interiors and international project export.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    technicalSpecsPlaceholder: {
      density: "Approx. 2.68 g/cm³ [Test Batch Report Available]",
      waterAbsorption: "0.20% [Specification on Request]",
    }
  },
  {
    id: "banswara-purple-marble",
    name: "Banswara White & Violet Marble",
    category: "marble",
    origin: "Banswara, Rajasthan, India",
    color: "Ivory White base with delicate purple and violet branched veining",
    pattern: "Delicate organic branching and soft purple landscape motifs",
    finishes: ["Polished", "Honed", "Bookmatched"],
    recommendedApplications: ["Bookmatched Living Room Walls", "Master Bathrooms", "Elevator Cladding"],
    standardThickness: "18mm, 20mm, 30mm",
    surfaceTexture: "Fine crystalline metamorphic marble",
    description: "Celebrated for its bookmatched visual appeal. Provides a warm, artistic aesthetic for upscale boutique hospitality and residential villas.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=80",
  },

  // Granite
  {
    id: "rajasthan-black-granite",
    name: "Rajasthan Premium Black Granite",
    category: "granite",
    origin: "Jalore / Rajsamand, Rajasthan, India",
    color: "Deep Jet Black with micro-crystalline depth",
    pattern: "Uniform micro-crystalline consistency with minimal grain variation",
    finishes: ["Diamond Polish", "Flamed (Thermal)", "Bush-Hammered", "Honed", "Waterjet"],
    recommendedApplications: ["Commercial Heavy Foot-Traffic Flooring", "Exterior Plaza Paving", "Kitchen Countertops", "Building Facade Panels"],
    standardThickness: "18mm, 20mm, 30mm, 50mm, 75mm (Paving)",
    surfaceTexture: "Extremely hard, low-porosity igneous plutonic rock",
    description: "Exceptional flexural strength and thermal shock resistance. Widely specified for large commercial developments, transport terminals, and high-wear exterior steps.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
    technicalSpecsPlaceholder: {
      density: "Approx. 2.90 - 3.05 g/cm³",
      waterAbsorption: "Under 0.08%",
      compressiveStrength: "180 - 240 MPa",
    }
  },
  {
    id: "lakha-red-granite",
    name: "Lakha Imperial Red Granite",
    category: "granite",
    origin: "Barmer / Jalore, Rajasthan, India",
    color: "Vibrant Brick Red / Ruby Red with feldspar crystals",
    pattern: "Rich feldspar crystalline matrix with dark grey micro-flecks",
    finishes: ["Polished", "Flamed", "Honed", "Chiseled Edge"],
    recommendedApplications: ["Monumental Entrances", "Commercial Flooring", "Pillar Cladding", "Curbs & Steps"],
    standardThickness: "18mm, 20mm, 30mm & Gangsaw Slabs",
    surfaceTexture: "Coarse to medium crystalline granite",
    description: "A distinctive heritage red granite from Western Rajasthan with unparalleled weather endurance across extreme climatic conditions.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cheema-pink-granite",
    name: "Cheema Classic Pink Granite",
    category: "granite",
    origin: "Rajasthan, India",
    color: "Soft Pastel Rose Pink with grey and quartz flecks",
    pattern: "Evenly distributed uniform crystalline grain",
    finishes: ["Polished", "Flamed for Non-Slip Paving", "Honed"],
    recommendedApplications: ["Airport & Metro Station Flooring", "Outdoor Walkways", "Staircases"],
    standardThickness: "18mm, 20mm, 30mm",
    surfaceTexture: "Granular igneous rock",
    description: "Renowned for high structural load capacity, uniform tone over large areas, and cost-effective bulk supply capability.",
    image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80",
  },

  // Sandstone & Red Sandstone
  {
    id: "dholpur-beige-sandstone",
    name: "Dholpur Beige / Cream Sandstone",
    category: "sandstone",
    origin: "Dholpur, Rajasthan, India",
    color: "Warm Cream, Light Buff, Biscuit Tan",
    pattern: "Fine homogeneous sedimentary grain with subtle bedding planes",
    finishes: ["Natural Cleft / Split", "Sawn (Smooth)", "Honed", "Sandblasted", "Shotblasted", "Tumbled"],
    recommendedApplications: ["Exterior Wall Cladding", "Pool Coping & Decks", "Garden Patios", "Carved Jali Screens", "Architectural Pillars & Cornices"],
    standardThickness: "20mm, 25mm, 30mm, 40mm, 50mm, and Carved Blocks",
    surfaceTexture: "Fine quartzose sandstone with soft warm touch",
    description: "The quintessential stone of historical North Indian palaces. Naturally non-slip when wet and stays cool under direct sunlight, making it ideal for tropical and temperate climates alike.",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1000&q=80",
    technicalSpecsPlaceholder: {
      density: "Approx. 2.30 - 2.45 g/cm³",
      waterAbsorption: "1.2% - 2.5%",
      compressiveStrength: "60 - 85 MPa",
    }
  },
  {
    id: "rajasthan-red-sandstone",
    name: "Agra / Dholpur Red Sandstone",
    category: "red_sandstone",
    origin: "Dholpur / Karauli / Bharatpur Belt, Rajasthan, India",
    color: "Rich Terracotta Red, Rust Red, Heritage Brick Red",
    pattern: "Even sedimentary grain with occasional natural dark iron banding",
    finishes: ["Natural Split", "Calibration Sawn", "Hand Chiseled", "Sandblasted", "Shot-blasted", "Antique"],
    recommendedApplications: ["Heritage Facades", "Fort & Palace Restoration", "Garden Landscaping", "Paving Cobbles & Flagstones", "Carved Jharokhas & Balustrades"],
    standardThickness: "22mm calibrated, 30mm, 40mm, 50mm & Custom Blocks",
    surfaceTexture: "Sturdy quartz sandstone with high silica cohesion",
    description: "The iconic stone of India's world-famous heritage architecture (Red Fort, Fatehpur Sikri). Outstanding resistance to weathering, acid rain, and environmental aging.",
    image: RED_SANDSTONE_IMAGE,
    technicalSpecsPlaceholder: {
      density: "Approx. 2.35 - 2.48 g/cm³",
      waterAbsorption: "1.5% - 2.8%",
    }
  },
  {
    id: "kandla-grey-sandstone",
    name: "Kandla / Budhpura Grey Sandstone",
    category: "sandstone",
    origin: "Budhpura / Kota region, Rajasthan, India",
    color: "Neutral Silver Grey with subtle bluish-grey hues",
    pattern: "Fine quartz grain with natural tonal variations",
    finishes: ["Hand Cut (Split Edge)", "Machine Cut (Sawn Edge)", "Flamed", "Calibrated"],
    recommendedApplications: ["UK & European Garden Paving", "Driveway Setts", "Pool Borders", "Public Walkways"],
    standardThickness: "18-22mm Calibrated, 25-35mm Commercial Grade",
    surfaceTexture: "Hard quartzitic sandstone, highly frost resistant",
    description: "Extremely popular for international exports to the UK, Ireland, and Northern Europe due to proven freeze-thaw durability and natural slip resistance.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "teakwood-sandstone",
    name: "Teakwood / Khatu Rainbow Sandstone",
    category: "sandstone",
    origin: "Khatu, Nagaur, Rajasthan, India",
    color: "Warm Golden Tan with prominent natural wood-grain brown stripes",
    pattern: "Striking concentric sedimentary timber-like wave bands",
    finishes: ["Sawn Smooth", "Honed", "Sandblasted"],
    recommendedApplications: ["Modern Feature Walls", "Spa & Wellness Resorts", "Swimming Pool Decks"],
    standardThickness: "20mm, 30mm & Tiles",
    surfaceTexture: "Fine, smooth grain with unique natural strata",
    description: "Mimics natural hardwood grain while offering the permanence, fire resistance, and durability of natural quartz sandstone.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=1000&q=80",
  },

  // Limestone
  {
    id: "kota-blue-limestone",
    name: "Kota Blue-Green Natural Limestone",
    category: "limestone",
    origin: "Kota / Ramganj Mandi, Rajasthan, India",
    color: "Earthy Blue-Grey to subtle greenish grey",
    pattern: "Dense, fine-grained homogeneous sedimentary limestone",
    finishes: ["Natural Split (Rough)", "Polished", "Honed", "Tumbled", "Leather / Brush Finish"],
    recommendedApplications: ["Industrial Flooring", "Railway & Bus Stations", "Schools & Hospitals", "Garden Patios & Pathways", "Step Treads"],
    standardThickness: "15-20mm, 20-25mm, 30mm Calibrated",
    surfaceTexture: "Dense, cool to the foot, tough and resilient",
    description: "One of India's most economical, hardwearing natural flooring stones. Naturally slip-resistant, non-porous relative to standard limestone, and easy to maintain.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "kota-brown-limestone",
    name: "Kota Rich Chocolate Brown Limestone",
    category: "limestone",
    origin: "Kota, Rajasthan, India",
    color: "Warm Earthy Brown, Mocha Tan",
    pattern: "Uniform earthy tone with occasional calcite deposits",
    finishes: ["Natural Surface", "Mirror Polish", "River Washed", "Honed"],
    recommendedApplications: ["Interior Bordering", "Verandas & Balconies", "Exterior Courtyards"],
    standardThickness: "20mm, 25mm, 30mm",
    surfaceTexture: "Dense sedimentary calciferous stone",
    description: "Pairs seamlessly with Kota Blue for classic checkerboard layouts, borders, and durable civic walkways.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80",
  },

  // Custom Cut & CNC Machine Stone
  {
    id: "cnc-machine-stone-cutting",
    name: "CNC Machine Precision Stone Cutting & 3D Carving",
    category: "custom_stone",
    origin: "Sikandra / Dausa Workshop, Rajasthan, India",
    color: "Executed in White Marble, Beige Sandstone, Red Sandstone & Granite",
    pattern: "Precision Computer-Controlled 3D Reliefs, Perforations & Inlays",
    finishes: ["5-Axis CNC Milled", "High-Precision Waterjet Cut", "Honed & Hand-Refined"],
    recommendedApplications: ["Parametric Building Facades", "Perforated Jali Privacy Screens", "Architectural Relief Panels", "Intricate Waterjet Floor Medallions", "Fluted Columns & Mouldings"],
    standardThickness: "20mm to 150mm+ depending on relief depth",
    surfaceTexture: "Micrometric CNC Tooling with Hand-Satin Polish",
    description: "State-of-the-art CNC machine precision stone cutting and 3D architectural carving. Combines CAD/CAM digital accuracy with Rajasthan's finest natural marble and sandstone for flawless architectural execution.",
    image: HERO_IMAGE,
  },
  {
    id: "architectural-carved-jali",
    name: "Custom Architectural Jali Screens & Balustrades",
    category: "custom_stone",
    origin: "Sikandra / Dausa, Rajasthan, India",
    color: "Available in White Marble, Beige Sandstone, or Red Sandstone",
    pattern: "Custom Geometric, Islamic, Floral or Parametric Perforations",
    finishes: ["Hand Carved & CNC Precision Finished", "Natural Sandstone", "Honed Marble"],
    recommendedApplications: ["Building Facades & Brise-Soleil", "Courtyard Privacy Partitions", "Temple Balustrades", "Luxury Villa Ventilation"],
    standardThickness: "30mm to 100mm depending on structural aperture",
    surfaceTexture: "Detailed Relief Carving with Crisp Openings",
    description: "Sikandra, Dausa is internationally famed for intricate stone perforation and lattice carving. Crafted by generational stone artisans backed by digital 3D templates.",
    image: HERO_IMAGE,
  },
  {
    id: "bespoke-architectural-columns",
    name: "Bespoke Classical & Modern Stone Columns",
    category: "custom_stone",
    origin: "Sikandra / Dausa Workshop, Rajasthan, India",
    color: "Makrana White, Pink Marble, Dholpur Stone, or Granite",
    pattern: "Fluted, Tapered, Spiral or Sculpted Capital & Base",
    finishes: ["Hand-Carved Capitals", "Precision-Turned Shaft", "Smooth Honed"],
    recommendedApplications: ["Grand Porticos", "Hotel Entrance Foyers", "Palace Pavilions", "Temple Mandaps"],
    standardThickness: "Custom Diameters (200mm to 1200mm+) & Segmented Assemblies",
    surfaceTexture: "Monolithic or Sectional Precision Fit",
    description: "Engineered with internal core allowances for structural reinforcement or solid monolithic stone for historic and classical installations.",
    image: "https://images.unsplash.com/photo-1548625361-195feee10fce?auto=format&fit=crop&w=1000&q=80",
  }
];

export const MARBLE_SCULPTURES: SculptureItem[] = [
  {
    id: "sculpture-religious-deity",
    title: "Sacred Marble Deities & Temple Statues",
    category: "religious",
    material: "Pure Makrana Super White / Ambaji Marble",
    heightPlaceholder: "Custom: 1 ft to 15 ft+ [Per Client Dimensions]",
    finish: "Fine Hand-Polished Lustrous White or Gold Leaf Accentuated",
    description: "Carved strictly in accordance with traditional iconographic proportions (Shilpa Shastra) by master stone carvers of Rajasthan. Every expression, mudra, and ornament is sculpted with reverent precision.",
    image: ARTISAN_IMAGE,
  },
  {
    id: "sculpture-custom-human-portrait",
    title: "Commissioned Marble Portrait Busts & Statues",
    category: "portrait",
    material: "Premium Fine-Grain Makrana White Marble",
    heightPlaceholder: "Life Size (approx 24-30 in) or Custom Scale",
    finish: "Realistic Skin Texture Honed & Polished Drapery",
    description: "Hand-carved three-dimensional human portraits sculpted from customer photographs. Captures facial likeness, emotional depth, and personal character for family memorials and civic honors.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sculpture-classical-architectural",
    title: "Classical European & Contemporary Figures",
    category: "classical",
    material: "Makrana White / Italian Carrara Alternative",
    heightPlaceholder: "Custom Scaled (Up to Monumental Proportions)",
    finish: "Museum-Grade Fine Satin Honed",
    description: "Graceful figurative sculptures, Roman/Greek classical reproductions, and modern abstract stone forms commissioned by international interior architects and luxury estates.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sculpture-garden-fountain-water",
    title: "Carved Marble Fountains & Water Features",
    category: "garden",
    material: "Dholpur Sandstone or White Marble",
    heightPlaceholder: "2 Tier, 3 Tier & Multi-Basin Architectural Scaled",
    finish: "Water-Resistant Carved Stone with Concealed Plumbing Channels",
    description: "Dramatic courtyard centerpieces with lotus petal basins, scalloped rims, and handcrafted lion or floral spout motifs engineered for recirculating water flow.",
    image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sculpture-decorative-artifacts",
    title: "Ornamental Stone Urns, Planters & Fireplace Surrounds",
    category: "decorative",
    material: "Natural Rajasthan Sandstone & Marble",
    heightPlaceholder: "Custom Architectural Fit",
    finish: "Intricate Bas-Relief Carving & Antique Wash",
    description: "Statement architectural accents for luxury villas, resort foyers, and heritage estate gardens designed to age gracefully over decades.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
  }
];

export const GALLERY_PROJECTS: ProjectGalleryItem[] = [
  {
    id: "proj-1",
    title: "Luxury Heritage Resort Courtyard",
    category: "architecture",
    location: "Jaipur, Rajasthan, India [Representative Project Application]",
    stoneUsed: "Dholpur Beige Sandstone & Red Sandstone",
    application: "Exterior Facade, Sawn Colonnades & Carved Jali Screens",
    description: "Sawn-edge sandstone masonry integrated with handcrafted stone brackets, cantilevered balconies, and cool shaded arcades.",
    image: HERO_IMAGE,
  },
  {
    id: "proj-2",
    title: "Contemporary Villa Grand Entrance",
    category: "interiors",
    location: "New Delhi, India [Representative Project Application]",
    stoneUsed: "Makrana Pure White Marble",
    application: "Bookmatched Floor Medallion & Cantilevered Staircase",
    description: "High-gloss crystalline white marble floors with razor-thin joint tolerances, reflecting ambient daylight throughout open-plan living areas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "proj-3",
    title: "Palace Corridor & Arched Pavilion",
    category: "red_sandstone",
    location: "Dausa / Sikandra Region, Rajasthan [Craftsmanship Showcase]",
    stoneUsed: "Rajasthan Red Sandstone",
    application: "Load-Bearing Arches, Wall Ashlar Cladding & Paving",
    description: "Traditional stone joinery engineered with precise dry-fit testing prior to site installation, celebrating Rajasthan's monumental red stone legacy.",
    image: RED_SANDSTONE_IMAGE,
  },
  {
    id: "proj-4",
    title: "Private Memorial Portrait Sculpture",
    category: "sculptures",
    location: "Client Commission [Representative Custom Work]",
    stoneUsed: "Fine Makrana White Statuary Marble",
    application: "Custom Human Portrait Bust on Granite Pedestal",
    description: "Crafted directly from multi-angle photographs with iterative progress reviews, delivering sensitive likeness and lasting marble permanence.",
    image: ARTISAN_IMAGE,
  },
  {
    id: "proj-5",
    title: "Five-Star Coastal Hotel Exterior Promenade",
    category: "landscaping",
    location: "Goa, India [Representative Export / Hospitality Spec]",
    stoneUsed: "Kandla Grey & Teakwood Sandstone",
    application: "Non-Slip Calibrated Paving & Pool Surrounds",
    description: "Thermal and salt-spray resistant natural stone paving that maintains safe traction when wet and remains cool under bare feet.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "proj-6",
    title: "Commercial Corporate Headquarters Atrium",
    category: "granite",
    location: "Bengaluru, India [Representative Project Application]",
    stoneUsed: "Rajasthan Black Granite & Banswara Marble",
    application: "Heavy Footfall Flooring & Feature Water Wall",
    description: "Mirror-polished black granite combined with honed white marble highlights, resistant to abrasion from thousands of daily visitors.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why Choose Rajasthan Natural Stone for Architecture?",
    slug: "why-choose-rajasthan-natural-stone",
    category: "Stone Heritage & Selection",
    readTime: "6 min read",
    summary: "From Makrana marble to Dholpur sandstone, explore how Rajasthan's geological riches and generational craftsmanship provide unparalleled architectural durability.",
    keyTakeaways: [
      "Rajasthan accounts for over 85% of India's sandstone and marble production.",
      "Extreme thermal stability makes Rajasthan sandstone ideal for both desert heat and European frost.",
      "Access to complete ecosystem: quarrying, block dressing, gangsaw slicing, CNC and master hand-carving."
    ],
    content: [
      "Rajasthan, often hailed as the stone capital of India, hosts a geological treasure trove formed over millions of years. From the pristine metamorphic marbles of Makrana to the tough sedimentary quartz sandstones of Dholpur and the rich granites of Jalore, the region supplies materials that have stood the test of centuries.",
      "Unlike synthetic composites that degrade under UV radiation, natural stone from Rajasthan possesses authentic crystalline bonds. When sourced and processed correctly, it matures with a dignified patina rather than deteriorating.",
      "At Aston Stone Corporation, we bridge this ancient geological legacy with contemporary project specifications, ensuring that architects and international buyers receive precisely dimensioned, carefully inspected materials."
    ]
  },
  {
    id: "2",
    title: "Rajasthan Marble: Characteristics, Calcite Density and Applications",
    slug: "rajasthan-marble-characteristics-applications",
    category: "Marble Specifications",
    readTime: "7 min read",
    summary: "A technical dive into Makrana, Rajsamand, and Banswara marbles: understanding porosity, mineral veining, and optimal room placement.",
    keyTakeaways: [
      "Makrana marble is unique globally due to its 98%+ calcite content and low silica porosity.",
      "Unlike many porous marbles, authentic Makrana does not require chemical resin netting on the backside when properly cut.",
      "Ideal for high-moisture spaces, prayer rooms, and monumental civic lobbies."
    ],
    content: [
      "Not all white marbles are created equal. The distinguishing feature of authentic Makrana marble is its remarkably high calcium carbonate (calcite) percentage. This tight crystalline structure results in an extremely low water absorption rate (often under 0.15%), preventing moisture penetration and permanent staining.",
      "When specifying marble for luxury residences or commercial projects, architects must differentiate between crystalline marbles suitable for high-wear flooring and softer brecciated stones better suited for vertical feature wall panels.",
      "Aston Stone Corporation provides complete sample verification so clients can inspect color consistency, veining direction, and finish suitability before ordering full container loads."
    ]
  },
  {
    id: "3",
    title: "Rajasthan Sandstone for Architecture: Paving, Cladding & Landscape",
    slug: "rajasthan-sandstone-architecture-applications",
    category: "Sandstone & Facades",
    readTime: "5 min read",
    summary: "How Dholpur Beige, Kandla Grey, and Teakwood sandstone outperform synthetic pavers in thermal comfort and freeze-thaw durability.",
    keyTakeaways: [
      "Natural sandstone reflects solar radiation and stays significantly cooler than concrete or porcelain tiles.",
      "Calibrated thickness (e.g. 22mm or 30mm) enables rapid, level installation on mortar beds or pedestals.",
      "Excellent slip resistance even in wet conditions around swimming pools and garden pathways."
    ],
    content: [
      "In modern landscape architecture and building facades, natural sandstone remains the premier choice for outdoor environments. Sandstone's quartz-rich composition provides inherent structural toughness while offering a warm, organic visual warmth that synthetic materials simply cannot replicate.",
      "For international projects in temperate zones like the UK, Germany, and North America, freeze-thaw resistance is paramount. By selecting stones with optimal quartz grain cohesion like Kandla Grey, clients avoid the spalling and delamination common in inferior stones.",
      "Aston Stone Corporation supplies sandstone in calibrated tiles, large paving slabs, hand-cut cobbles, and custom-carved architectural moldings."
    ]
  },
  {
    id: "4",
    title: "Red Sandstone: Architectural Legacy and Modern Facade Applications",
    slug: "red-sandstone-architectural-applications",
    category: "Heritage & Restoration",
    readTime: "6 min read",
    summary: "The enduring legacy of Agra and Dholpur red sandstone in world-renowned monuments and modern ventilated rainscreen facades.",
    keyTakeaways: [
      "High iron oxide content gives Rajasthan red sandstone its signature warm terracotta tone.",
      "Remarkable resistance to urban air pollution and acidic atmospheric conditions.",
      "Frequently specified for historic conservation, civic courthouses, and luxury hospitality."
    ],
    content: [
      "From the monumental gateways of the Mughal empire to modern civic institutions across India, red sandstone is synonymous with permanence. Extracted from the geological belt stretching through Dholpur and Karauli, this stone boasts exceptional density and fine sedimentary grain.",
      "Today, architects are incorporating red sandstone into contemporary ventilated curtain walls and rainscreen facade systems, celebrating the contrast between rust-red natural stone and modern structural glass.",
      "We supply dressed red sandstone blocks, calibrated wall cladding panels, and hand-carved decorative elements ready for domestic and international transit."
    ]
  },
  {
    id: "5",
    title: "Marble vs Granite: Understanding Durability, Porosity & Cost for B2B Projects",
    slug: "marble-vs-granite-project-selection-guide",
    category: "Technical Guide",
    readTime: "8 min read",
    summary: "A practical B2B comparison matrix covering Mohs hardness, chemical reactivity, maintenance intervals, and cost-per-square-meter factors.",
    keyTakeaways: [
      "Granite (Mohs 6-7) is ideal for heavy abrasion, commercial foyers, and acid-exposed culinary countertops.",
      "Marble (Mohs 3-4) provides peerless light reflection, depth, and sculptural elegance for luxury interiors.",
      "Project feasibility depends on understanding traffic load and appropriate sealant regimens."
    ],
    content: [
      "One of the most frequent dilemmas faced by property developers and interior designers is choosing between marble and granite. While both are natural stones, their geological origins dictate starkly different performance attributes.",
      "Granite, an igneous rock formed by cooling molten magma, is dominated by quartz and feldspar, making it impervious to common household acids and resistant to scratching. Marble, a metamorphic rock composed of recrystallized carbonate minerals, offers luminous aesthetic translucence that transforms interior spaces.",
      "At Aston Stone Corporation, we guide project teams through honest material assessment rather than pushing one over the other."
    ]
  },
  {
    id: "6",
    title: "How to Select Natural Stone for Commercial & Hospitality Projects",
    slug: "how-to-select-natural-stone-for-projects",
    category: "Procurement & B2B",
    readTime: "6 min read",
    summary: "A step-by-step checklist for architects and procurement managers: from approving dry-lays to establishing acceptable shade variation ranges.",
    keyTakeaways: [
      "Always request a multi-piece sample set to observe natural veining and shade distribution.",
      "Define thickness tolerance standards (±1mm for calibrated stone) in procurement contracts.",
      "Establish dry-lay inspection protocol before final container loading."
    ],
    content: [
      "Successful large-scale stone installation begins months before a single slab is fixed into position. The inherent beauty of natural stone lies in its natural variation; however, commercial projects require consistent quality management.",
      "A rigorous selection process involves evaluating quarry block availability, inspecting factory calibration equipment, reviewing test reports for flexural strength and water absorption, and conducting dry-lay layouts for tone matching.",
      "Aston Stone Corporation facilitates direct video dry-lay reviews and batch sample dispatches for international procurement teams."
    ]
  },
  {
    id: "7",
    title: "Natural Stone Finishes Explained: Polished, Honed, Flamed, Leathered & Sandblasted",
    slug: "natural-stone-finishes-architectural-guide",
    category: "Finishes & Textures",
    readTime: "7 min read",
    summary: "How surface treatments dramatically alter stone color, slip resistance (R-rating), tactile feel, and maintenance requirements.",
    keyTakeaways: [
      "Polished: Accentuates deep colors and crystal clarity, recommended for walls and dry indoor floors.",
      "Honed (Satin): Non-reflective matte texture that discreetly conceals everyday micro-scratches.",
      "Flamed & Sandblasted: High-grip tactile surfaces essential for outdoor pools, public plazas, and ramps."
    ],
    content: [
      "The finish applied to a slab transforms not only its appearance but its functional safety. A single variety of Rajasthan sandstone can appear pale cream when sandblasted, warm buff when honed, and rich golden when wet or diamond-polished.",
      "For wet pedestrian environments, thermal flaming fractures the surface quartz crystals, creating an anti-slip texture with high slip resistance ratings. For luxury interior walls, brush or leather finishes provide a velvety tactile texture that invites touch.",
      "We operate specialized processing lines to execute exact mechanical surface finishes according to your project's architectural drawings."
    ]
  },
  {
    id: "8",
    title: "How Marble Sculptures Are Made: The Art of Traditional Rajasthan Stone Carvers",
    slug: "how-marble-sculptures-are-made",
    category: "Artisanal Craftsmanship",
    readTime: "7 min read",
    summary: "Discover the generational techniques of Sikandra and Jaipur sculptors who transform raw marble blocks into sacred art and lifelike statuary.",
    keyTakeaways: [
      "Block selection is the critical first stage: inspecting the marble with water and sound resonance to detect internal hairline fissures.",
      "Roughing out with point chisels followed by claw chisels, fine rifflers, and wet diamond sandpaper.",
      "Hand burnishing using natural stone pastes to achieve a soft, enduring natural luster without artificial lacquers."
    ],
    content: [
      "In regions like Sikandra and Dausa, stone carving is not merely a trade; it is a sacred heritage handed down through generations of artisans. A master sculptor can read the grain of a marble block before making the first strike of the mallet.",
      "The process begins with precise volumetric blocking, translating drawings or miniature clay maquettes onto the raw stone. As the form emerges, the sculptor transitions to increasingly delicate instruments, finishing the eyes, drapery folds, and ornamental jewelry with micrometric care.",
      "At Aston Stone Corporation, our sculptors work with both classical iconography and modern architectural art, ensuring that traditional craftsmanship thrives on the global stage."
    ]
  },
  {
    id: "9",
    title: "Custom Marble Human Portrait Sculptures: Preserving Likeness in Stone",
    slug: "custom-marble-portrait-sculptures-guide",
    category: "Custom Portraits",
    readTime: "6 min read",
    summary: "The step-by-step commissioning workflow for three-dimensional marble portrait busts from client photographs.",
    keyTakeaways: [
      "Provide high-resolution reference photographs: front, profile (left & right), and three-quarter angles.",
      "Iterative photo/video updates during the clay model and rough stone stages ensure likeness validation.",
      "Lifelong permanence: a marble portrait stands as an enduring legacy for generations."
    ],
    content: [
      "Carving an accurate human portrait in marble is among the most demanding disciplines in the sculptural arts. Unlike clay, which can be added, stone is an unforgiving subtractive medium: once marble is removed, it cannot be put back.",
      "Our process begins with comprehensive photographic analysis. We study facial bone structure, characteristic expressions, and hair texture. Before carving the final Makrana marble block, our artisans often prepare a full-scale clay model for client review and refinement.",
      "Whether commissioned for family memorials, institutional founders, or public civic squares, our custom portrait sculptures combine anatomical fidelity with artistic sensitivity."
    ]
  },
  {
    id: "10",
    title: "How to Source Natural Stone from India: A B2B Importer's Handbook",
    slug: "how-to-source-natural-stone-from-india",
    category: "Export & Sourcing",
    readTime: "8 min read",
    summary: "Navigating quarry regions, price structures, payment terms, and factory audits when importing natural stone from India.",
    keyTakeaways: [
      "Direct engagement with processors reduces intermediary markups and improves quality control oversight.",
      "Specify clear inspection criteria including diagonal tolerances, thickness variations, and edge chips.",
      "Understand seasonal quarrying schedules to optimize shipping timelines."
    ],
    content: [
      "India is one of the world's top exporters of natural stone, yet foreign buyers often encounter challenges regarding communication clarity and specification adherence. Bridging this gap requires partnering with a reliable, export-fluent supplier.",
      "Key factors for international buyers include confirming factory processing equipment (multi-wire saws vs older frame saws), validating packaging standards, and negotiating transparent CIF/FOB terms.",
      "Aston Stone Corporation is built specifically to serve as a reliable, transparent B2B supplier for international wholesalers and architectural contractors."
    ]
  },
  {
    id: "11",
    title: "Buying Indian Natural Stone for International Projects: Specifications & Standards",
    slug: "buying-indian-stone-international-projects-specs",
    category: "International Standards",
    readTime: "7 min read",
    summary: "Aligning Indian stone supplies with ASTM, EN, and BS standards for absorption, rupture modulus, and dimensional tolerances.",
    keyTakeaways: [
      "Understanding EN 12058 (stone slabs for floors) and ASTM C616 (sandstone specifications).",
      "Documentation checklist: Certificate of Origin, Phytosanitary Fumigation Certificate, Packing List with piece counts.",
      "Importance of pre-shipment photographic inspection reports."
    ],
    content: [
      "Global construction projects operate under strict engineering codes. When natural stone is specified for an airport in Europe, a luxury hotel in Dubai, or a civic plaza in the United States, suppliers must meet defined international physical property thresholds.",
      "We support our commercial clients by providing verified lab test certificates for compressive strength, water absorption, and abrasion resistance. All dimensions and tolerances are confirmed against project shop drawings prior to crating.",
      "Our team coordinates with international freight forwarders to ensure smooth customs clearance and port-to-site delivery."
    ]
  },
  {
    id: "12",
    title: "Things International Buyers Should Check Before Ordering Natural Stone",
    slug: "international-buyers-checklist-natural-stone",
    category: "Risk Mitigation",
    readTime: "6 min read",
    summary: "Avoid costly jobsite delays: 7 critical checkpoints from container payload weight limits to corner protection and moisture control.",
    keyTakeaways: [
      "Container weight limits vary by destination country (e.g. 20-ton limits in USA vs 27-ton limits in GCC).",
      "Ensure heavy-duty wooden crates feature internal foam/thermocol lining to prevent transit micro-fractures.",
      "Inspect edge chamfering specifications to prevent on-site chipping during unloading."
    ],
    content: [
      "Importing stone containers across continents involves significant logistical coordination. Simple oversights, such as failing to account for regional highway axle-weight limits or inadequate pallet fumigation, can trigger customs holding fees and project delays.",
      "By establishing a detailed pre-order specification sheet that documents crate dimensions, forklift entry points, slab orientation (vertical A-frame vs flat packed), and piece-level barcode labeling, buyers safeguard their investment.",
      "Aston Stone Corporation manages these critical logistics variables so our clients can focus on project execution."
    ]
  },
  {
    id: "13",
    title: "Natural Stone Packaging and Shipping: Protecting Slabs & Sculptures in Ocean Freight",
    slug: "natural-stone-packaging-shipping-best-practices",
    category: "Logistics & Packaging",
    readTime: "7 min read",
    summary: "Inside our export packaging protocol: heat-treated ISPM-15 wooden crates, plastic sheeting, foam spacers, and container lashing.",
    keyTakeaways: [
      "ISPM-15 certified fumigated seaworthy wooden crates prevent biological contamination and comply with global customs.",
      "Polyethylene film wrapping shields stone from saltwater humidity and condensation inside ocean containers.",
      "Custom wooden skeletal armature cages protect intricate marble sculptures from vibration shocks."
    ],
    content: [
      "A quarry can produce the finest marble slab or sculpture in the world, but if it is improperly crated for ocean transit, it will arrive cracked or discolored. Ocean voyages expose cargo to heavy swells, humidity fluctuations, and rigorous forklift handling.",
      "At Aston Stone Corporation, every shipment is packaged to export standards. Slabs are separated by protective film or foam sheets to prevent friction scratching, crates are reinforced with heavy steel strapping, and the containers are braced with timber dunnage to eliminate cargo shifting.",
      "For fine marble sculptures and human portraits, we construct custom padded crates with form-fitting cushioning."
    ]
  },
  {
    id: "14",
    title: "Rajasthan's Stone Craftsmanship and Architectural Heritage: A Living Tradition",
    slug: "rajasthan-stone-craftsmanship-architectural-heritage",
    category: "Cultural Heritage",
    readTime: "8 min read",
    summary: "Tracing the artisanal lineage from ancient stepwells and carved Havelis to today's global architectural projects.",
    keyTakeaways: [
      "Centuries of knowledge in understanding natural cleavage planes and fracture lines of stone.",
      "Sikandra (Dausa) is historically renowned across India as the epicenter of architectural sandstone carving.",
      "Connecting historic craftsmanship with modern global architecture keeps this vital heritage alive."
    ],
    content: [
      "Walk through the Amber Fort, the city palaces of Udaipur, or the ornate havelis of Shekhawati, and you witness a civilization that spoke through stone. The delicate jali screens that diffuse desert light and the soaring sandstone arches are testaments to Rajasthan's master stonemasons.",
      "In Sikandra and Dausa, this tradition remains vibrantly alive. Today's stone carvers carry tools that their grandfathers used, combined now with diamond cutting discs and digital measurement tools.",
      "Aston Stone Corporation is proud to be based in Sikandra, Dausa, directly at the heartbeat of Rajasthan's stone craftsmanship, delivering this authentic legacy to clients around the world."
    ]
  }
];

export const EDITABLE_PLACEHOLDERS = {
  certifications: "[Add Official Certification / ISO Placeholder Here]",
  productionCapacity: "[Add Verified Production Capacity / Monthly Output Placeholder]",
  yearsExperience: "[Add Verified Years of Experience / Foundation Year Placeholder]",
  clientTestimonials: [
    {
      id: "test-1",
      quote: "The consistency and dimensional calibration of the Dholpur sandstone slabs met our strict facade engineering requirements. Deliveries arrived secure and well-crated.",
      authorPlaceholder: "[Client Name / Architectural Practice Placeholder]",
      locationPlaceholder: "[City, Country / e.g. Dubai, UAE / Mumbai, India]",
      projectType: "Luxury Hospitality Facade"
    },
    {
      id: "test-2",
      quote: "Aston Stone Corporation carved a custom marble portrait bust from photographs. The likeness, anatomical balance, and fine Makrana marble finish were exceptional.",
      authorPlaceholder: "[Private Commission Client / Estate Placeholder]",
      locationPlaceholder: "[London, UK / California, USA]",
      projectType: "Custom Marble Portrait Commission"
    },
    {
      id: "test-3",
      quote: "Reliable communication, prompt batch sample dispatches, and clear container packing lists. A trustworthy natural stone partner from Rajasthan.",
      authorPlaceholder: "[Commercial Contractor / Distributor Placeholder]",
      locationPlaceholder: "[Melbourne, Australia / Riyadh, Saudi Arabia]",
      projectType: "B2B Commercial Granite Supply"
    }
  ],
  awards: "[Add Official Industry Awards / Recognitions Placeholder]"
};

export const STONE_APPLICATIONS = [
  { name: "Residential Buildings & Villas", desc: "Timeless flooring, master bath vanities, and natural stone facades.", icon: "Home" },
  { name: "Luxury Homes & Penthouses", desc: "Bookmatched feature walls, marble fireplaces, and custom stone islands.", icon: "Sparkles" },
  { name: "Hotels & Luxury Resorts", desc: "Durable granite corridors, grand marble foyers, and resort pool copings.", icon: "Building2" },
  { name: "Commercial & Office Towers", desc: "High-traffic lobby flooring, elevator surround panels, and stone reception desks.", icon: "Briefcase" },
  { name: "Retail Spaces & Showrooms", desc: "Elegant monolithic floor tiles and polished display pedestals.", icon: "Store" },
  { name: "Restaurants & Fine Dining", desc: "Natural sandstone accents, ambient stone wall cladding, and bar tops.", icon: "UtensilsCrossed" },
  { name: "Temples & Religious Architecture", desc: "Sacred marble mandaps, intricately carved stone pillars, and sanctum flooring.", icon: "Landmark" },
  { name: "Heritage Restoration Projects", desc: "Authentic red sandstone and Dholpur stone matching historical profiles.", icon: "Shield" },
  { name: "Monuments & Civic Plazas", desc: "Heavy-duty granite steps, memorial plinths, and civic water features.", icon: "Award" },
  { name: "Landscaping & Garden Design", desc: "Natural cleft flagstones, garden steppers, cobbles, and decorative urns.", icon: "Trees" },
  { name: "Exterior Building Facades", desc: "Ventilated rainscreens, rusticated sandstone ashlar, and carved cornice bands.", icon: "Layers" },
  { name: "Interior Flooring & Inlays", desc: "Precision calibrated tiles, geometric borders, and mirror-finished slabs.", icon: "Grid" },
  { name: "Wall Cladding & Feature Walls", desc: "Textured split-face stone, honed slabs, and backlit translucent panels.", icon: "LayoutGrid" },
  { name: "Grand Staircases & Risers", desc: "Monolithic bullnosed treads, carved balustrades, and non-slip grooves.", icon: "TrendingUp" },
  { name: "Kitchen & Vanity Countertops", desc: "Dense granite and sealed marble worktops with polished sink cutouts.", icon: "Maximize" },
  { name: "Driveway & Pedestrian Paving", desc: "Hand-cut cobblestones, calibrated setts, and durable Kota limestone.", icon: "Compass" },
  { name: "Carved Jali Lattice Screens", desc: "Intricate perforated sandstone and marble screens for natural ventilation.", icon: "Filter" },
  { name: "Marble Statues & Sculptures", desc: "Devotional deities, classical figurative art, and contemporary forms.", icon: "Crown" },
  { name: "Custom Human Portrait Busts", desc: "Commemorative stone likenesses hand-carved from photographic references.", icon: "User" }
];
