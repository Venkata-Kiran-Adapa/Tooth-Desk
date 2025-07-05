function AppointmentHistory({ patientIncidents }) {
  return (
    <div className="mt-4" id="PatientHistory">
      <h4 className="bg-light text-dark p-2 text-center">Your Appointment History</h4>
      {patientIncidents.length === 0 ? (
        <p className="text-muted mt-3">Looks like you haven’t had any past visits yet.</p>
      ) : (
        <div className="row mt-5">
          {patientIncidents.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className=" bg-dark text-white card border-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title display-6">{item.title}</h5>
                  <p className="card-text fst-italic">
                    <strong >What it was about:</strong> {item.description}<br />
                    <strong >Notes:</strong> {item.comments}<br />
                    <strong >Visited on:</strong> {new Date(item.appointmentDate).toLocaleString()}<br />
                    <strong >Amount paid:</strong> ₹{item.cost}<br />
                    <strong >Appointment status:</strong> {item.status}
                  </p>
                  {item.files?.length > 0 && (
                    <div>
                      <strong >Attached files:</strong>
                      <ul className="list-unstyled" >
                        {item.files.map((file, index) => (
                          <li key={index}>
                            <a
                            style={{textDecoration: 'none'}}
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              📎 {file.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AppointmentHistory;
