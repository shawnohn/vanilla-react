function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "cancel like" : "like";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}
function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}></div>
      <span>count: </span>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);
