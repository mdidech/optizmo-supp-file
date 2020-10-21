import React,{useState} from "react";
import axios from "axios"
const Login = () => {
  const [suppFileLink, setSuppFileLink] = useState({
    token: "",
    accesskey: "",
  });
  const headers={
    "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
  }
const handleChange = (e) => {
  setSuppFileLink({ ...suppFileLink, [e.target.name]: e.target.value });
};
  const handleSubmit = async (e) => {
    e.preventDefault();

      const data=await fetch(`https://mailer-api.optizmo.net/accesskey/download/${suppFileLink.accesskey}?token=${suppFileLink.token}`, {
       mode:"no-cors"
      })
      // let response = await data.json();
      console.log(await data.json())
   
  };
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <form onSubmit={handleSubmit} className='mt-5'>
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control'
                onChange={handleChange}
                value={suppFileLink.token}
                name='token'
                placeholder='token'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control'
                name='accesskey'
                onChange={handleChange}
                value={suppFileLink.accesskey}
                placeholder='mailer access key'
                autoComplete='off'
              />
            </div>
            <div className='form-group mt-3'>
              <button
                type='submit'
                className='form-control bg-primary text-white'
              >
                Procceed Suppression
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
