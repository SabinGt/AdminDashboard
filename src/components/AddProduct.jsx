export default function AddProduct() {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Product</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Product</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Add product</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">Chicken</option>
                        <option>Buff</option>
                        <option>Chicken</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">File input</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" />
                          <label
                            className="custom-file-label"
                            htmlFor="exampleInputFile"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputDescription">
                        Description
                      </label>
                      <textarea
                        type="Tex"
                        className="form-control"
                        id="exampleInputDescription"
                        placeholder="Enter description"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
