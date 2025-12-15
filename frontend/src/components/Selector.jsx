import "../styles/Selector.css"
function Selector ()
{
    return(
    <div className="selector-outerbox">
        <div className="selector-main">
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
             {/* <div className="selector-checkboxes-container">
                    <p><strong>Features</strong></p>
                    <div className="selector-checkbox">
                    <input type="checkbox" id="apple" name="brand" value="Samsung"/>
                    <label htmlFor="Samsung">Samsung</label>
                    </div>
                    <div className="selector-checkbox">
                    <input type="checkbox" id="Apple" name="brand" value="Apple"/>
                    
                    <label htmlFor="Apple">Apple</label>
                    </div>
                    <div className="selector-checkbox">
                    <input type="checkbox" id="Huawei" name="brand" value="Huawei"/>
                    
                    <label htmlFor="apple">Huawei</label>
                    </div>
                    <div className="selector-checkbox">
                    <input type="checkbox" id="Poco" name="brand" value="Poco"/>
                    
                    
                    <label htmlFor="apple">Poco</label>
                    </div>
                    <div className="selector-checkbox">
                    <input type="checkbox" id="Lenovo" name="brand" value="Lenovo"/>
                    <label htmlFor="apple">Lenovo</label>
                    </div>
                    
                    
            </div> */}
             <div>

    <button className="apply-button">Apply</button>
            </div>
            </div>
            
             



        </div>
        
    )
}


export default Selector;