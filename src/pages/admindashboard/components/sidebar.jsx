import './components_style.css';
import {Link} from 'react-router-dom';

const sidebar = () =>{
    return (
        <div className='sidebar'>
            <hr/>
            <div className='list py-3 h-100'>
                <div className="d-flex flex-column flex-shrink-0">
                    <ul className="nav nav-pills d-flex justify-content-between">
                        <li className='w-100'>
                            <Link to="/home">
                                <div className="nav-link text-white d-inline-flex d-flex justify-content-center w-100" aria-current="page">
                                    <i className="bi bi-house me-2"></i>
                                    <p className='me-1'>INICIO</p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-2 w-100'>
                            <Link to="/socios">
                                <div className="nav-link text-white d-inline-flex d-flex justify-content-center w-100">
                                    <i className="bi bi-person-circle me-2"></i>
                                    <p>SOCIOS</p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-2 w-100'>
                            <Link to="/pagos">
                                <div className="nav-link text-white d-inline-flex d-flex justify-content-center w-100">
                                    <i className="bi bi-clipboard-check me-2"></i>
                                    <p>PAGOS</p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-2 w-100'>
                            <Link to="/caja">
                                <div className="nav-link text-white d-inline-flex d-flex justify-content-center w-100">
                                    <i className="bi bi-cash-coin me-2"></i>
                                    <p className='me-2'>CAJA</p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-2 w-100'>
                            <Link to="/productos">
                                <div className="nav-link text-white d-inline-flex d-flex justify-content-center w-100">
                                    <i className="bi bi-basket me-2"></i>
                                    <p>PRODUCTOS</p>
                                </div>
                            </Link>
                        </li>
                    </ul>                  
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default sidebar