import { products } from "../../helper/data";
import './ProductCard.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const ProductCard = ({ category }) => {
  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category)
  return (
    <main>
      {
        filteredProducts.map((product) => (
          <>
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target={"#" + product.id}
              key={product.id}
            >
              <div className="product-container">
                <img src={product.image} alt={product.title} />
                <p className="price">{product.price} $</p>
                <p className="product-title">{product.title}</p>
              </div>
            </button>
            <div
              className="modal fade"
              id={product.id}
              tabIndex="-1"
              aria-labelledby={product.id + "Label"}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={product.id + "Label"}>
                      {product.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img src={product.image} className="card-img-top w-50 rounded-3 modal-img" alt={product.title} />
                    <p className="description">{product.description}</p>
                    <p className="card-price fs-4">{product.price} $</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Kapat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))

      }
    </main>
  )
}

export default ProductCard
