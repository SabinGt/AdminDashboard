export default function Category() {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add &amp; Get Category</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Category</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-edit" />
                      Category
                    </h3>
                  </div>
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-toggle="modal"
                      data-target=".modal-default"
                    >
                      Add Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">List of all categories</h3>
                    </div>
                    <div className="card-body">
                      <table className="table table-bordered table-striped tableAttributes">
                        <thead>
                          <tr>
                            <th>Category Name</th>
                            <th>Category Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Chicken</td>
                            <td>
                              <button
                                data-toggle="modal"
                                data-target="#modal-default"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button>
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="modal fade" id="modal-default">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add new Category</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
