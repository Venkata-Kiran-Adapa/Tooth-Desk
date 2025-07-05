import Greet from "../../Greet/greet.js";
import RevealOnScroll from "../../Reveal_On_scroll/scroll.js";
import PatientProfileCard from "../profile_Card/profile_card.js";
import UpcomingAppointments from "../upcoming_Appointments/upcoming_Appointments.js";
import AppointmentHistory from "../past_Appointments/past_Appointments.js";
import Footer from "../../home_page/footer/footer.js";

const patientFooter = (
  <div className="col-md-4 mb-4">
    <h6 className="fw-bold">Navigation</h6>
    <ul className="list-unstyled">
      <li>
        <a href="#" className="text-dark text-decoration-none">
          Home
        </a>
      </li>
      <li>
        <a href="#PatientHistory" className="text-dark text-decoration-none">
            Appointment History
        </a>
      </li>
    
    </ul>
  </div>
);



function Patient_Dashboard({ user, incidents, patients }) {
  const isAdmin = user.role === "admin";

  let patientsList = [];
  let incidentsList = [];

  try {
    const storedPatients = JSON.parse(localStorage.getItem("patients"));
    patientsList =
      Array.isArray(storedPatients) && storedPatients.length > 0
        ? storedPatients
        : patients;
  } catch {
    patientsList = patients;
  }

  try {
    const storedIncidents = JSON.parse(localStorage.getItem("incidents"));
    incidentsList =
      Array.isArray(storedIncidents) && storedIncidents.length > 0
        ? storedIncidents
        : incidents;
  } catch {
    incidentsList = incidents;
  }

  let patient = null;
  if (!isAdmin) {
    patient = patientsList.find((patient) => user.patientId === patient.id);
  }

  let patientIncidents = [];
  if (patient) {
    patientIncidents = incidentsList.filter(
      (incident) => incident.patientId === patient.id
    );
    localStorage.setItem(patient.id, JSON.stringify(patientIncidents));
  }

  return (
    <div className="mx-2">
      <RevealOnScroll>
        <Greet isAdmin={isAdmin} patient={patient} />
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="d-flex flex-column flex-md-row mt-5">
          <PatientProfileCard patient={patient} />
          <UpcomingAppointments patientIncidents={patientIncidents} />
        </div>
      </RevealOnScroll>

      <AppointmentHistory patientIncidents={patientIncidents} />

      <RevealOnScroll>
        <Footer footer={patientFooter} />
      </RevealOnScroll>
    </div>
  );
}

export default Patient_Dashboard;
