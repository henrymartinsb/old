import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javaScript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootStrap</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content angular"></div>
          <h1>Angular</h1>
        </div>
        <div className="qualification">
          <div className="content next"></div>
          <h1>Nextjs</h1>
        </div>
        <div className="qualification">
          <div className="content tailwind"></div>
          <h1>Tailwind</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
