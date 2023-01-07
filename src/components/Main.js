import FlowingConversations from "./FlowingConversations";
import GrowTogether from "./GrowTogether";
import YourUsers from "./YourUsers";

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <GrowTogether />
        <FlowingConversations />
        <YourUsers />
      </div>
    </section>
  );
};

export default Main;
