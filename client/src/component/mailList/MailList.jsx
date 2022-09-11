import "./mailList.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h2 className="mailTitle">Save time, save money!</h2>
      <span>Sign up and we'll send a best deals for you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your email"/>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
