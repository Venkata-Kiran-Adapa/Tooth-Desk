import "./profile_card.css";
function PatientProfileCard({ patient }) {
  return (
    <div className="card profile align-self-center bg-dark text-white  ">
      <img src="/images/patient_img.jpg" className="card-img-top align-self-center p-2" alt="Patient" />
      <div className="card-body ">
        <h5 className="card-title ">{patient ? patient.name : "Patient Name"}</h5>
        <h6 className="card-subtitle mb-2 ">Patient ID: {patient ? patient.id : "Patient ID"}</h6>
        <ul className=" list-group list-group-flush">
          <li className="list-group-item bg-dark text-white" >Date of Birth: {patient ? patient.dob : "Date of Birth"}</li>
          <li className="list-group-item bg-dark text-white" >Contact Number: {patient ? patient.contact : "Contact Number"}</li>
          <li className="list-group-item bg-dark text-white" >Health Information: {patient ? patient.healthInfo : "Health Information"}</li>
        </ul>
      </div>
    </div>
  );
}

export default PatientProfileCard;
