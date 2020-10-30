import React from 'react';
import emailjs from 'emailjs-com';
 import { Form, FormGroup, Label, Input,Container, Col} from 'reactstrap';



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pa22al2', 'template_2z7lsz6', e.target, 'user_Gg5us1QxHcyqCDgV6tbBl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (

<Container className="themed-container" fluid="sm">
                 <Form className="form" onSubmit={sendEmail}>
                    <Col>
                     <FormGroup row>
                         <Label for="name" sm={2}>Name</Label>
                         <Col sm={10}>
                             <Input type="text" id="name" name="user_name" className="form-control"  placeholder="Enter Email" />
                         </Col>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup row>
                         <Label for="email" sm={2}>Email</Label>
                         <Col sm={10}>
                             <Input type="email" id="email" name="user_email" className="form-control" placeholder="Enter Email" />
                         </Col>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup row>
                         <Label for="message" sm={2}>Message</Label>
                         <Col sm={10}>
                             <Input type="textarea" id="message" name="message" className="form-control" placeholder="Enter Message" />
                         </Col>
                     </FormGroup>
                     </Col>
                    <Col>
                       <FormGroup row>
                             <Col sm={2}>
                            </Col>
                              <Col sm={1}>
                              <input type="submit"  className="btn btn-primary" value="Send" />
                             </Col>
                              <Col sm={6}>
                              </Col>
                         </FormGroup>
                     </Col>
                 </Form>
              </Container>



  );
}



// import React,{ Component } from 'react';
// import * as emailjs from 'emailjs-com'
// import { Button, FormFeedback, Form, FormGroup, Label, Input,Container, Col, Row } from 'reactstrap';

// class ContactUs extends Component {
//     state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     }
//   handleSubmit(e) {
//       e.preventDefault()
//       const { name, email, subject, message } = this.state
//       let templateParams = {
//         from_name: email,
//         to_name: 'allworksbd@gmail.com',
//         subject: subject,
//         message_html: message,
//        }
//        emailjs.send(
//         'gmail',
//         'template_2z7lsz6',
//          templateParams,
//         'user_Gg5us1QxHcyqCDgV6tbBl'
//        )
//        this.resetForm()
//    }
//   resetForm() {
//       this.setState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       })
//     }
//   handleChange = (param, e) => {
//       this.setState({ [param]: e.target.value })
//     }
//   render() {
//       return (
//         <>
//           <Container className="themed-container" fluid="sm">
//             <h1 className="p-heading1">Get in Touch</h1>
//             <Form onSubmit={this.handleSubmit.bind(this)}>
//               <FormGroup controlId="formBasicEmail">
//                 <Label className="text-muted">Email address</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={this.state.email}
//                   className="text-primary"
//                   onChange={this.handleChange.bind(this, 'email')}
//                   placeholder="Enter email"
//                 />
//               </FormGroup>
//   <FormGroup controlId="formBasicName">
//                 <Label className="text-muted">Name</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={this.state.name}
//                   className="text-primary"
//                   onChange={this.handleChange.bind(this, 'name')}
//                   placeholder="Name"
//                 />
//               </FormGroup>
//   <FormGroup controlId="formBasicSubject">
//                 <Label className="text-muted">Subject</Label>
//                 <Input
//                   type="text"
//                   name="subject"
//                   className="text-primary"
//                   value={this.state.subject}
//                   onChange={this.handleChange.bind(this, 'subject')}
//                   placeholder="Subject"
//                 />
//               </FormGroup>
//   <FormGroup controlId="formBasicMessage">
//                 <Label className="text-muted">Message</Label>
//                 <Input
//                   type="textarea"
//                   name="message"
//                   className="text-primary"
//                   value={this.state.message}
//                   onChange={this.handleChange.bind(this, 'message')}
//                 />
//               </FormGroup>
//   <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//             </Container>
//         </>
//       )
//     }
//   }
//   export default ContactUs



// const ContactUs = () => {
//     return (
//         <div>
//              <Container className="themed-container" fluid="sm">
//                 <Form className="form">
//                     <Col>
//                     <FormGroup row>
//                         <Label for="name" sm={2}>Email</Label>
//                         <Col sm={10}>
//                             <Input type="text" id="name" placeholder="Enter Email" />
//                         </Col>
//                     </FormGroup>
//                     </Col>
            
//                     <Col>
//                         <FormGroup row>
//                             <Col sm={5}>
//                             </Col>
//                              <Col sm={1}>
//                                <Button color="success">Login</Button>{' '}
//                              </Col>
//                              <Col sm={1}>
//                                 <Button color="success">Cancel</Button>{' '}
//                              </Col>
//                              <Col sm={5}>
//                              </Col>
//                         </FormGroup>
//                     </Col>
//                 </Form>
//              </Container>
//         </div>
//     );
// };

// export default ContactUs;