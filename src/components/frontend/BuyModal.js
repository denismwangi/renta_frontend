import './modal.css';
import {Input,Button, FormGroup, Form} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080/api/v1/houses";
const BuyModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
 
  // const [data, setData] = useState({
  //   category: "",
  //   roomSize: "",
  //   price: "",
  //   location: "",
  //   description: "",
  //   file:null
  // })
  const [category, setCategory] = useState("");
  const [roomSize, setRoomSize ] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescripton] = useState("");
  const [file, setFile] = useState(null);
  
  // function handle(e){
  //   const newData = {...data}
  //   newData[e.target.id] = e.target.value
  //   setData(newData)
  //   console.log(newData)

  // }
  function Submit(contentType, data, setResponse){
    //e.preventDefault()
    axios({
      // category: data.category,
      // roomSize: data.roomSize,
      // price: data.price,
      // location: data.location,
      // description: data.description,
      // file: data.file
      url: `${URL}/create`,
      method: 'POST',
      data: data,
      headers: {
      'Content-Type': contentType
      }
    }).then((response) => {
      setResponse(response.data);
      }).catch((error) => {
      setResponse("error");
      })
  }
  function uploadWithFormData(){
   
    const formData = new FormData();
    formData.append("category", category);
    formData.append("roomSize", roomSize);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("file", file);
    
   
    Submit("multipart/form-data", formData, (msg) => console.log(msg));
    }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose} style={{marginLeft:'90%', marginTop:'5px'}} ><i class="fa fa-times"></i>
        </button>
<Form className="new-h" >
  <div className="new-h-container">
    <label htmlFor="category" ><b>Category</b></label>
   
    <input type="text"
     className="input"
      placeholder="Enter Category"
       style={{width:'400px'}} 
       name="category" required
      //  onChange={(e)=>handle(e)}id="category" value={data.category}
      onChange={(e) => { setCategory(e.target.value )}} 
      value={category}
       />
            <label htmlFor="size"><b>Size</b></label>
            <input type="text" 
            placeholder="Enter Number of Bedrooms" 
            name="size" 
            required className="input"
          //  onChange={(e)=>handle(e)}id="roomSize" value={data.roomSize}
          value={roomSize}
          onChange={(e) => { setRoomSize(e.target.value )}} 
          />

            <label htmlFor="price"><b>Price</b></label>
            <input type="text"
            placeholder="Enter Selling Price"
              name="price" 
              required className="input"
              //onChange={(e)=>handle(e)}id="price" value={data.price}
              value={price}
              onChange={(e) => { setPrice(e.target.value )}} 
              /> 

            <label htmlFor="location"><b>location</b></label>
            <input type="text"
            placeholder="Enter the location" 
            name="location"
              required className="input"
             // onChange={(e)=>handle(e)}id="location" value={data.loaction}
             value={location}
             onChange={(e) => { setLocation(e.target.value )}} 
             /> 

            <label htmlFor="description"><b>Description</b></label><br></br>
            <textarea name="description" 
            style={{width:'400px', height:'70px'}} 
            placeholder="enter small description"
            //onChange={(e)=>handle(e)}id="description" value={data.description}
            value={description}
            onChange={(e) => { setDescripton(e.target.value )}} 
            >

            </textarea><br></br>
            <label><b>House Image</b></label><br></br>
            <input class="form-control"
            type="file"
              name="fileToUpload" 
              id="file"
              //onChange={(e)=>handle(e)}id="file" value={data.file}
              onChange={(e) => setFile(e.target.files[0])}
              />
  </div>
  <Button type="submit" onClick={uploadWithFormData}   className="modal-btn">
                Submit
              </Button>
 
</Form>
        
      </section>
    </div>
  );
};
export default BuyModal;

