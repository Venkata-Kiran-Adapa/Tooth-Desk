import Header from "./home_page/Header/Header.js";
import Reveal_on_scroll from "./Reveal_On_scroll/scroll.js";
import Main from "./home_page/Landing_Page/Main.js";
import Patient_Dashboard from "./Patient_page/patient_DashBoard/Patient_DashBoard";
import AdminDashboard from "./Admin_page/AdminDashBoard/AdminDashBoard.js";
import Service from "./home_page/Services/Service.js";
import Appointment from "./home_page/appointment/appointment.js";
import Testimonials from "./home_page/Testimonials/Testimonial.js";
import Footer from "./home_page/footer/footer.js";
import Login from "./Login_Page/Login.js";
import { useState, useEffect } from "react";

const incidents = [
  {
    id: "i1",
    patientId: "p1",
    title: "Toothache",
    description: "Upper molar pain",
    comments: "Sensitive to cold",
    appointmentDate: "2025-07-01T10:00:00",
    cost: 80,
    status: "Completed",
    files: [
      {
        name: "invoice.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        name: "xray.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dental_X-ray.jpg/800px-Dental_X-ray.jpg",
      },
    ],
  },
  {
    id: "i2",
    patientId: "p1",
    title: "Dental Cleaning",
    description: "Routine cleaning and polishing",
    comments: "Requested fluoride treatment",
    appointmentDate: "2025-07-08T09:30:00",
    cost: 60,
    status: "Scheduled",
    files: [
      {
        name: "cleaning-record.pdf",
        url: "https://file-examples.com/storage/fe6bc079e4eeb4be9439e71/2017/10/file-example_PDF_1MB.pdf",
      },
    ],
  },
  {
    id: "i3",
    patientId: "p1",
    title: "Wisdom Tooth Consultation",
    description: "Evaluation for wisdom tooth extraction",
    comments: "Mild swelling near gums",
    appointmentDate: "2025-07-15T11:00:00",
    cost: 100,
    status: "Scheduled",
    files: [
      {
        name: "wisdom-xray.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wisdom_tooth_impacted.jpg",
      },
    ],
  },
  {
    id: "i4",
    patientId: "p1",
    title: "Follow-up Checkup",
    description: "Review healing after previous treatment",
    comments: "No issues reported",
    appointmentDate: "2025-06-25T10:00:00",
    cost: 50,
    status: "Completed",
    files: [
      {
        name: "followup-note.pdf",
        url: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
      },
    ],
  },
  {
    id: "i5",
    patientId: "p1",
    title: "Braces Tightening",
    description: "Routine tightening session",
    comments: "Slight discomfort expected",
    appointmentDate: "2025-07-04T16:00:00",
    cost: 90,
    status: "Scheduled",
    files: [
      {
        name: "treatment-plan.pdf",
        url: "https://www.orimi.com/pdf-test.pdf",
      },
    ],
  },
  {
    id: "i6",
    patientId: "p1",
    title: "Root Canal Consultation",
    description: "Assessment for potential root canal treatment",
    comments: "Persistent pain in lower molar",
    appointmentDate: "2025-07-20T14:45:00",
    cost: 150,
    status: "Scheduled",
    files: [
      {
        name: "pain-report.pdf",
        url: "https://africau.edu/images/default/sample.pdf",
      },
      {
        name: "initial-diagnosis.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tooth_diagram_front_and_side_view.svg/512px-Tooth_diagram_front_and_side_view.svg.png",
      },
    ],
  },
   {
    id: "i7",
    patientId: "p2",
    title: "Follow-up Root Canal",
    description: "Post-treatment checkup for root canal",
    comments: "Healing well, no signs of infection",
    appointmentDate: "2025-07-02T11:30:00",
    cost: 70,
    status: "Completed",
    files: [
      {
        name: "root-canal-summary.pdf",
        url: "https://www.orimi.com/pdf-test.pdf",
      },
    ],
  },
  {
    id: "i8",
    patientId: "p3",
    title: "Wisdom Tooth Extraction",
    description: "Surgical extraction of lower wisdom tooth",
    comments: "Patient advised rest and soft foods",
    appointmentDate: "2025-07-03T13:00:00",
    cost: 200,
    status: "Completed",
    files: [
      {
        name: "xray-before.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wisdom_tooth_impacted.jpg",
      },
      {
        name: "post-op-instructions.pdf",
        url: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
      },
    ],
  },
  {
    id: "i9",
    patientId: "p4",
    title: "Braces Adjustment",
    description: "Monthly tightening and progress check",
    comments: "Minor irritation reported; wax provided",
    appointmentDate: "2025-07-05T10:00:00",
    cost: 80,
    status: "Scheduled",
    files: [
      {
        name: "braces-progress.pdf",
        url: "https://file-examples.com/storage/fe6bc079e4eeb4be9439e71/2017/10/file-example_PDF_1MB.pdf",
      },
    ],
  },
  {
    id: "i10",
    patientId: "p5",
    title: "Gum Treatment",
    description: "Deep cleaning and periodontal check",
    comments: "Scheduled follow-up in 1 month",
    appointmentDate: "2025-07-06T15:00:00",
    cost: 120,
    status: "Completed",
    files: [
      {
        name: "gum-treatment-report.pdf",
        url: "https://africau.edu/images/default/sample.pdf",
      },
    ],
  },
  {
    id: "i11",
    patientId: "p6",
    title: "Tooth Filling Review",
    description: "Check for sensitivity post-filling",
    comments: "No pain; everything looks stable",
    appointmentDate: "2025-07-07T09:15:00",
    cost: 60,
    status: "Scheduled",
    files: [
      {
        name: "filling-detail.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
    ],
  },
];

const patients = [
  {
    id: "p1",
    name: "John Doe",
    dob: "1990-05-10",
    contact: "1234567890",
    healthInfo: "No allergies",
  },
  {
  id: "p2",
  name: "Emily Carter",
  dob: "1987-09-12",
  contact: "9876543210",
  healthInfo: "Recent root canal; avoid cold beverages"
},
{
  id: "p3",
  name: "Ravi Kumar",
  dob: "1994-02-28",
  contact: "9123456780",
  healthInfo: "Wisdom tooth extraction pending"
},
{
  id: "p4",
  name: "Aisha Khan",
  dob: "2001-07-10",
  contact: "8012345678",
  healthInfo: "Braces installed; follow-up in 2 weeks"
},
{
  id: "p5",
  name: "James Rodriguez",
  dob: "1975-04-19",
  contact: "7012345678",
  healthInfo: "Gum sensitivity; prescribed medicated rinse"
},
{
  id: "p6",
  name: "Sneha Verma",
  dob: "1990-12-05",
  contact: "9988776655",
  healthInfo: "Tooth filling done last visit; monitor for pain"
}

];


function App() {
  const [Logbtn, setLogbtn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const handleLogbtn = () => {
    if (Logbtn) {
      setLogbtn(false);
      return;
    }
    setLogbtn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    setUser(null);
    setLogbtn(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const landingHeader = (
    <ul className="navbar-nav mx-auto fs-5">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">
          Home
        </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#appointments">
                Appointment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#patients">
                Testimonials
              </a>
            </li>
          </ul>
  )

  const patientHeader = (
     <ul className="navbar-nav mx-auto fs-5">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">
          Home
        </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#PatientHistory">
                Appointment History
              </a>
            </li>
          </ul>
  )

  const adminHeader = (
     <ul className="navbar-nav mx-auto fs-5">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">
          Home
        </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#PatientInfoAdmin">
                Manage Patients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#incidentInfoAdmin">
                Manage Incidents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark " href="#calendarViewAdmin">
                Calendar View
              </a>
            </li>
          </ul>
  )

  const landingFooter=(
    <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-dark text-decoration-none">Services</a></li>
               <li><a href="#appointments" className="text-dark text-decoration-none">Appointment</a></li>
              <li><a href="#patients" className="text-dark text-decoration-none">Testimonials</a></li>
            </ul>
          </div>
  )

  return (
    <div className="App ">
      <Header
        onLoginbtn={handleLogbtn}
        Logbtn={Logbtn}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
       >
        { isLoggedIn && user.role=== "Patient" ? patientHeader : isLoggedIn && user.role === "Admin" ? adminHeader : landingHeader}
       </Header>
      {Logbtn ? (
        <Login
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          setLogbtn={setLogbtn}
        />
      ) : isLoggedIn && user?.role === "Admin" ? (
         <AdminDashboard user={user} incidents={incidents} patients={patients} />
      ) : isLoggedIn && user?.role === "Patient" ? (
           <Patient_Dashboard user={user} incidents={incidents} patients={patients} />
      ) : (
        <>
          <Reveal_on_scroll>
            <Main />
          </Reveal_on_scroll>
          <Reveal_on_scroll>
            <Service />
          </Reveal_on_scroll>
          <Reveal_on_scroll>
            <Appointment />
          </Reveal_on_scroll>
          <Reveal_on_scroll>
            <Testimonials />
          </Reveal_on_scroll>
          <Reveal_on_scroll>
            <Footer  footer={landingFooter}/>
          </Reveal_on_scroll>
        </>
      )}
    </div>
  );
}

export default App;
