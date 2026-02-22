

# Potency - Corporate HR Website Plan

## Overview
A modern, bilingual (Portuguese/English) corporate website for Potency, a Human Resources company with 13+ years of experience. Bold & Modern design with strong orange accents, dynamic shapes, and professional typography.

---

## 🎨 Visual Identity & Design System

- **Primary Colors**: Vibrant orange (#F97316) and white
- **Accent Colors**: Dark charcoal for text, subtle grays for backgrounds
- **Style**: Bold gradients, dynamic diagonal shapes, smooth animations
- **Typography**: Strong hierarchical typography with bold headings
- **Components**: Glass-morphism effects, floating cards with shadows, hover animations

---

## 📄 Website Structure

### 1. Global Components
- **Navigation Bar**: Logo, menu links, language switcher (PT/EN), "Contact Us" CTA button
- **Footer**: Company info, navigation links, contact details, social media, copyright
- **Language Switcher**: Toggle between Portuguese and English throughout the site

---

### 2. Homepage Sections

#### Hero Section
- Bold headline: "Maximize the potential of your company or business"
- Subheadline about experienced HR consulting services
- Two CTA buttons: "View Open Positions" and "Contact Us"
- Dynamic background with orange gradient and geometric shapes
- Professional business imagery

#### About Section
- Company overview with 13+ years of experience
- Mission statement
- Key differentiators (agile, qualified professionals, exceeding expectations)
- Statistics/counters (years, clients, placements)

#### Services Section
- 8 service cards in a responsive grid:
  1. Recruitment and Selection
  2. Temporary Workforce
  3. Outsourcing Services
  4. Permanent Hiring
  5. Payroll Administration
  6. Social Charges and Tax Collection
  7. Employee Salary Payments
  8. Compliance with Labor and Tax Obligations
- Each card: Icon, title, short description
- Hover animations for interactivity

#### Job Openings Preview
- Featured job listings (3-4 cards)
- "View All Positions" button linking to Jobs page
- Job cards showing: title, location, contract type, "Apply" button

#### Company CTA Section
- Bold section: "Company, advertise your job opening with us!"
- Eye-catching design with CTA button
- Benefits for companies using Potency's services

#### Partners Section
- Responsive logo grid layout
- Designed to auto-display uploaded partner images
- Placeholder structure ready for manual image uploads later
- Partner logos: INMETRA, SINDEPRESTEM, and space for more

#### Contact Preview
- Quick contact info display
- Link to full contact page

---

### 3. Jobs Page (`/jobs`)
- Search bar for job filtering
- Filter options: Location, contract type, category
- Job listings grid/list
- Each job card: Title, location, contract type, description preview, "Apply" button
- Mock job data structured for easy API replacement

---

### 4. Candidate Area

#### Login/Signup Pages (`/login`, `/register`)
- Clean authentication forms
- Social login placeholders
- Password recovery option
- Terms and conditions checkbox

#### Candidate Dashboard (`/dashboard`)
- Welcome message with user name
- Profile summary card
- Resume upload section (UI ready, mock functionality)
- Applied jobs list with status indicators:
  - Pending
  - Under Review
  - Interview Scheduled
  - Accepted/Rejected
- Quick actions panel

#### Profile Page (`/profile`)
- Personal information form
- Professional experience section
- Education details
- Skills and languages
- Resume upload/download

---

### 5. Contact Page (`/contact`)
- Contact form with fields: Name, Email, Phone, Subject, Message
- Embedded Google Map (Santo Amaro, São Paulo)
- Address: Rua Manuel Borba, 163 – Santo Amaro – São Paulo
- Phone: (11) 5523-2311
- Business hours:
  - Mon-Thu: 08:00 - 18:00
  - Fri: 08:00 - 17:00

---

### 6. Services Page (`/services`)
- Detailed service descriptions
- Expanded information for each of the 8 services
- Visual icons and illustrations

---

### 7. About Page (`/about`)
- Full company history
- Team section placeholder
- Values and mission
- Why choose Potency

---

## 🌐 Bilingual Support
- Language context for Portuguese and English
- All text content translatable
- Language preference stored locally
- Flag icons or language toggle in navigation

---

## 🔧 Technical Architecture

### API-Ready Structure
- All job data in centralized mock data files
- Service interfaces defined for future API integration
- Authentication flow prepared for backend connection
- Form submissions structured for API endpoints

### Component Organization
- Reusable UI components
- Page-level components
- Layout components (Header, Footer, etc.)
- Feature components (JobCard, ServiceCard, etc.)

---

## 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop breakpoints
- Mobile hamburger navigation
- Touch-friendly interactions

---

## ✨ Animations & Interactions
- Smooth scroll animations
- Hover effects on cards and buttons
- Page transitions
- Loading states
- Form validation feedback

