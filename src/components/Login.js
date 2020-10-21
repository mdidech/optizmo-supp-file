import React,{useState} from "react";
import axios from "axios"
const Login = () => {
  const [suppFileLink, setSuppFileLink] = useState({
    token: "",
    accesskey: "",
  });
  const jokeRequest = axios.create({
    baseURL: 'https://mailer-api.optizmo.net'
  })
const handleChange = (e) => {
  setSuppFileLink({ ...suppFileLink, [e.target.name]: e.target.value });
};
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("submited")
const response=await jokeRequest.get(
    `/accesskey/download/${suppFileLink.accesskey}`,{params: { token: "4IHwSKhNn5QbQdhe3BhwMK6lD4CE0XW7" }}
  )
 console.log(response)

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
