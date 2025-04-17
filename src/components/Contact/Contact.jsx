import React, { useState }  from 'react';
import './Contact.css';
import Button from '../Button/Button';

function Contact() {
  
  const [data, setData] = useState({username:'', phone:'', email:'', message:''})

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    setData(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleSubmit(event){
     // Prevent the browser from reloading the page
    event.preventDefault();
    console.log(data);
  }

  return (
    <div className='contact'>
      <div className='contact__wrapper'>
        <h1 className='headtext__cormorant' style={{marginBottom: '1rem'}}>Contact Us</h1>
        <p className='p__opensans' style={{ marginBottom: '1rem'}}>Phone: 788790237</p>
        <p className='p__opensans' style={{marginBottom: '1rem'}}>Address: 356 W. Superior, IL 60654</p>
        <p className='p__cormorant' style={{color: '#DCCA87', marginBottom:'1rem'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 08:00 a.m - 04:00 p.m</p>     
        <p className='p__opensans'>Sat - Sun: 10:00 a.m - 03:00 p.m</p>

        <div className='contact__wrapper-userForm'>
          <form method='post' onSubmit={handleSubmit}>
            <input type='text' name='username' onChange={handleChange} placeholder='Your Name' value={data.username}/>
            <input type='text' name='phone'  onChange={handleChange} placeholder='Phone Number' value={data.phone}/>
            <input type='email' name='email' onChange={handleChange} placeholder='Email Address' value={data.email}/>
            <textarea name='message' onChange={handleChange} placeholder='Your Message' value={data.message}/>
            <div className='btn-contact'>
              <Button type='submit' buttonStyle='btn-outline' buttonSize='btn-medium' text='Submit'/>
            </div>
          </form>
        </div>
      </div>

      <div className='contact__map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.4889678324216!2d13.26843537544799!3d-8.833983990429278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f153231e6535%3A0xcb691670d25c00c!2sOficina%20de%20Bate-Chapa%20e%20Pintura%20-%20Cafumana%20Charme!5e0!3m2!1sen!2szw!4v1690312934450!5m2!1sen!2szw" title='address' width="600" height="500"  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  );
}

export default Contact;