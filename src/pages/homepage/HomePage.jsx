import React from "react";
import strawberryCake from "../../assets/strawberry-cake-3.png";
import ReviewComponent from "../../components/ReviewComponent";
import ScrollingCarousel from "../../components/ScrollingCarousel";
import { useFormik } from "formik";
import InputComponent from "../../components/InputComponent";
import { validationSchema } from "./ValidationSchema";
import Phone from "../../components/svg/Phone";
import Instagram from "../../components/svg/Instagram";
import toast from "react-hot-toast";

const ContactComponent = ({ icon, field, value, key, href }) => (
  <div id={key}>
    <div className="flex gap-2">
      {icon}
      <div className="flex flex-col -mt-1">
        <p className="text-[#c08783] font-semibold">{field}</p>
        <a href={href} target="_blank">
          {value}
        </a>
      </div>
    </div>
  </div>
);

function HomePage() {
  const contactFormInitalState = {
    name: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: contactFormInitalState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // TODO: Integrate headless ORM once the implementation is done
      toast.success("Your message has been sent successfully", {
        duration: 5000,
      });
      formik.resetForm();
    },
  });

  return (
    <div>
      <div className="h-[calc(100vh-96px)] overflow-y-auto flex flex-col">
        <div
          className="flex md:flex-row flex-col gap-20 bg-[#fef5e4] pb-10 flex-1 min-h-0"
          id="intro-container"
        >
          <img
            src={strawberryCake}
            alt="strawberry-cake"
            className="block max-w-[600px] max-h-[600px] w-auto h-auto"
            id="strawberry-cake"
          />
          <div
            className="flex flex-col gap-6 text-[#f93a61] max-w-2xl justify-center"
            id="intro-text-wrapper"
          >
            <p className=" text-5xl font-bold">Do you like cakes?</p>
            <p className="text-lg font-semibold text-[#b8a090] ">
              Then you are the right place! We offer wide variety of cakes for
              you to choose from. We have served over 100+ customers and we are
              still going strong.
            </p>
          </div>
        </div>
        <div
          id="reviews-container"
          className="bg-[#ffc5c4] flex flex-col md:flex-row gap-2 p-4 flex-shrink-0"
        >
          <div
            id="reviews-text-wrapper"
            className="text-[#fefcfd] flex flex-col gap-6 pl-20 max-w-[40%]"
          >
            <p className="text-5xl font-bold">
              Here's what our customers say about our cakes
            </p>
            <p className="text-lg font-semibold text-[#c08783]">
              100% honest reviews.
            </p>
          </div>
          <ScrollingCarousel direction="left" className="flex-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <ReviewComponent key={index} />
            ))}
          </ScrollingCarousel>
        </div>
      </div>
      <div className="bg-[#fef5e4] text-custom-pink flex gap-8 py-10 ">
        <form
          id="contact-form-container"
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-1 items-center-safe gap-2"
        >
          <InputComponent
            label="Name"
            placeholder="Enter your name"
            id="contact-name"
            name="name"
            type="text"
            labelPosition="top"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full max-w-2xs gap-1"
            inputClassName="p-4"
            error={formik.errors.name}
            touched={formik.touched.name}
            labelClassName="font-semibold"
          />
          <InputComponent
            label="Email"
            placeholder="example@gmail.com"
            id="contact-email-address"
            name="emailAddress"
            type="email"
            labelPosition="top"
            value={formik.values.emailAddress}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="w-full max-w-2xs gap-1"
            inputClassName="p-4"
            error={formik.errors.emailAddress}
            touched={formik.touched.emailAddress}
            labelClassName="font-semibold"
          />
          <InputComponent
            label="Mobile number"
            placeholder="+91 98765 43210"
            id="contact-phone-number"
            name="phoneNumber"
            type="tel"
            labelPosition="top"
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="w-full max-w-2xs gap-1"
            inputClassName="p-4"
            error={formik.errors.phoneNumber}
            touched={formik.touched.phoneNumber}
            labelClassName="font-semibold"
          />
          <InputComponent
            label="Message"
            placeholder="I want a cake ..."
            id="contact-message"
            name="message"
            type="textarea"
            labelPosition="top"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="w-full max-w-2xs gap-1"
            inputClassName="pl-4"
            error={formik.errors.message}
            touched={formik.touched.message}
            labelClassName="font-semibold"
          />
          <button
            type="submit"
            id="contact-form-submit-btn"
            className="bg-custom-pink text-white w-full max-w-2xs rounded-3xl mt-2 h-11"
          >
            Submit
          </button>
        </form>
        <div id="contact-details-wrapper" className="flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Contact Us</p>
            <p className="text-4xl font-bold">Get in touch</p>
          </div>
          <div className="flex gap-2 mt-8">
            <ContactComponent
              icon={<Phone />}
              field="Phone Us"
              value="+91 6374351991"
              key="contact-phone"
              href="tel:+91 6374351991"
            />
            <ContactComponent />
            <ContactComponent
              icon={<Instagram />}
              field="Instagram"
              value="@gukkey"
              key="contact-instagram"
              href="https://www.instagram.com/gukkey/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
