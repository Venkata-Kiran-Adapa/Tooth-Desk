import RevealOnScroll from "../../Reveal_On_scroll/scroll";

function AdminLandingPage({ incidents, patients }) {
  const incidentsStored = localStorage.getItem("incidents");
  const patientsStored = localStorage.getItem("patients");
  if (incidentsStored) {
    try {
      const parsed = JSON.parse(incidentsStored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        incidents = parsed;
      }
    } catch (e) {
      console.error("Invalid JSON in incidents localStorage", e);
    }
  }
  if (patientsStored) {
    try {
      const parsed = JSON.parse(patientsStored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        patients = parsed;
      }
    } catch (e) {
      console.error("Invalid JSON in patients localStorage", e);
    }
  }

  return (
    <>
      <RevealOnScroll>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 p-md-4" id="AdminLandingPage">
          <NextAppointmentsForAdmin incidents={incidents} patients={patients} />
          <TopPatientsForAdmin incidents={incidents} patients={patients} />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 p-md-4">
          <PendingVsCompletedAppointments incidents={incidents} />
          <AdminRevenue incidents={incidents} />
        </div>
      </RevealOnScroll>
    </>
  );
}

export default AdminLandingPage;

function NextAppointmentsForAdmin({ incidents, patients }) {
  const scheduledAppointments = incidents.filter(
    (incident) => incident.status !== "Completed"
  );

  return (
    <div className=" shadow rounded m-md-4 w-100">
      <h4 className=" mb-3">Upcoming Appointments 🦷</h4>
      <ul
        className="list-group"
        style={{ maxHeight: "275px", overflowY: "auto" }}
      >
        {scheduledAppointments
          .sort(
            (a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate)
          )
          .map((incident) => (
            <li
              key={incident.id}
              className="list-group-item d-flex justify-content-between align-items-center mt-3"
            >
              <div>
                <strong>{incident.title}</strong>
                <br />
                <small className="">
                  {patients.find((p) => p.id === incident.patientId)?.name}{" "}
                  &middot; {new Date(incident.appointmentDate).toLocaleString()}
                </small>
              </div>
              <span
                className={`badge ${
                  incident.status === "Completed"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {incident.status}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

function TopPatientsForAdmin({ patients, incidents }) {

 const patientsWithCounts = patients.map((patient) => {
    const count = incidents.filter(
      (incident) => incident.patientId === patient.id
    ).length;
    return { ...patient, incidentsCount: count };
  });

  const sortedPatients = patientsWithCounts.sort(
    (a, b) => b.incidentsCount - a.incidentsCount
  );

  return (
    <div className="shadow rounded p-md-4 w-100 ">
      <h4 className="mb-3">Top Patients 🏆</h4>
      <ul
        className="list-group"
        style={{ maxHeight: "275px", overflowY: "auto" }}
      >
        {sortedPatients.slice(0, 5).map((patient) => {
          const patientIncidents = incidents.filter(
            (incident) => incident.patientId === patient.id
          );
          const patientincidentsCount = patientIncidents.length;
          return (
            <li
              key={patient.id}
              className="list-group-item  mt-2 d-flex justify-content-between align-items-center"
            >
              <div className="text-center">
                <strong>{patient.name}</strong>{" "}
                <small> {patient.healthInfo}</small>
              </div>
              <span className="badge bg-primary">
                {patientincidentsCount} Appointments
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PendingVsCompletedAppointments({ incidents }) {
  const scheduledCount = incidents.filter(
    (incident) => incident.status === "Scheduled"
  ).length;
  const completedCount = incidents.filter(
    (incident) => incident.status === "Completed"
  ).length;

  return (
    <div className="shadow  rounded  w-100 m-md-4 p-md-2">
      <h4 className="mb-3 display-6">Pending vs Completed</h4>
      <h3 className="fw-lighter">Treatments</h3>
      <div className="d-flex mt-3 justify-content-around">
        <div>
          <h3 className="text-center text-danger display-3 fw-medium">
            {scheduledCount}
          </h3>
          <p className="fs-3">Pending</p>
        </div>
        <div>
          <h3 className="text-center text-success display-3 fw-medium">
            {completedCount}
          </h3>
          <p className="fs-3">Completed</p>
        </div>
      </div>
    </div>
  );
}

function AdminRevenue({ incidents }) {
  const totalRevenue = incidents.reduce((acc, incident) => {
    if (incident.status === "Completed") {
      return acc + incident.cost;
    }
    return acc;
  }, 0);

  return (
    <div
      className="shadow rounded my-4 p-md-4 w-100"
      style={{ height: "100%" }}
    >
      <h4 className="my-3">Total Revenue 💰</h4>
      <h3 className="text-center display-4 fw-medium">
        ${totalRevenue.toFixed(2)}
      </h3>
    </div>
  );
}
