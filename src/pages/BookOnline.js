import React from 'react'
import Breadcrumb from "../components/Breadcrumb"
import Container from "react-bootstrap/Container"

const BookOnline = () => {
  window.addEventListener('message', function handleIFrameMessage(e) {
    var clinikoBookings = document.getElementById('cliniko-39882858');
    if (typeof e.data !== 'string') return;
    if (e.data.search('cliniko-bookings-resize') > -1) {
      var height = Number(e.data.split(':')[1]);
      clinikoBookings.style.height = height + 'px';
    }
    e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
  });
  return (
    <>
      <Container id="book-online">
        <Breadcrumb />
        <iframe title="booking" id='cliniko-39882858' src='https://kin-ho-li.au3.cliniko.com/bookings?embedded=true'></iframe>
      </Container>
    </>
  );
}

export default BookOnline;