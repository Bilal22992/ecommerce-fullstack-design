import "../styles/CategoryProducts.css";
function CategoryProducts (props)
{
    return (
        <div className="category-products-outerbox">
        <div className="category-products-main"> 
            <div style={{backgroundImage:`url(${props.bgImage})`}} className="category-products-image" >
                <p><strong>{props.title}</strong></p>
                <button>Source Now</button>

            </div>

             <div  className="category-products-items">
               { props.items.map((item,index) =>
                
                    
                      
                <div className="category-products-product" key={index}>
                    <div className="category-product-itemdetail">
                    <p className="category-product-itemdetail-name">{item.itemname}</p>
                    <p>From</p>
                    <p>${item.price}</p>
                    </div>
                    <img src={item.image} alt={item.name}/>
                </div>
               
                    )
                     
            }
             </div>
        
            
                
            </div>
            
        
</div>
    )
}

export default CategoryProducts;