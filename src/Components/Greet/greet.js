function Greet({ isAdmin, patient }) {

  return (
    <div className="text-center mt-5">
      {isAdmin ? (
        <>
        <p className="h1 display-3 fst-italic">Good to see you, Doctor 👨‍⚕️</p>
        <p className="h3 fw-light">Check your upcoming appointments, treatments, and dental records.</p>
        </>
        ) :
       (
        <>
        <p className="h1 display-3 fst-italic">Welcome Back, {patient?.name}!</p>
        <p className="h3 fw-light">Your smile is our priority — here's everything you need to stay on track with your dental care.</p>
        </>
        )
       }
    </div>
  );
}


export default Greet;
