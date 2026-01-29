# 🔄 PLACEHOLDERS TO REPLACE

This document lists all items that need to be replaced manually after deployment.

## 🔗 Social Media Links

**Location:** Header and Footer (all pages)

Replace these placeholders in `components/header.html` and `components/footer.html`:

- `{{FACEBOOK_URL}}` → Actual Facebook page URL
- `{{INSTAGRAM_URL}}` → Actual Instagram profile URL

**Files to update:**
- Every HTML page (or do a find-and-replace across all files)

---

## 📸 Images to Replace

### **Logo Images**

| File | Location | Size | Description |
|------|----------|------|-------------|
| `logo.png` | `/assets/images/placeholders/` | Height: 48-60px | Main logo (color version) |
| `logo-white.png` | `/assets/images/placeholders/` | Height: 40-48px | Logo for dark footer |
| `favicon.png` | `/assets/images/` | 32x32px or 64x64px | Browser favicon |

### **Hero/Banner Images**

| File | Size | Used On | Description |
|------|------|---------|-------------|
| `hero-hospitality.jpg` | 1920x1080 | Homepage carousel | Hospitality services |
| `hero-financial.jpg` | 1920x1080 | Homepage carousel | Financial services |
| `hero-interior.jpg` | 1920x1080 | Homepage carousel | Interior design |
| `hero-events.jpg` | 1920x1080 | Homepage carousel | Events & celebrations |
| `hero-manpower.jpg` | 1920x1080 | Manpower page | Business professionals |
| `hero-academy.jpg` | 1920x1080 | Academy page | Education/training |
| `hero-creatives.jpg` | 1920x1080 | Creatives page | Digital marketing |
| `hero-za-solutions.jpg` | 1920x1080 | Z-A Solutions page | Hotel equipment |

### **Service Icon Images**

| File | Size | Used On | Description |
|------|------|---------|-------------|
| `service-hospitality.jpg` | 400x300 | Homepage | Hotel/hospitality icon |
| `service-financial.jpg` | 400x300 | Homepage | Finance/investment icon |
| `service-interior.jpg` | 400x300 | Homepage | Interior design icon |
| `service-manpower.jpg` | 400x300 | Homepage | Manpower/HR icon |
| `service-academy.jpg` | 400x300 | Homepage | Education icon |
| `service-creatives.jpg` | 400x300 | Homepage | Digital marketing icon |
| `service-events.jpg` | 400x300 | Homepage | Events icon |
| `service-za-solutions.jpg` | 400x300 | Homepage | Hotel products icon |

### **Client Portfolio Images** (16 images)

Location: `/assets/images/clients/`  
Size: 400x300 (consistent aspect ratio)

| File | Client Name | Location |
|------|-------------|----------|
| `hotel-swarna-digha.jpg` | Hotel Swarna | New Digha |
| `ridley-international-digha.jpg` | Ridley International | New Digha |
| `hotel-global-retreat-digha.jpg` | Hotel Global Retreat | New Digha |
| `hotel-sonar-tari-mandarmani.jpg` | Hotel Sonar Tari | Mandarmani |
| `hotel-sagar-kuth-mandarmani.jpg` | Hotel Sagar Kuth | Mandarmani |
| `hotel-mahal-dighirpur.jpg` | Hotel Mahal | Dighirpur |
| `svb-sonar-bangla-kalyan.jpg` | SV B Sonar Bangla | Kalyan |
| `hotel-papilo-malda.jpg` | Hotel Papilo | Malda |
| `hotel-suk-nal-malda.jpg` | Hotel Suk Nal | Malda |
| `girish-international.jpg` | Girish International | Diamond Harbour |
| `vedanta-malda.jpg` | Vedanta | Malda |
| `continental-lodge-malda.jpg` | Continental Lodge | Malda |
| `hotel-sonartari-agartala.jpg` | Hotel Sonartari | Agartala |
| `sagar-kuth-2.jpg` | Sagar Kuth | Mandarmani |
| `hotel-labanya-siliguri.jpg` | Hotel Labanya | Siliguri |
| `continental-residency-malda.jpg` | Continental Residency | Malda |

### **Content Images** (Service Pages)

Location: `/assets/images/content/`  
Size: 800x600 or 1200x800 (flexible)

- `about-team.jpg` - Team photo for About page
- `office-exterior.jpg` - Office building photo
- `interior-designer-sagarika.jpg` - Interior designer profile photo
- Various service-specific images as needed

### **Social Sharing Image**

| File | Size | Used For |
|------|------|----------|
| `og-image.jpg` | 1200x630 | Facebook/LinkedIn/Twitter sharing |

---

## 🗺️ Google Maps Embed

**Location:** `contact.html`

**Instructions:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: "Amarabati Bhawan 9/3, Ekdalia Place, Kolkata"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the comment in `contact.html`:
   ```html
   <!-- PLACEHOLDER: Add Google Maps embed here -->
   ```

---

## ✅ Content Review Checklist

After adding images and links, verify:

- [ ] All social media links work
- [ ] All images load correctly (no broken images)
- [ ] Logo appears in header and footer
- [ ] Client portfolio shows all 16 hotels
- [ ] Google Maps loads on contact page
- [ ] Contact form submits successfully
- [ ] Mobile menu works on all pages
- [ ] Navigation dropdown shows all services
- [ ] Footer shows current year automatically
- [ ] All internal links work correctly
- [ ] Favicon appears in browser tab

---

## 🚀 Quick Find & Replace

To replace placeholders across all files at once:

1. **Social Media URLs:**
   - Find: `{{FACEBOOK_URL}}`
   - Replace with your Facebook page URL
   
   - Find: `{{INSTAGRAM_URL}}`
   - Replace with your Instagram profile URL

2. **Test on localhost first:**
   ```bash
   python -m http.server 8000
   ```
   Visit: http://localhost:8000

3. **Deploy to Netlify:**
   - Drag entire `skt-group` folder to Netlify
   - Site goes live immediately

---

**Need help?** Email: skthospitality@gmail.com