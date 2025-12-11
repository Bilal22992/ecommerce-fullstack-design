import "../styles/Recomended.css";

function Recomended (props)
{ const filteredItems= props.items.filter(item=>props.ratings===item.ratings)
    return (
        <div className="recomended-outer-box">
            <div className="recomended-main">
                {
                    filteredItems.map((item,index) =>

                <div key={index} className="recomended-card">
                    <div className="recomended-card-image">
                         <img src={item.ImageBase64} alt="chair"/>
                    </div>
                   
                    <div className="recomended-card-details">
                <h3>${item.price}</h3>
                <p>{item.name}</p>
                </div>
                </div>
                    )
}
                

            </div>
        </div>
    )

}

export default Recomended;