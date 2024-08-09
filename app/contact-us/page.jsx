import React from "react";
import { TextField } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col gap-2 ">
      <div className="lg:flex lg:flex-row flex-col w-full gap-2 ">
        <div className="flex flex-col lg:w-[50%] w-full glassmorphism gap-2">
          <div className="glassmorphism">
            <h4 className="font-semibold text-orange-900">How it started</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              atque culpa impedit perferendis quidem. Autem rem soluta
              architecto officia nesciunt neque asperiores facilis eius rerum
              voluptatem, placeat, sit quis aperiam. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col glassmorphism gap-8">
            <div className="flex gap-1">
              <div className="w-[10%]">
                <PhoneIcon />
              </div>
              <div className="w-[90%]">+ 90 555 555 55 55</div>
            </div>
            <div className="flex gap-1">
              <div className="w-[10%]">
                <PlaceIcon />
              </div>
              <div className="w-[90%]">
                Plot No. 123, Nyerere Road, Kariakoo, Dar es Salaam, Tanzania
              </div>
            </div>
          </div>
        </div>
        <div className="lg:m-auto w-full lg:w-[50%]">
          <form className="w-full flex flex-col gap-5">
            <div className="flex gap-2 justify-between">
              <TextField className="w-[50%]" required label="First name" />
              <TextField className="w-[50%]" required label="Last name" />
            </div>
            <TextField required type="emial" label="Email" />
            <TextField required type="number" label="Phone" />
            <TextField required label="Message" />
            <button className="w-full orange_btn">SEND</button>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11563.741676761663!2d39.272882708471634!3d-6.8189320143972605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2str!4v1722681988384!5m2!1sen!2str"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
    </div>
  );
};

export default ContactUs;
