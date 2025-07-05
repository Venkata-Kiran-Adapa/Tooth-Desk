function UpcomingAppointments({ patientIncidents }) {
  const upcoming = Array.isArray(patientIncidents)
    ? patientIncidents.filter(
        (incident) =>
          incident.status !== "Completed" &&
          new Date(incident.appointmentDate) > new Date()
      )
    : [];

  return (
    <div id="upcoming-appointments" className="mx-3 mt-3 mt-md-1 py-3 ">
      <h2 className="mb-3 bg-danger p-3 text-center text-white">
        Upcoming Appointments
      </h2>

      {upcoming.length === 0 ? (
        <div className="appointment-list">
          <h5>No Upcoming Appointments Available..! 🙂</h5>
        </div>
      ) : (
        <div className="appointment-list">
          <ul className="list-group">
            {upcoming.map((incident) => (
              <li key={incident.id} className="list-group-item my-3">
                <strong>{incident.title}</strong> — {incident.description} —{" "}
                {new Date(incident.appointmentDate).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UpcomingAppointments;
