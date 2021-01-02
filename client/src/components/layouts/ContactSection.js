import React,{Fragment,useState} from 'react'
import Alert from './Alert';
import emailjs from 'emailjs-com';
import axios from 'axios';

export const ContactSection = () => {
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [subject,setSubject]=useState('');
  const [alert, setAlert]=useState(null);
  const [type, setType]=useState('');
  const user_id=process.env.REACT_APP_API_KEY;


  const onChange1=(e)=>{
    setName(e.target.value);
  }
  const onChange4=(e)=>{
    setPhone(e.target.value);
  }
  const onChange2=(e)=>{
    setEmail(e.target.value);
  }
  const onChange3=(e)=>{
    setSubject(e.target.value);
  }
  const onChange5=(e)=>{
    setMessage(e.target.value);
  }
  
  const onSubmit=(e)=>{
    e.preventDefault();
    if(name==='' || email===''){
      setAlert('Please Enter correct Details');
      setType('primary');
      setTimeout(()=>setAlert(null),5000);
    }
    else{
      emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE,e.target, user_id)
    .then((result)=>{
       console.log(result.text);
    }, (error)=> {
       console.log( error.text);
     
       
    });
      const newForm={
        name:name,
        email:email,
        phone:phone,
        subject:subject,
        message:message
    }

      axios.post('/api/form',newForm)
        .then(res=>console.log(res.data));

      axios.post('/api/query',newForm)
        .then(res=>console.log(res.data));
      setAlert('Will contact you soon!!!');
      setType('light');
      setTimeout(()=>setAlert(null),5000);
      setPhone('');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  }
  return (
    <Fragment>
        <Alert alert={alert} type={type}/>
        <div id="contact-a" className="text-center py-3">
          <div className="container">
            
            <h2 className="section-title">Contact Me</h2>
            <div className="bottom-line"></div>
            <div className="lead">Here is how you can reach me</div>
                <form onSubmit={onSubmit}>
                  <div className="text-fields">
                    <div className="flex-row">
                      <input type="text"name="name" value={name} className="text-input name-input" placeholder="Name"onChange={onChange1}/>
                      <input type="email" name="email" value={email} className="text-input email-input" placeholder="Email"onChange={onChange2}/>
                    </div>
                    <div className="flex-row1">
                      <input type="text" name="subject"value={subject} className="text-input subject-input" placeholder="Subject"onChange={onChange3}/>
                      <input type="text" name="phone"value={phone} className="text-input phone-input" placeholder="Phone Number"onChange={onChange4}/>
                    </div>
                    <textarea  value={message} name="message"className="text-input message-input" placeholder="Enter Message"onChange={onChange5}></textarea>
                  </div>
                  <input type="submit" value="Contact Me"className="btn-dark"/>

                </form>
            </div>
        </div>

    </Fragment>
  )
}
export default ContactSection;
