import React from "react";
import {
  Aside,
  AsideImg,
  ContactDetails,
  ContactForm,
  ContactPageStyle,
  ContactSocials,
} from "./styles";

import ImgInfoContact from "../../imagenes/email-info.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FormOfContact } from "../../components/Contact/contact-form";

export const ContactPage = () => {
  return (
    <ContactPageStyle>
      <ContactForm>
        <Aside>
          <AsideImg>
            <img src={ImgInfoContact} alt="" />
          </AsideImg>
          <h2>Contactanos!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            consectetur ratione consequuntur minima harum, eum quia omnis
          </p>
          <ul>
            <ContactDetails>
              <FontAwesomeIcon icon={faEnvelope} />
              <h5>ejemplo@example.com</h5>
            </ContactDetails>
            <ContactDetails>
              <FontAwesomeIcon icon={faPhone} />
              <h5>+1 555-1234</h5>
            </ContactDetails>
            <ContactDetails>
              <FontAwesomeIcon icon={faMap} />
              <h5>Lorem, ipsum dolor.</h5>
            </ContactDetails>
          </ul>
          <ContactSocials>
            <ContactSocials>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </ContactSocials>
            <ContactSocials>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </ContactSocials>
            <ContactSocials>
              <a href="">
                {" "}
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </ContactSocials>
          </ContactSocials>
        </Aside>
        <FormOfContact />
      </ContactForm>
    </ContactPageStyle>
  );
};
