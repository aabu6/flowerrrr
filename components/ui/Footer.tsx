import React from "react";
import ContactButton from "./ContactButton";
export default function Footer() {
   return (
      <footer className="h-[90vh] bg-black text-white">
         <h1 className="text-center font-humane text-8xl uppercase pt-[2rem] ">
            Contact Me
         </h1>
         <p className="lg:mx-[8rem] text-center font-light font-sans mb-[2rem]">
            We value your feedback and inquiries! Whether you have a question,
            suggestion, or just want to connect, there are several ways to reach
            us.For detailed inquiries or support, feel free to reach out to us
            via email. Our dedicated team is ready to assist you and will
            respond promptly to ensure you get the information you need
         </p>
         <div className="space-x-4 flex justify-center">
            <ContactButton
               type="email"
               href="mailto:090flochi@gmail.com
"
            />
            <ContactButton
               type="call"
               href="tel:+977-
9818066807"
            />
         </div>
      </footer>
   );
}
