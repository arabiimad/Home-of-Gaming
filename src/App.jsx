import "./App.scss";

function App() {
  return (
    <>
      <div className="row h-100 align-items-center">
        <div className="col text-center border border-primary rounded-end-5 p-5 m-5">
          <span className="text-primary text-center fs-1 fw-bold">primary</span>
          <span className="d-block mx-auto square bg-primary rounded-pill m-3"></span>
          <button className="btn btn-primary m-1">button</button>
          <button className="btn btn-outline-primary m-1">button</button>
        </div>
        <div className="col text-center border border-secondary rounded-start-5 p-5 m-5">
          <span className="text-secondary text-center fs-1 fw-bold">
            secondary
          </span>
          <span className="d-block mx-auto square bg-secondary rounded-pill m-3"></span>
          <button className="btn btn-secondary m-1">button</button>
          <button className="btn btn-outline-secondary m-1">button</button>
        </div>
      </div>
    </>
  );
}

export default App;
