import { useState, useEffect } from "react";

function IncidentsInfoAdmin({ incidents, patients }) {
  const [patientsList, setPatientsList] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("patients"));
    return stored?.length ? stored : patients;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("patients"));
      if (updated) setPatientsList(updated);
    };
    window.addEventListener("storage", handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const [incidentList, setIncidentList] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("incidents"));
    return stored?.length ? stored : incidents;
  });

  useEffect(() => {
    localStorage.setItem("incidents", JSON.stringify(incidentList));
  }, []);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    comments: "",
    appointmentDate: "",
    cost: "",
    status: "Scheduled",
    files: [],
  });

  const [newIncident, setNewIncident] = useState({
    patientId: "",
    title: "",
    description: "",
    comments: "",
    appointmentDate: "",
    cost: "",
    status: "Scheduled",
    files: [],
  });

  const updateLocalStorage = (list) => {
    localStorage.setItem("incidents", JSON.stringify(list));
  };

  const handleNewFileUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setNewIncident((prev) => ({
      ...prev,
      files: [...prev.files, ...files],
    }));
  };

  const handleAddIncident = (e) => {
    e.preventDefault();
    const newId = `i${incidentList.length + 1}`;
    const newEntry = { id: newId, ...newIncident };
    const updatedList = [...incidentList, newEntry];
    setIncidentList(updatedList);
    updateLocalStorage(updatedList);
    setNewIncident({
      patientId: "",
      title: "",
      description: "",
      comments: "",
      appointmentDate: "",
      cost: "",
      status: "Scheduled",
      files: [],
    });
  };

  const handleEdit = (incident) => {
    setEditingId(incident.id);
    setEditForm({ ...incident });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setEditForm((prev) => ({
      ...prev,
      files: [...prev.files, ...files],
    }));
  };

  const handleSave = () => {
    const updated = incidentList.map((i) =>
      i.id === editingId ? { ...editForm } : i
    );
    setIncidentList(updated);
    updateLocalStorage(updated);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updated = incidentList.filter((i) => i.id !== id);
    setIncidentList(updated);
    updateLocalStorage(updated);
  };

  const formatDateTime = (date) => {
    const d = new Date(date);
    return d.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="mx-3 p-4 rounded shadow" id="incidentInfoAdmin">
      <h2 className="text-center mb-4 text-white display-5">
        Incidents Information
      </h2>

      <form onSubmit={handleAddIncident} className="p-3 rounded mb-4">
        <h5 className="mb-3">Add New Incident</h5>
        <div className="row g-3">
          <div className="col-md-6">
            <select
              className="form-control"
              required
              value={newIncident.patientId}
              onChange={(e) =>
                setNewIncident({ ...newIncident, patientId: e.target.value })
              }
            >
              <option value="">Select Patient</option>
              {patientsList.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.id.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              required
              value={newIncident.title}
              onChange={(e) =>
                setNewIncident({ ...newIncident, title: e.target.value })
              }
            />
          </div>
          <div className="col-md-12">
            <textarea
              className="form-control"
              placeholder="Description"
              required
              value={newIncident.description}
              onChange={(e) =>
                setNewIncident({ ...newIncident, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Comments"
              value={newIncident.comments}
              onChange={(e) =>
                setNewIncident({ ...newIncident, comments: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="datetime-local"
              required
              value={newIncident.appointmentDate}
              onChange={(e) =>
                setNewIncident({
                  ...newIncident,
                  appointmentDate: e.target.value,
                })
              }
            />
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="number"
              placeholder="Cost"
              required
              value={newIncident.cost}
              onChange={(e) =>
                setNewIncident({ ...newIncident, cost: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              value={newIncident.status}
              onChange={(e) =>
                setNewIncident({ ...newIncident, status: e.target.value })
              }
            >
              <option>Scheduled</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="file"
              multiple
              onChange={handleNewFileUpload}
            />
          </div>
        </div>
        <div className="mt-3 text-end">
          <button className="btn btn-success">Add Incident</button>
        </div>
      </form>

      <div
        className="row g-4"
         style={{ overflowY: "auto", height: "500px" }}
      >
        {patientsList.map((patient) => {
          const patientIncidents = incidentList.filter(
            (i) => i.patientId === patient.id
          );

          return (
            <div key={patient.id}>
              <h5 className="text-white mb-3">
                {patient.name} ({patient.id.toUpperCase()})
              </h5>
              {patientIncidents.length === 0 ? (
                <p className="text-light fst-italic">No incidents available.</p>
              ) : (
                <div className="row g-4">
                  {patientIncidents.map((incident) => (
                    <div
                      key={incident.id}
                      className="col-md-6 col-lg-4 col-xl-3"
                    >
                      <div className="card bg-dark text-white h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between mb-2">
                            <div className="d-flex justify-content-center align-content-center">
                              <h5 className="card-title">{incident.title}</h5>
                              <span className="badge bg-success text-dark ms-2 align-self-center">
                                {incident.id.toUpperCase()}
                              </span>
                            </div>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-outline-warning align-self-center"
                                title="Edit"
                                onClick={() => handleEdit(incident)}
                              >
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger align-self-center"
                                title="Delete"
                                onClick={() => handleDelete(incident.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </div>

                          {editingId === incident.id ? (
                            <>
                              <input
                                className="form-control mb-2"
                                type="text"
                                value={editForm.title}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    title: e.target.value,
                                  })
                                }
                              />
                              <textarea
                                className="form-control mb-2"
                                value={editForm.description}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    description: e.target.value,
                                  })
                                }
                              ></textarea>
                              <input
                                className="form-control mb-2"
                                type="text"
                                value={editForm.comments}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    comments: e.target.value,
                                  })
                                }
                              />
                              <input
                                className="form-control mb-2"
                                type="datetime-local"
                                value={editForm.appointmentDate}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    appointmentDate: e.target.value,
                                  })
                                }
                              />
                              <input
                                className="form-control mb-2"
                                type="number"
                                value={editForm.cost}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    cost: e.target.value,
                                  })
                                }
                              />
                              <select
                                className="form-control mb-2"
                                value={editForm.status}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    status: e.target.value,
                                  })
                                }
                              >
                                <option>Scheduled</option>
                                <option>Completed</option>
                              </select>
                              <input
                                type="file"
                                className="form-control mb-2"
                                multiple
                                onChange={handleFileUpload}
                              />
                              <button
                                className="btn btn-success w-100"
                                onClick={handleSave}
                              >
                                Save Changes
                              </button>
                            </>
                          ) : (
                            <>
                              <p>
                                <strong>Description:</strong>{" "}
                                {incident.description}
                              </p>
                              <p>
                                <strong>Comments:</strong> {incident.comments}
                              </p>
                              <p>
                                <strong>Appointment:</strong>{" "}
                                {formatDateTime(incident.appointmentDate)}
                              </p>
                              <p>
                                <strong>Cost:</strong> ₹{incident.cost}
                              </p>
                              <p>
                                <strong>Status:</strong> {incident.status}
                              </p>
                              <div>
                                <strong>Files:</strong>
                                <ul className="mt-2">
                                  {incident.files.map((file, idx) => (
                                    <li key={idx}>
                                      <a
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white"
                                      >
                                        {file.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IncidentsInfoAdmin;
