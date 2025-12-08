import "../styles/Recomended.css";
import chair from "../images/chair.png";
function Recomended (props)
{
    return (
        <div className="recomended-outer-box">
            <div className="recomended-main">
                <div className="recomended-card">
                    <div className="recomended-card-image">
                         <img src={chair} alt="chair"/>
                    </div>
                   
                    <div className="recomended-card-details">
                <h3>$10.30</h3>
                <p>T-shirts with multicolor men</p>
                </div>
                </div>
                

            </div>
        </div>
    )

}

export default Recomended;