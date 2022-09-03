import LoadingImage from "../assets/image/loading.gif";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        style={{ width: 250, aspectRatio: 1, marginBottom: 50 }}
        src={LoadingImage}
        alt="?"
      />
    </div>
  );
}

export default Loading;
