import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="text-center">
      <Spinner
        animation="grow"
        role="status"
        style={{ width: "3em", height: "3em" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
