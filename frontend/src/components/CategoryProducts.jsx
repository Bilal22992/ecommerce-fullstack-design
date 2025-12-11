import "../styles/CategoryProducts.css";
function CategoryProducts (props)
{ const filteredItems = props.items.filter(item => props.category === item.category);
    return (

        
        <div className="category-products-outerbox">
        <div className="category-products-main"> 
            <div style={{backgroundImage:`url(${props.bgImage})`}} className="category-products-image" >
                <p><strong>{props.title}</strong></p>
                <button>Source Now</button>

            </div>

             <div  className="category-products-items">
               { filteredItems.map((item,index) =>
                
               
                    
                      
                <div className="category-products-product" key={index}>
                    <div className="category-product-itemdetail">
                    <p className="category-product-itemdetail-name">{item.name}</p>
                    <p>From</p>
                    <p>${item.price}</p>
                    </div>
                    <img src={item.ImageBase64} alt={item.name}/>
                </div>
                    
                   
                    )
                     
            }
             </div>
        
            
                
            </div>
            
        
</div>
    )
}

export default CategoryProducts;