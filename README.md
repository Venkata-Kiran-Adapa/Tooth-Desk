# Tooth Desk 🦷

**Tooth Desk** is a responsive Dental Center Management Dashboard built using **React.js** and **Bootstrap**. It offers role-based access for both **Admin** and **Patients** and includes seamless localStorage-based authentication, appointment tracking, incident/document management, and more.

---

## 🔑 Login Credentials

| Role    | Email              | Password   |
|---------|--------------------|------------|
| Admin   | admin@entnt.in     | admin123   |
| Patient | john@entnt.in      | patient123 |

---

## ✨ Features

### 🔐 Authentication
- Simulated login/logout system
- Admin and Patient roles with localStorage session persistence

### 👨‍⚕️ Admin Dashboard
- View and manage all registered patients
- Add, edit, and review incidents (dental cases) per patient
- Upload and access supporting documents (PDFs, images)
- Calendar view of all appointments

### 🧑‍💼 Patient Dashboard
- Personalized greeting
- View **upcoming appointments** (based on current date and status)
- Review **appointment history** with details like:
  - Visit reason
  - Notes
  - Cost
  - Status
  - Attached documents (viewable in-browser)

### 🏠 Landing Page (for unauthenticated users)
- Engaging hero section with inspirational quote and animated image carousel
- Services section: Fluoride Treatment, Cavity Filling, Teeth Whitening
- Appointment prompt with call-to-action
- Testimonials carousel from previous patients
- Footer with contact details and navigation

### 📁 Incident Structure Example
```json
{
  "id": "i2",
  "patientId": "p1",
  "title": "Dental Cleaning",
  "description": "Routine cleaning and polishing",
  "comments": "Requested fluoride treatment",
  "appointmentDate": "2025-07-08T09:30:00",
  "cost": 60,
  "status": "Scheduled",
  "files": [
    {
      "name": "cleaning-record.pdf",
      "url": "https://file-examples.com/..."
    }
  ]
}
```

---

## 🧰 Tech Stack

- **Frontend**: React.js (Functional Components, Hooks)
- **Styling**: Bootstrap 5 (grid, navbar, cards, carousel)
- **State Management**: useState, useEffect

- **Data Storage**: localStorage
- **Animations**: Scroll-based reveal with `react-intersection-observer`

---

## 📁 Folder Structure (Partial)
```
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── images
├── src/
│   ├── Components/
│   │   ├── Admin_page/
│   │   │   ├── AdminCalenderView/
│   │   │   │   └── AdminCalendarView.js
│   │   │   ├── AdminDashBoard/
│   │   │   │   └── AdminDashBoard.js
│   │   │   ├── IncidentInfoAdmin/
│   │   │   │   └── IncidentInfoAdmin.js
│   │   │   ├── landingPageAdmin/
│   │   │   │   └── AdminLandingPage.js
│   │   │   └── PatientsInfoAdmin/
│   │   │       └── PatientsInfoAdmin.js
│   │   ├── greet.js
│   │   ├── home_page/
│   │   │   ├── Header/
│   │   │   │   └── Header.js
│   │   │   ├── Landing_Page/
│   │   │   │   └── Main.js
│   │   │   ├── Services/
│   │   │   │   └── Service.js
│   │   │   └── Testimonials/
│   │   │       └── Testimonial.js
│   │   ├── Login_Page/
│   │   │   └── Login.js
│   │   ├── Patient_page/
│   │   │   ├── past_Appointments/
│   │   │   │   └── past_Appointments.js
│   │   │   ├── Patient_DashBoard/
│   │   │   │   └── Patient_DashBoard.js
│   │   │   ├── profile_Card/
│   │   │   │   ├── profile_card.css
│   │   │   │   └── profile_card.js
│   │   │   └── upcoming_Appointments/
│   │   │       └── upcoming_Appointments.js
│   │   ├── Reveal_On_scroll/
│   │   │   ├── scroll.css
│   │   │   └── scroll.js
│   │   ├── appointment/
│   │   │   └── appointment.js
│   │   ├── footer/
│   │       └── footer.js
│   ├── App.js
│   ├── index.css
│   └── index.js
```

---

## 📌 Usage
1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Login with credentials above to explore the Admin or Patient view

---
