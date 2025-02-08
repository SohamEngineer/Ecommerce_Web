import { useForm } from "react-hook-form";
import "../Contact/contact.css"
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Your message has been sent successfully!");
    reset();
  };

  return (
    <>
    
 
    <div className="contact-container">
      <div className="contact-overlay">
        <h1 className="contact-heading">GET IN TOUCH</h1>
      <h1 className="cont">Contact</h1>
        <p className="contact-description">
          Have questions or want to collaborate? We'd love to hear from you!
        </p>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="Enter the subject"
            />
            {errors.subject && (
              <span className="error">{errors.subject.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message here"
            ></textarea>
            {errors.message && (
              <span className="error">{errors.message.message}</span>
            )}
          </div>

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
