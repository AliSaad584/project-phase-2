function CardMenu({pic , name , price }){
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 ">
            <div className="card shadow-sm h-100">
                 <img src={pic} className="rounded h-100" />
                 <div className="card-body">
                     <h3>{name}</h3>
                     <button className="btn btn-danger">{price}</button>
                 </div>
            </div>
        </div>
    )
}
export default CardMenu;