import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Demos</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Spaced</h1>
          <h3 className="position">Development Company</h3>
          <h4 className="about">
            Software development company focused on serving other 
            companies seeking digital professionalization.
          </h4>
          <a target={"blank"} href="https://dotspaced.com" className="contact-member">
            <span>Website</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img2"></div>
        <div className="member-info">
          <h1 className="name">GS Mediart</h1>
          <h3 className="position">Social Media</h3>
          <h4 className="about">
            Social media management company, specializing in 
            digital leverage for brand growth and solidification.
          </h4>
          <a href="#" className="contact-member">
            <span>Website</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img3"></div>
        <div className="member-info">
          <h1 className="name">DataBaseSub</h1>
          <h3 className="position">Geek Entertainment Website</h3>
          <h4 className="about">
            Website aimed at the geek audience, focused on promoting 
            Asian series, with a forum for discussions, login to 
            become a member and much more.
          </h4>
          <a target={"blank"} href="https://databasesub.com.br" className="contact-member">
            <span>Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
