# Professional Portfolio Website

> A modern, responsive personal portfolio website showcasing professional achievements, certifications, community engagement, and volunteer work.

## 🎯 About

This repository hosts my personal portfolio website, built to highlight my skills, work experience, certifications, professional development, community memberships, and volunteer contributions. The portfolio reflects my commitment to digital transformation, governance, sustainability initiatives, and community leadership.

**Live Demo:** Available via GitHub Pages

## 👤 Professional Profile

**Name:** AElGioushy

**Title:** Professional | Digital Transformation | Community Leader

**Background:** With expertise spanning Legal Studies, International Relations, Logistics, Digital Transformation, Governance, and Artificial Intelligence, I am dedicated to driving positive change through community leadership and sustainable solutions.

## 🏆 Key Achievements

### Certifications & Professional Development
- **AI Ambassadors Program – Basic Level** (2025)
- **AI Ambassadors Program – Advanced Level** (2025)
- **Governance and Digital Transformation Program – Basic Level** (2025)
- **Governance and Digital Transformation Program – Advanced Level** (2025)

### Organizational Memberships
- **Official Member** - Engineers for Sustainable Egypt Foundation (2025)
  - Dedicated to promoting engineering solutions for sustainable development and environmental stewardship
  - Active contributor to initiatives bridging technology and sustainability

### Community & Volunteer Work
- **Event Coordination & Graduation Activities** - Engineers for Sustainable Egypt Foundation
  - Coordinated graduation events and celebration activities for Cohorts 5, 6, and 7
  - Ensured seamless execution of large-scale community events

- **Youth Empowerment & Leadership Development**
  - Mentoring and guidance for emerging young professionals
  - Facilitating leadership training and career development support

- **Digital Awareness & Sustainability Advocacy**
  - Promoting digital literacy and sustainable practices
  - Delivering educational content on digital transformation and governance

## 🎓 Skills & Expertise

### Professional Competencies
- Artificial Intelligence Awareness
- Digital Transformation
- Governance Principles
- Sustainability Initiatives
- Community Leadership
- Public Communication
- Event Coordination
- Strategic Thinking
- Legal Analysis & Studies
- International Relations
- Logistics & Operations
- Youth Empowerment

## 🏗️ Project Structure

```
.
├── src/
│   ├── Components/
│   │   ├── About.jsx              # About me section with skills
│   │   ├── Certifications.jsx     # Professional certifications showcase
│   │   ├── Organizations.jsx      # Memberships and organizational affiliations
│   ���   ├── Volunteering.jsx       # Volunteer experience and community engagement
│   │   ├── Portfolio.jsx          # Projects and initiatives
│   │   ├── Header.jsx             # Navigation header
│   │   ├── Home.jsx               # Hero section
│   │   └── Footer.jsx             # Contact and social links
│   ├── images/                    # Image assets
│   ├── styles.css                 # Global styling with animations
│   ├── App.jsx                    # Main application component
│   ├── index.js                   # Application entry point
│   └── index.html                 # HTML template
├── package.json                   # Project dependencies
├── .eslintrc                      # ESLint configuration
├── .prettierrc                    # Prettier configuration
└── README.md                      # This file
```

## 🛠️ Technology Stack

- **Frontend:** React.js
- **Styling:** CSS3 with modern animations and transitions
- **Build Tool:** Parcel
- **Code Quality:** ESLint & Prettier
- **Hosting:** GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AElGioushy/AEGioushy-portfolio.git
cd AEGioushy-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:1234
```

## 📝 Customization

### Update Personal Information

Edit `src/App.jsx` to update your personal information:

```javascript
const siteProps = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  gitHub: "your-github-username",
  linkedIn: "your-linkedin-profile",
  // ... other social links
};
```

### Update About Section

Edit `src/Components/About.jsx` to customize:
- `description` - Short professional summary
- `skillsList` - Array of professional skills
- `detailOrQuote` - Longer professional statement

### Update Certifications

Edit `src/Components/Certifications.jsx` to add or modify:
- Certification titles
- Issuing organizations
- Year obtained
- Descriptions

### Update Organizations

Edit `src/Components/Organizations.jsx` to manage:
- Organization names and roles
- Membership descriptions
- Focus areas and key initiatives

### Update Volunteer Experience

Edit `src/Components/Volunteering.jsx` to showcase:
- Volunteer positions and roles
- Organizations and initiatives
- Descriptions and key responsibilities

### Update Portfolio Projects

Edit `src/Components/Portfolio.jsx` to feature:
- Project titles and descriptions
- Links to live demos or repositories

### Update Images

Replace images in `src/images/` directory:
- `woman-with-tablet.jpg` - Home/Hero section background
- `motion-background.jpg` - About section background
- `design-desk.jpeg` - Portfolio section image

## 🎨 Design Features

### Modern UI/UX
- Clean, professional layout
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Elegant card-based layouts
- Interactive hover effects

### Animations & Transitions
- Fade in/out effects
- Slide animations
- Hover interactions on cards
- Social icon animations
- Smooth color transitions

### Accessibility
- Semantic HTML
- Proper color contrast
- Alt text for images
- Keyboard navigation support

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly on:
- Desktop (1920px and above)
- Tablets (768px - 1024px)
- Mobile devices (480px - 767px)

## 🚢 Deployment

### Deploy to GitHub Pages

1. Update `package.json` with your repository information:
```json
{
  "homepage": "https://aelgioushy.github.io/AEGioushy-portfolio",
  "scripts": {
    "build-gh": "parcel build src/index.html --public-url /AEGioushy-portfolio/",
    "deploy": "npm run build-gh && gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

4. Go to repository Settings → Pages and ensure the source is set to `gh-pages` branch.

### Deploy to Azure Static Web Apps

1. Create an Azure account and Static Web App resource
2. Connect your GitHub repository
3. Configure build settings:
   - Build location: `/`
   - App location: `.`
   - Output location: `dist`

## 📋 Best Practices

- **Clean Code:** Well-organized, readable component structure
- **Performance:** Optimized bundle size and lazy loading
- **SEO:** Semantic HTML and proper meta tags
- **Accessibility:** WCAG compliant with proper ARIA labels
- **Version Control:** Meaningful commit messages and branch strategy
- **Testing:** Component testing with React Testing Library

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and adapt it for your own use.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **GitHub:** [@AElGioushy](https://github.com/AElGioushy)
- **LinkedIn:** [AElGioushy](https://linkedin.com/in/aelgioushy)
- **Email:** aelgioushy@example.com

## ✨ Features Highlights

✅ **Comprehensive Professional Profile** - Showcase your full career journey
✅ **Certifications Section** - Display professional development achievements
✅ **Organizations & Memberships** - Highlight your professional affiliations
✅ **Volunteering & Community** - Feature your community engagement and impact
✅ **Modern Design** - Professional, clean, and recruiter-friendly aesthetics
✅ **Responsive & Mobile-Friendly** - Works perfectly on all devices
✅ **Smooth Animations** - Engaging user experience with modern transitions
✅ **SEO Optimized** - Proper structure for search engine visibility
✅ **Easy to Customize** - Simple component structure for quick updates
✅ **Accessibility First** - WCAG compliant and inclusive design

---

**Last Updated:** May 2026

*This portfolio represents a commitment to professional excellence, continuous learning, and positive community impact.*
