import { useState } from "react";
import NewCompraModal from "./modal_compra"

const BoxCompra = () =>{
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="col-6">
             <div className="py-3">
                <div className="card border-danger">
                    <div className="card-header bg-danger text-white">
                        Compras del día
                    </div>
                    <div className="card-body">
                        <h2 className="card-body">$ 1000.00</h2>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-danger" onClick={() => setModalShow(true)}> + Nueva Compra </button>
            </div>
            <NewCompraModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </div>
       
    )
}

export default BoxCompra