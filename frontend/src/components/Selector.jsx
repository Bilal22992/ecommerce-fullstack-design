import "../styles/Selector.css"
import DataDetail from "./DataDetail";
import SelectorItemList from "./SelectorItemList";
function Selector ()
{
    return(
    <div className="selector-outerbox">
        <div className="selector-main">
            <div className="selector-left-section">
            <div>
               
            </div>
             <div className="selector-checkboxes-container"> 
                <p><strong>Brands</strong></p>
                  <div className="selector-checkbox">
                    <input type="checkbox" id="Samsung" name="brand" value="Samsung"/>
                    <label htmlFor="Samsung">Samsung</label>
                </div>
                <div className="selector-checkbox">
                    <input type="checkbox" id="Apple" name="brand" value="Apple"/>
                    <label htmlFor="Apple">Apple</label>
                </div>
                <div className="selector-checkbox">
                    <input type="checkbox" id="Huawei" name="brand" value="Huawei"/>
                    <label htmlFor="Huawei">Huawei</label>
                </div>
                <div className="selector-checkbox">
                    <input type="checkbox" id="Poco" name="brand" value="Poco"/>
                    <label htmlFor="Poco">Poco</label>
                </div>
                <div className="selector-checkbox">
                    <input type="checkbox" id="Lenovo" name="brand" value="Lenovo"/>
                    <label htmlFor="Lenovo">Lenovo</label>
                </div>

            </div>
             
             
            </div>
            <div className="selector-right-section">
                <DataDetail className="selector-right-top"/>
                <SelectorItemList className="selector-right bottom"/>
                

            </div>
            
             


        </div>
        </div>
        
    )
}


export default Selector;