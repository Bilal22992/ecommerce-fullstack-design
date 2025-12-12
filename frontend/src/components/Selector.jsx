import "../styles/Selector.css"
function Selector ()
{
    return(

        <div className="main">
            <div>
               
            </div>
             <div> 
                <p><strong>Brands</strong></p>
                    <input type="checkbox" id="apple" name="brand" value="Samsung"/>
                    <label for="Samsung">Samsung</label>
                    <input type="checkbox" id="Apple" name="brand" value="Apple"/>
                    <label for="Apple">Apple</label>
                    <input type="checkbox" id="Huawei" name="brand" value="Huawei"/>
                    <label for="apple">Huawei</label>
                    <input type="checkbox" id="Poco" name="brand" value="Poco"/>
                    <label for="apple">Poco</label>
                    <input type="checkbox" id="Lenovo" name="brand" value="Lenovo"/>
                    <label for="apple">Lenovo</label>

            </div>
             <div>
                    <p><strong>Features</strong></p>
                    <input type="checkbox" id="apple" name="brand" value="Samsung"/>
                    <label for="Samsung">Samsung</label>
                    <input type="checkbox" id="Apple" name="brand" value="Apple"/>
                    <label for="Apple">Apple</label>
                    <input type="checkbox" id="Huawei" name="brand" value="Huawei"/>
                    <label for="apple">Huawei</label>
                    <input type="checkbox" id="Poco" name="brand" value="Poco"/>
                    <label for="apple">Poco</label>
                    <input type="checkbox" id="Lenovo" name="brand" value="Lenovo"/>
                    <label for="apple">Lenovo</label>
            </div>
             <div>
<div class="price-range-container">
    <div class="price-range-header">
        Price range
        </div>

    <div class="price-range-slider">
        <input type="range" min="0" max="999999" value="[min_selected_value]"/>
        <input type="range" min="0" max="999999" value="[max_selected_value]"/>
    </div>

    <div class="price-range-inputs">
        <div class="price-input-group">
            <label for="min-price">Min</label>
            <input type="number" id="min-price" value="0"/>
        </div>

        <div class="price-input-group">
            <label for="max-price">Max</label>
            <input type="number" id="max-price" value="999999"/>
        </div>
    </div>

    <button class="apply-button">Apply</button>
</div>
            </div>
             <div>

            </div>
             <div>

            </div>



        </div>
    )
}


export default Selector;