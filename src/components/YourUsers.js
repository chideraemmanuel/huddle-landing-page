import UsersSvg from "../assets/images/illustration-your-users.svg";

const YourUsers = () => {
  return (
    <section className="card your-users">
      <div className="card-text">
        <h2>Your Users</h2>
        <p>
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <div className="card-image">
        <img src={UsersSvg} alt="Your Users" />
      </div>
    </section>
  );
};

export default YourUsers;
