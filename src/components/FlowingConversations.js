import flowingConversationsSvg from "../assets/images/illustration-flowing-conversation.svg";

const FlowingConversations = () => {
  return (
    <section className="card flowing-conversations">
      <div className="card-image">
        <img src={flowingConversationsSvg} alt="Flowing Coversation" />
      </div>
      <div className="card-text">
        <h2>Flowing Conversations</h2>
        <p>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </section>
  );
};

export default FlowingConversations;
