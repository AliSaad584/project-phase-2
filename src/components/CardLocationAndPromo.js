function CardLocationAndPromo({pic , name , description }){
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 ">
            <div className="card shadow-sm h-100">
                 <img src={pic} className="rounded h-100" />
                 <div className="card-body">
                     <h3>{name}</h3>
                     <p>{description}</p>
                 </div>
            </div>
        </div>
    )
}
export default CardLocationAndPromo;