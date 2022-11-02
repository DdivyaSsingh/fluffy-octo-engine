import React from 'react'
import "../../../Css/style.css"

const OutlineCard = (props) => {
  return (
 
    <div className="row">
  <div className="col l4 m8 s12 offset-m2 offset-l4 remove-margin">
    <div className="product-card">
        <div className="card  z-depth-4">
            <div className="card-image">
                <a href="#" className="price waves-effect waves-light darken-1" style ={{textDecoration : "none" , color :"yellow"}}><p id = "text">Popular</p></a>
                <img src= {props.value.imageUrl} style ={{maxWidth:"100%" ,height : "185px" }} alt="House-Img" />
                <span style = {{ backgroundColor : "transparent"}}className="card-title"><span>{props.value.Name}</span></span>
                {/* <span className="card-description"><span>Palm Harbor</span></span> */}
                
            </div>
            <ul className="card-action-buttons">
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/lybete/full/jBMNzM/" target="_blank" className="btn-floating waves-effect waves-light white"><i className="material-icons grey-text text-darken-3">share</i></a>
                </li>
                <li><a className="btn-floating waves-effect waves-light red accent-2"><i className="material-icons like">favorite_border</i></a>
                </li>
                
            </ul>
            <div className="card-content">
                <div className="row">
                    <div className="col s12">
                        <p>
                            <strong><span id = "number">${props.value.rentPrice}/</span>month</strong> <br />
                            {props.value.location.Street + ", " + props.value.location.City + ", " + props.value.location.State + ", " + props.value.location.Country + ", (" + props.value.location.Zip_code + ")"}
                        </p>
                    </div>
                    
                </div>
                <hr />
                <div className="row">
                        <div style= {{width: "95%", margin: "auto"}}>
                            <div className="chip"><i className="fa-solid fa-bed">{ " " + props.value.structure.Bedrooms + " Bedrooms"}</i></div>
                            <div className="chip"><i className="fa-solid fa-restroom">{" " + props.value.structure.Washroom + " Washroom"}</i></div>
                            <div className="chip"><i className="fa-solid fa-kitchen-set">{" " + props.value.structure.Kitchen + " Kitchen"}</i></div>
                            <div className="chip"><i className="fa-solid fa-chart-area">{props.value.area}m<sup>3</sup></i></div>
                            {/* <div className="chip"><a href="#">More...</a></div> */}
                        </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
    
  
  )
}

export default OutlineCard