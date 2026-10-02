import JSZip from 'jszip';
import { COMPANY_CONTACT, STONE_PRODUCTS, MARBLE_SCULPTURES } from '../data/stoneData';

export async function generateAndDownloadB2BZipPackage() {
  const zip = new JSZip();

  // 1. Company Overview & Contacts
  const companyInfo = `=====================================================
ASTON STONE CORPORATION
Rajasthan's Natural Stone. Crafted for the World.
=====================================================

Corporate Address:
${COMPANY_CONTACT.address}
Google Maps Location: ${COMPANY_CONTACT.googleMapsUrl}

Direct Contacts:
Mobile / WhatsApp: ${COMPANY_CONTACT.phone}
Primary Email: ${COMPANY_CONTACT.email1}
Secondary Email: ${COMPANY_CONTACT.email2}

Core Stone Categories & Services:
- Rajasthan Marble (Makrana, Verde Green, Banswara, Ambaji)
- Rajasthan Granite (Black Granite, Lakha Red, Cheema Pink)
- Rajasthan Sandstone (Dholpur Beige/Cream, Kandla Grey, Teakwood)
- Rajasthan Red Sandstone (Agra/Dholpur Heritage Red)
- Kota Limestone (Kota Blue-Green, Kota Brown)
- 5-Axis CNC Machine Precision Stone Cut & Waterjet Inlays
- Architectural Stone & 3D Jali Screens (lattices, columns, balustrades)
- Master Marble Sculptures & Custom Human Portrait Carving
- Worldwide Ocean Container Export (FOB / CIF / CFR)

Target Markets:
India, United States, United Kingdom, UAE, Saudi Arabia, Qatar, Oman, Europe, Australia, Canada, and global B2B stone importers.
`;

  zip.file("01_Aston_Stone_Corporation_Overview.txt", companyInfo);

  // 2. Comprehensive Product Catalogue
  let productCatalog = `=====================================================
ASTON STONE CORPORATION - PRODUCT SPECIFICATION GUIDE
=====================================================\n\n`;

  STONE_PRODUCTS.forEach((prod, index) => {
    productCatalog += `[${index + 1}] ${prod.name.toUpperCase()}\n`;
    productCatalog += `Category: ${prod.category}\n`;
    productCatalog += `Origin: ${prod.origin}\n`;
    productCatalog += `Color & Pattern: ${prod.color} | ${prod.pattern}\n`;
    productCatalog += `Available Finishes: ${prod.finishes.join(', ')}\n`;
    productCatalog += `Standard Thicknesses: ${prod.standardThickness}\n`;
    productCatalog += `Recommended Applications: ${prod.recommendedApplications.join(', ')}\n`;
    productCatalog += `Description: ${prod.description}\n`;
    if (prod.technicalSpecsPlaceholder) {
      productCatalog += `Technical Benchmarks: Density: ${prod.technicalSpecsPlaceholder.density || 'N/A'}, Absorption: ${prod.technicalSpecsPlaceholder.waterAbsorption || 'N/A'}\n`;
    }
    productCatalog += `-----------------------------------------------------\n\n`;
  });

  zip.file("02_Rajasthan_Stone_Product_Catalogue.txt", productCatalog);

  // 3. Export Packing & Logistics Specifications
  const exportLogistics = `=====================================================
INTERNATIONAL B2B EXPORT PACKAGING & CONTAINER LOGISTICS
ASTON STONE CORPORATION - SIKANDRA, DAUSA, RAJASTHAN
=====================================================

1. PACKAGING STANDARDS
- Heat-treated, fumigated seaworthy wooden crates compliant with ISPM-15 international phytosanitary regulations.
- High-density polyethylene vapor barrier film lining each crate to protect against oceanic moisture and condensation.
- Individual slab separation using foam cushioning sheets, corrugated pads, or plastic shrink-wrap to eliminate face-to-face friction and transport scratches.
- Corner & edge protectors on all calibrated and sawn-edge stone products.
- Steel or heavy polyester strapping cross-bracing every crate to prevent dimensional flex during crane handling.

2. CONTAINER LOADING & STOWAGE
- 20-Foot Heavy-Duty Ocean Containers utilized for dense natural stone.
- Weight capacities strictly coordinated based on destination port limits:
  * USA: Typically ~19.5 - 20 Metric Tons per 20ft container (subject to US highway regulations).
  * UK & Europe: ~21 - 24 Metric Tons per 20ft container.
  * UAE, Saudi Arabia & Middle East: Up to 26 - 27 Metric Tons per 20ft container.
- Robust timber dunnage, chock blocks, and industrial lashing installed inside the container to prevent any cargo movement during rough sea swells.

3. INSPECTION & QUALITY ASSURANCE PROTOCOL
- Dimensional verification: Length, width, diagonal squareness, and calibrated thickness tolerance (±1mm).
- Pre-shipment photographic & high-definition video inspection reports provided to international clients prior to container sealing.
- Third-party inspection coordination (e.g. SGS / Bureau Veritas) accommodated upon client request.

4. REQUIRED EXPORT DOCUMENTATION PROVIDED
- Commercial Invoice & Detailed Packing List (including crate-by-crate piece count, bundle numbers, and net/gross weights).
- Certificate of Origin (Chamber of Commerce verified).
- ISPM-15 Phytosanitary / Fumigation Certificate.
- Bill of Lading (Clean on Board).
- Material Test Certificates (Compressive strength, density, and water absorption test reports).
`;

  zip.file("03_Export_Packing_and_Container_Logistics.txt", exportLogistics);

  // 4. Custom Marble Sculptures & Portrait Commissioning
  let sculptureGuide = `=====================================================
CUSTOM MARBLE SCULPTURE & HUMAN PORTRAIT COMMISSIONING
ASTON STONE CORPORATION
=====================================================

Aston Stone Corporation specializes in bespoke marble carving, operating in the historic stone carving center of Sikandra, Dausa, Rajasthan.

COMMISSION CATEGORIES:
1. Custom Human Portrait Busts & Life-Sized Sculptures (from customer reference photos)
2. Sacred Deities & Religious Architectural Statuary (Shilpa Shastra compliant)
3. Classical Roman, Greek, and Contemporary Figurative Art
4. Monumental Sculptures, Garden Fountains & Custom Architectural Columns

9-STEP PORTRAIT COMMISSION WORKFLOW:
Step 1: Reference Photographs - Client provides multi-angle photographs (front, left profile, right profile, 3/4 angle).
Step 2: Design & Marble Selection - Selection of Makrana Super White or statuary grade marble.
Step 3: Dimensional Scaling - Confirmation of height, bust pedestal, or full-figure stance.
Step 4: Formal Quotation & Timeline Approval.
Step 5: Preliminary Modeling / Rough Blocking - Translation of facial contours into stone.
Step 6: Iterative Likeness Review - High-res photos and video share with client for feedback and refinements.
Step 7: Final Tooling, Facial Smoothing & Texture Polish.
Step 8: Custom Padded Shock-Absorbent Wooden Crate Fabrication.
Step 9: Global Insured Dispatch with Door-to-Door or Port-to-Port tracking.

To commission a sculpture, contact us directly on WhatsApp (+91 7877443079) or email astonstone26@gmail.com.
`;

  zip.file("04_Custom_Marble_Sculptures_and_Portraits.txt", sculptureGuide);

  // 5. RFQ Template
  const rfqTemplate = `=====================================================
B2B REQUEST FOR QUOTATION (RFQ) BLANK FORM
=====================================================

Company Name:
Contact Person:
Country & Destination Port/City:
Email:
WhatsApp / Phone:

PROJECT DETAILS:
Stone Variety Required: (e.g., Makrana Marble / Dholpur Beige Sandstone / Black Granite / Other)
Required Finish: (e.g., Polished / Honed / Flamed / Sandblasted / Natural Split)
Dimensions & Thickness: (e.g., 600x600x20mm / Random Slabs / Custom Cut-to-Size)
Estimated Quantity: (e.g., sq ft / sq meters / number of 20ft containers)
Project Type: (Commercial / Luxury Residential / Heritage / Hotel / Landscape / Public Plaza)
Expected Delivery Timeframe:

Submit completed RFQ to: astonstone26@gmail.com or via WhatsApp at +91 7877443079.
`;

  zip.file("05_B2B_RFQ_Request_For_Quote_Template.txt", rfqTemplate);

  // Generate the zip blob and trigger download
  const content = await zip.generateAsync({ type: "blob" });
  const downloadUrl = URL.createObjectURL(content);
  const anchor = document.createElement("a");
  anchor.href = downloadUrl;
  anchor.download = "Aston_Stone_Corporation_B2B_Package.zip";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(downloadUrl);
}
