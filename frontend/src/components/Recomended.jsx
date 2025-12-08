import "../styles/Recomended.css";
import chair from "../images/chair.png";
function Recomended (props)
{
    return (
        <div className="recomended-outer-box">
            <div className="recomended-main">
                {
                    props.items.map((item,index) =>

                <div key={index} className="recomended-card">
                    <div className="recomended-card-image">
                         <img src={item.image} alt="chair"/>
                    </div>
                   
                    <div className="recomended-card-details">
                <h3>{item.price}</h3>
                <p>{item.itemname}</p>
                </div>
                </div>
                    )
}
                

            </div>
        </div>
    )

}

export default Recomended;