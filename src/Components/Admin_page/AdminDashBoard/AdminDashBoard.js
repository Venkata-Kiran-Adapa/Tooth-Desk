import { useState } from "react";
import AdminLandingPage from "../landingPageAdmin/AdminLandingPage";
import Greet from "../../Greet/greet";
import PatientsInfoAdmin from "../patientInfoAdmin/PatientsInfoAdmin";
import RevealOnScroll from "../../Reveal_On_scroll/scroll";
import AdminCalendarView from "../AdminCalenderView/AdminCalendarView";
import IncidentsInfoAdmin from "../IncidentInfoAdmin/IncidentInfoAdmin";
import Footer from "../../home_page/footer/footer";

const adminFooter = (
  <div className="col-md-4 mb-4">
    <h6 className="fw-bold">Navigation</h6>
    <ul className="list-unstyled">
      <li>
        <a href="#" className="text-dark text-decoration-none">
          Home
        </a>
      </li>
      <li>
        <a href="#PatientInfoAdmin" className="text-dark text-decoration-none">
          Manage Patients
        </a>
      </li>
      <li>
        <a href="#incidentInfoAdmin" className="text-dark text-decoration-none">
          Manage Incidents
        </a>
      </li>
      <li>
        <a href="#calendarViewAdmin" className="text-dark text-decoration-none">
          Calendar View
        </a>
      </li>
    </ul>
  </div>
);

function AdminDashboard({ user, incidents, patients }) {
  return (
    <>
      <RevealOnScroll>
        <Greet isAdmin={user.role === "Admin" ? true : false} />
      </RevealOnScroll>
      <RevealOnScroll>
        <AdminLandingPage incidents={incidents} patients={patients} />
      </RevealOnScroll>

      <PatientsInfoAdmin patients={patients} />

      <IncidentsInfoAdmin incidents={incidents} patients={patients} />

      <AdminCalendarView incidents={incidents} patients={patients} />

      <RevealOnScroll>
        <Footer footer={adminFooter} />
      </RevealOnScroll>
    </>
  );
}

export default AdminDashboard;
