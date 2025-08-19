import React from "react";
import strawberryCake from "../../assets/strawberry-cake-3.png";
import ReviewComponent from "../../components/ReviewComponent";
import ScrollingCarousel from "../../components/ScrollingCarousel";
import { useFormik } from "formik";
import InputComponent from "../../components/InputComponent";
import { validationSchema } from "./ValidationSchema";

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
      console.log(values);
    },
  });

  console.log("values", formik.values);
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
      <form
        id="contact-form-container"
        onSubmit={formik.handleSubmit}
        className="bg-[#fef5e4] text-[#f58da0] flex gap-8 py-10 "
      >
        <div id="form-wrapper" className="flex flex-col flex-1 items-end">
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
            className="w-full max-w-2xs"
            inputClassName="p-4"
            error={formik.errors.name}
            touched={formik.touched.name}
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
            className="w-full max-w-2xs"
            inputClassName="p-4"
            error={formik.errors.emailAddress}
            touched={formik.touched.emailAddress}
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
            className="w-full max-w-2xs"
            inputClassName="p-4"
            error={formik.errors.phoneNumber}
            touched={formik.touched.phoneNumber}
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
            className="w-full max-w-2xs"
            inputClassName="pl-4"
            error={formik.errors.message}
            touched={formik.touched.message}
          />
        </div>
        <div id="contact-details-wrapper" className="flex-1">
          <p>Contact Us</p>
          <p>Get in touch</p>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
