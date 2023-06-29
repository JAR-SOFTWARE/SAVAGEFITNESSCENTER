const cards = ({type}) =>{
    let data;
    switch(type){
        case 1:
            data = {
                title: "SOCIOS ACTIVOS VS PASIVOS",
                data: {0:'Activos: 100', 1: 'Pasivos: 100'},
                icon: '',
                card_text:'',
            };
            break;
        case 2:
            data = {
                title:"SEXOS DE SOCIOS MUJERES VS HOMBRES",
                data: {0:'Mujeres: 10', 1:'Hombres: 5'},
                icon: '',
            };
            break;
        case 3:
            data = {
                title: "EDAD PROMEDIO DE SOCIOS",
                data: {0:'Mujeres: 35', 1:'Hombres: 25'},
                icon: '',
            };
            break;
        case 4:
            data = {
                title: "HORA PROMEDIO DE CONCURRENCIA",
                data: {0:'18',1: ': 00'},
                icon:'bi bi-clock',
            };
            break;        
        default:
            break;
    }
    
    return (
        <div className="card w-100 h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{data.data[0]} {data.data[1]} <i className={data.icon}></i></p>
            </div>
            <div className="card-body">
                <a href="" className="text-decoration-none" >Ver mas <i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default cards