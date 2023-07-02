import { useState } from "react";
import NewVentaModal from "./modal_venta";

const BoxVenta = () =>{
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="col-6">
             <div className="py-3">
                <div className="card border-success">
                    <div className="card-header bg-success text-white">
                        Ventas del día
                    </div>
                    <div className="card-body">
                        <h2 className="card-body">$ 1000.00</h2>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-success" onClick={() => setModalShow(true)}> + Nueva Venta </button>
            </div>
            <NewVentaModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </div>
       
    )
}

export default BoxVenta