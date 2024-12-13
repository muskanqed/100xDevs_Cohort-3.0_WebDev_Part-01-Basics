
function App() {
  return (
    <div>
      <PostComponent />
    </div>
  );
}

function PostComponent() {
  return (
    <div
      style={{
        width: 200,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "white",
        border: "1px solid grey",
        padding: 10,
      }}
    >
      <img
        src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com"
        alt="cat"
        style={{
          borderRadius: "50%",
          width: 50,
          height: 50,
          marginRight: 10,
        }}
      />
      <div>
        <b>100xDevs</b>
        <br />
        28,900 followers
      </div>
    </div>
  );
}

export default App;
