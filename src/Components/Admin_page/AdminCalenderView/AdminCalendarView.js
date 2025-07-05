import { useState, useMemo } from "react";

function AdminCalendarView({ incidents: defaultIncidents, patients: defaultPatients }) {
  const getStoredData = (key, fallback) => {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      return Array.isArray(stored) && stored.length > 0 ? stored : fallback;
    } catch {
      return fallback;
    }
  };

  const incidents = getStoredData("incidents", defaultIncidents);
  const patients = getStoredData("patients", defaultPatients);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayIndex = firstDay.getDay();

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(year, month + offset, 1));
    setSelectedDate(null);
  };

  const appointmentsByDay = useMemo(() => {
    const map = {};
    incidents.forEach((incident) => {
      if (incident.status !== "Scheduled") return;
      const dateStr = new Date(incident.appointmentDate).toDateString();
      if (!map[dateStr]) map[dateStr] = [];
      map[dateStr].push(incident);
    });
    return map;
  }, [incidents]);

  const weeks = () => {
    const days = [];

    for (let i = 0; i < startDayIndex; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getAppointmentsForSelectedDay = () => {
    if (!selectedDate) return [];
    const key = selectedDate.toDateString();
    return appointmentsByDay[key] || [];
  };

  const formatMonthYear = (date) =>
    date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  return (
    <div className="container my-5" id="calendarViewAdmin">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h3 className="display-5 fw-bold">Appointment Calendar</h3>
        <div className="mt-3 mt-md-0">
          <button
            className="btn btn-outline-warning me-2"
            onClick={() => changeMonth(-1)}
          >
            ← Prev
          </button>
          <strong className="mx-2">{formatMonthYear(currentMonth)}</strong>
          <button
            className="btn btn-outline-warning"
            onClick={() => changeMonth(1)}
          >
            Next →
          </button>
        </div>
      </div>
      <div
        className="calendar-weeks border rounded shadow-sm p-3"
        style={{
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        {weeks().map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="d-flex justify-content-between flex-wrap flex-md-nowrap gap-2 mb-3"
          >
            {week.map((date, i) => {
              const key = date ? date.toDateString() : `empty-${weekIndex}-${i}`;
              const isSelected =
                date && selectedDate?.toDateString() === date.toDateString();
              const appointments = date
                ? appointmentsByDay[date.toDateString()]
                : null;

              return (
                <div
                  key={key}
                  className={`flex-fill p-3 border rounded text-white text-center ${
                    isSelected ? "bg-primary" : "bg-dark"
                  }`}
                  style={{
                    minHeight: "100px",
                    minWidth: "90px",
                    maxWidth: "14.2%", // roughly 1/7th of row
                    flex: "1 1 13%",
                    cursor: date ? "pointer" : "default",
                    opacity: date ? 1 : 0.2,
                  }}
                  onClick={() => date && handleDateClick(date)}
                >
                  {date && (
                    <>
                      <div className="fw-bold fs-5">{date.getDate()}</div>
                      {appointments && (
                        <div className="badge bg-success mt-2">
                          {appointments.length}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

 
      {selectedDate && (
        <div className="mt-4 p-4 bg-dark rounded shadow-sm border">
          <h5 className="text-warning mb-3">
            Appointments on {selectedDate.toDateString()}
          </h5>
          {getAppointmentsForSelectedDay().length > 0 ? (
            getAppointmentsForSelectedDay().map((incident) => {
              const patient = patients.find((p) => p.id === incident.patientId);
              return (
                <div key={incident.id} className="card mb-3 border-0 shadow">
                  <div className="card-body bg-dark text-white">
                    <h6 className="card-title">{incident.title}</h6>
                    <p className="mb-1">
                      <strong>Patient:</strong> {patient?.name || "Unknown"}
                    </p>
                    <p className="mb-1">
                      <strong>Time:</strong>{" "}
                      {new Date(incident.appointmentDate).toLocaleTimeString()}
                    </p>
                    <p className="mb-0">
                      <strong>Comments:</strong> {incident.comments || "—"}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="">No appointments scheduled.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminCalendarView;
