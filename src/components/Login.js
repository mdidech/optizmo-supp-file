import React,{useState} from "react";
import axios from "axios"
const Login = () => {
  const [suppFileLink, setSuppFileLink] = useState({
    token: "",
    accesskey: "",
  });
  const [downloadLink,setDownloadLink]=useState("")
  const [campaign_name,setCampaign_name]=useState("")
  const headers={
    "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
  }
const handleChange = (e) => {
  setSuppFileLink({ ...suppFileLink, [e.target.name]: e.target.value });
};
  const handleSubmit = (e) => {
    e.preventDefault();
fetch(`https://cors-anywhere.herokuapp.com/https://mailer-api.optizmo.net/accesskey/download/${suppFileLink.accesskey}?token=${suppFileLink.token}`, {
        method: 'GET',
        headers:{
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(res => res.json())
      .then(response => {
        if(response.result==="success"){
          setDownloadLink(response.download_link)
          setCampaign_name(response.campaign_name)
        }
      })
      .catch(error => console.error('Error:', error));
  };
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
 <h1 className="text-center text-capitalize"> suppression file link</h1>
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
                className='form-control bg-success text-white'
              >
                Procceed Suppression Link
              </button>
            </div>
          </form>
          <p><strong className="text-primary">campaign name:</strong>  {campaign_name}</p>
          <p><strong className="text-primary">download link:</strong>  {downloadLink}</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
