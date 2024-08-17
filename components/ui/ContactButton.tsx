import React from "react";

interface ContactButtonProps {
   type: "email" | "call";
   href: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ type, href }) => {
   const content = type === "email" ? "Email" : "Call";

   return (
      <a
         href={href}
         className="
        inline-block relative py-3.5 px-7 uppercase no-underline tracking-widest text-transparent border-3 border-yellow-400 text-sm font-inherit bg-transparent cursor-pointer
        before:content-[attr(data-content)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-800 before:text-yellow-400 before:flex before:justify-center before:items-center before:transition-all before:duration-500
        hover:before:left-full hover:before:scale-0 hover:before:rotate-y-360 hover:before:opacity-0
        after:content-[attr(data-content)] after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-neutral-800 after:text-yellow-400 after:flex after:justify-center after:items-center after:transition-all after:duration-500 after:scale-0 after:rotate-y-0 after:opacity-0
        hover:after:left-0 hover:after:scale-100 hover:after:rotate-y-360 hover:after:opacity-100
      "
         data-content={content}
      >
         {content}
      </a>
   );
};

export default ContactButton;
