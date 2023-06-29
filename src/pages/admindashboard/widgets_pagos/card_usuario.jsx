const cards = () =>{
    
    return (
        <div className="card w-100 h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">
                    DATOS DEL SOCIO
                </h5>
            </div>
            <div className="row card-body">
                <div className="col-6">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue2" placeholder="name@example.com" value="48118687" disabled/>
                        <label htmlFor="floatingInputValue2">Cédula</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue1" placeholder="name@example.com" value="Angel Rodriguez" disabled/>
                        <label htmlFor="floatingInputValue1">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue3" placeholder="name@example.com" value="matiasangel2006@gmail.com" disabled/>
                        <label htmlFor="floatingInputValue3">Correo</label>
                    </div>
                </div>
                <div className="col-2 form-floating mb-3">
                    <input type="text" className="form-control text-white bg-success" id="floatingInputValue4" placeholder="name@example.com" value="HABILITADO" disabled/>
                    <label htmlFor="floatingInputValue4">Estado</label>
                </div>

            </div>
            <div className="row card-body">
                <div className="col-6">
                <p> INGRESOS </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="col-6">
                <p> CUOTAS ABONADAS </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </div>
        </div>
    )
}

export default cards