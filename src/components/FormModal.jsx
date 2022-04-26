import React from 'react'

export default function FormModal() {
  return (
    <div>
            <div className="modal fade" id="modal-product">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Product</h4>
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
                <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
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
                      <label htmlFor="exampleInputPrice">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputPrice"
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
    </div>
  )
}
