import profile from "../assets/image.png";

export default function UserProfile() {
  return (
    <div className="account-container">
      <h1>My Account</h1>
      <div className="account-details">
        <div className="account-left">
          <img src={profile} alt="Profile" className="profile-picture" />
        </div>
        <div className="account-right">
          <div className="account-info">
            <div>
              <p>
                <strong>Account Name</strong> <h6>Eiman</h6>
              </p>
              <p>
                <strong>Phone Number</strong> <h6>01101662140</h6>
              </p>
            </div>
            <div>
              <p>
                <strong>Account Email</strong> <h6>eimanhamdy@icloud.com</h6>
              </p>
              <p>
                <strong>Password</strong> <h6>xxxxxxxxx</h6>
              </p>
            </div>
          </div>
          <div className="edit-profile">
            <a href="#">Edit Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}
