import React from 'react'
import { Form , TextArea, Input , Button , Image, Message , Header, Icon, ButtonContent } from 'semantic-ui-react'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import catchErrors from '../utils/catchErrors'

const INITIAL_PRODUCT = {
  name : "",
  price : "",
 // media : "",
  description : ""
}

function CreateProduct() {
  const [ product, setProduct ] = React.useState(INITIAL_PRODUCT);
 // const [ mediaPreview , setMediaPreview] = React.useState('');
  const [ success , setSuccess ] = React.useState(false);
  const [ loading , setLoading ] = React.useState(false);
  const [ disabled , setDisabled ] = React.useState(true);
  const [ error , setError ] =  React.useState('');

  React.useState( () => {
    const isProduct = Object.values(product).every(el => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);     
  },[product]);

  function handleChange(){
    const  {name , value, files}  = event.target;
   // if( name === 'media') {
  //    setProduct((prevState) => ({ ...prevState , media : files[0] }));
   //   setMediaPreview(window.URL.createObjectURL(files[0]))
   // }
    setProduct((prevState) => ({ ...prevState , [name] : value}));
  }

  //async function handleImageUpload(){
  //  const data = new FormData()
  //  data.append('file', product.media)
   // data.append('upload_preset','reactmarket')
  //  data.append('cloud_name','dpazx12fh')
   // const response = await axios.post
  //  (process.env.CLOUDINARY_URL, data)
  //  const mediaUrl = response.data.url
   // return mediaUrl;
 // }

  async function handleSubmit(event){
    try{
    event.preventDefault();
    setLoading(true);
    //const mediaUrl = await handleImageUpload()
   // console.log({mediaUrl});
    const url = `${baseUrl}/api/product`
    const  {name , price, description } = product
    const payload = { name , price, description }
    const response = await axios.post(url,payload) 
    console.log(response)
    setProduct(INITIAL_PRODUCT);
    setSuccess(true)
    } catch(error){
      catchErrors(error, setError)
    } finally{
      setLoading(false);
    }

    
  }
  return (
      <>
        <Header as="h2" block>
          <Icon name ="add" color ="orange" />
            Create New Product
        </Header>
        <Form loading = {loading} error ={Boolean(error)} success={success} onSubmit={handleSubmit}>
          <Message
            error
            header = 'Oops !'
            content = {error}          
          />
          <Message 
            success
            icon = "check"
            header = "Success!"
            content = "Your Product has been posted"
          
          />
          <Form.Group widths ="equal">
          <Form.Field 
            control = { Input }
            name = "name"
            label = "Name"
            placeholder = "Name"
            value = {product.name}
            onChange = {handleChange}
          />
           <Form.Field 
            control = { Input }
            name = "price"
            label = "Price"
            placeholder = "Price"
            min = "0.00"
            step  = "0.01"
            value = {product.price}
            type = "number"
            onChange = {handleChange}
          />
          </Form.Group>
         
          <Form.Field
            control = { TextArea }
            name = "description"
            label = "Description"
            placeholder = "Description"
            value = {product.description}
            onChange = {handleChange}
          />
          <Form.Field
            control = {Button}
            disabled ={ disabled || loading}
            color = "blue"
            icon = "pencil alternate"
            content = "Submit"
            type = "submit"
          />
        </Form>

      </>


  )
}

export default CreateProduct;
