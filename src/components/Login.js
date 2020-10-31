import React, { useState } from "react";


const Login = () => {
  const [suppFileLink, setSuppFileLink] = useState({
    token: "",
    accesskey: "",
  });
  const [downloadLink, setDownloadLink] = useState("")
  const [campaign_name, setCampaign_name] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setSuppFileLink({ ...suppFileLink, [e.target.name]: e.target.value });
  };
  const showLink=()=>{
if(isLoading){
  return(<div className="text-center ">
 <div className="spinner-border text-primary mt-3" role="status">
  <span className="sr-only">Loading...</span>
</div>
  </div>
 
  )
}else{
  if(!(downloadLink==="") && !( downloadLink==="") ){
    return(<div>
    <p><strong className="text-primary">campaign name:</strong>  {campaign_name}</p>
          <p><strong className="text-primary">download link:</strong> {downloadLink}</p>
      </div>)
  }

}
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(`https://rocky-ocean-20124.herokuapp.com/https://mailer-api.optizmo.net/accesskey/download/${suppFileLink.accesskey}?token=${suppFileLink.token}`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => res.json())
      .then(async response => {
        if (response.result === "success") {
           setIsLoading(false);
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
 {showLink()}
         
          {/* <p><strong className="text-primary">campaign name:</strong>  {campaign_name}</p>
          <p><strong className="text-primary">download link:</strong> {downloadLink}</p> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
