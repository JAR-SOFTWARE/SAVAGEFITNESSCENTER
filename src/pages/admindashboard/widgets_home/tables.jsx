import './widgets_home.css'

const table = () => {    
    const socios = [
        {
            id: 1,
            nombre: "Matias",
            apellido: "Rodriguez",
            hora_ingreso: "18:00 hs"
        },
        {
            id: 2,
            nombre: "Matias",
            apellido: "Rodriguez",
            hora_ingreso: "18:00 hs"
        },
        {
            id: 3,
            nombre: "Matias",
            apellido: "Rodriguez",
            hora_ingreso: "18:00 hs"
        }]
    
        return (
        <div className="card shadow-sm my-2 tablas">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Hora</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {socios.map((socio) => (
                            <tr>
                                <th scope="row">{socio.id}</th>
                                <td>{socio.nombre}</td>
                                <td>{socio.apellido}</td>
                                <td>{socio.hora_ingreso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default table