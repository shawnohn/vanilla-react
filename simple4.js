function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "cancel like" : "like";
  return React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}
function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }), /*#__PURE__*/React.createElement("span", null, "count: "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "increase"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "decrease"));
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);