function Addtodo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter the task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
