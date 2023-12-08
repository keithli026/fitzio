import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const phone = "61431201847";
const WhatsappButton = () => {
  return (
    <a
    href={`https://wa.me/${phone}`}
    className="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon>
  </a>
  )
}

export default WhatsappButton