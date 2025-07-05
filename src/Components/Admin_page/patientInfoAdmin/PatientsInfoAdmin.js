import { useEffect, useState } from "react";

function PatientsInfoAdmin({ patients }) {
  const [patientsList, setPatients] = useState(patients);
  const [editingId, setEditingId] = useState(null);

  const [newPatient, setNewPatient] = useState({
    name: "",
    dob: "",
    contact: "",
    healthInfo: "",
  });

  const [editForm, setEditForm] = useState({
    name: "",
    dob: "",
    contact: "",
    healthInfo: "",
  });

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients"));
    if (storedPatients?.length) {
      setPatients(storedPatients);
    } else {
      // Use If you Deleted All the Existed Patients List To add as the existed are deleted by you myan
      localStorage.setItem("patients", JSON.stringify(patients));
    }
  }, [patients]);

  const handleAddPatient = (e) => {
    e.preventDefault();

    const id = "p" + (patientsList.length + 1);
    const newEntry = { id, ...newPatient };
    const updatedList = [...patientsList, newEntry];
    setPatients(updatedList);
    localStorage.setItem("patients", JSON.stringify(updatedList));
    setNewPatient({ name: "", dob: "", contact: "", healthInfo: "" });
  };

  const handleDelete = (id) => {
    const updated = patientsList.filter((p) => p.id !== id);
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
    if (editingId === id) setEditingId(null);
  };

  const handleEdit = (patient) => {
    setEditingId(patient.id);
    setEditForm({
      name: patient.name,
      dob: patient.dob,
      contact: patient.contact,
      healthInfo: patient.healthInfo,
    });
  };

  const handleSaveEdit = (id) => {
    const updated = patientsList.map((p) =>
      p.id === id ? { ...p, ...editForm } : p
    );
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
    setEditingId(null);
  };

  return (
    <div className=" mx-3 p-4 rounded shadow" id="PatientInfoAdmin">
      <h2 className="text-center mb-4 text-white display-5">
        Patients Information 🧑‍⚕️
      </h2>

      <form onSubmit={handleAddPatient} className="mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={newPatient.name}
              onChange={(e) =>
                setNewPatient({ ...newPatient, name: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="date"
              className="form-control"
              value={newPatient.dob}
              onChange={(e) =>
                setNewPatient({ ...newPatient, dob: e.target.value })
              }
              required
            />
          </div>

          <div className="col-md-2">
            <input
              type="tel"
              name="contact"
              placeholder="Contact"
              className="form-control"
              value={newPatient.contact}
              onChange={(e) =>
                setNewPatient({ ...newPatient, contact: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="healthInfo"
              placeholder="Health Info"
              className="form-control"
              value={newPatient.healthInfo}
              onChange={(e) =>
                setNewPatient({ ...newPatient, healthInfo: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </div>
      </form>

      <div className="row g-4">
        {patientsList.length > 0 ? (
          patientsList.map((patient) => (
            <div key={patient.id} className="col-md-6 col-lg-4">
              <div className="card bg-dark text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="d-flex">
                      <h5 className="card-title">{patient.name}</h5>
                      <span className="ms-2 badge bg-success align-self-center">
                        {patient.id.toUpperCase()}
                      </span>
                    </div>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-outline-light"
                        title="Edit"
                        onClick={() => handleEdit(patient)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-outline-light"
                        title="Delete"
                        onClick={() => handleDelete(patient.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>

                  {editingId === patient.id ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        className="form-control mb-2"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />

                      <input
                        type="date"
                        name="dob"
                        className="form-control mb-2"
                        value={editForm.dob}
                        onChange={(e) =>
                          setEditForm({ ...editForm, dob: e.target.value })
                        }
                      />
                      <input
                        type="tel"
                        name="contact"
                        className="form-control mb-2"
                        value={editForm.contact}
                        onChange={(e) =>
                          setEditForm({ ...editForm, contact: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        name="healthInfo"
                        className="form-control mb-2"
                        value={editForm.healthInfo}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            healthInfo: e.target.value,
                          })
                        }
                      />
                      <button
                        className="btn btn-success w-100"
                        onClick={() => handleSaveEdit(patient.id)}
                      >
                        Save Changes
                      </button>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>DOB:</strong> {patient.dob}
                      </p>
                      <p>
                        <strong>Contact:</strong> {patient.contact}
                      </p>
                      <p>
                        <strong>Health Info:</strong> {patient.healthInfo}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Add new patients to get started.</p>
        )}
      </div>
    </div>
  );
}

export default PatientsInfoAdmin;
