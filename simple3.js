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
  return React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(
      "div",
      { style: { marginTop: 20 } },
      React.createElement("span", null, "count: "),
      React.createElement("span", null, count),
      React.createElement(
        "button",
        { onClick: () => setCount(count + 1) },
        "increase"
      ),
      React.createElement(
        "button",
        { onClick: () => setCount(count - 1) },
        "decrease"
      )
    )
  );
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);
