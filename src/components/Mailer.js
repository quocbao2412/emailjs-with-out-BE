import {Form} from "reactstrap"
import emailjs from "emailjs-com"

const Mailer = () => {
    function sendEmail(e) {
        
        e.preventDefault();

        emailjs.sendForm('service_fgj24hu','template_wuw29fe',e.target,'user_XCtmiHql21yGsRoOw1deo')
        .then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return(
        <div className="container border" style={{marginTop:'50px', width:'50%',
        backgroundImage:"url('https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?size=626&ext=jpg')",
        backgroundPosition:"center",
        backgroundSize:"cover"}}>
        
            <h1 style={{marginTop:'25px'}}>Contact Form</h1>

            <Form className="row" style={{margin:'25px 85px 75px 100px'}} 
                onSubmit={sendEmail}
            >
                <label style={{fontWeight:'800', fontSize:'20px'}}>Name</label>
                <input type="text" name="name" className="form-control" />

                <label style={{fontWeight:'800', fontSize:'20px'}}>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label style={{fontWeight:'800', fontSize:'20px'}}>Message</label>
                <textarea name="message" row="6" className="form-control"/>

                <input type="submit" value="send" className="form-control btn btn-primary" 
                    style={{marginTop:'30px'}}
                />
            </Form>
        </div>
    );
};
export default Mailer