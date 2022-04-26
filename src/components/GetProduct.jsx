export default function GetProduct() {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>All Products</h1>
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
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">List of all products</h3>
                    </div>
                    <div className="card-body">
                      <table className="table table-bordered table-striped tableAttributes">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Category Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jhol Mo:MO</td>
                            <td>Chicken</td>
                            <td>Rs. 250</td>
                            <td>Image</td>
                            <td>
                              <button>
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
        </section>
      </div>
    </div>
  );
}
