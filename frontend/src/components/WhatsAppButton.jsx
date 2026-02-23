import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

function WhatsAppChat() {
  const [show, setShow] = useState(false);

  const phoneNumber = "9638784184";
  const message = "Hello, I need help";

  // 🔹 Detect Mobile Device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // 🔹 Universal Link
  const whatsappLink = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShow(!show)}
        className="btn rounded-circle position-fixed d-flex align-items-center justify-content-center"
        style={{
          bottom: "20px",
          left: "20px",
          width: "50px",
          height: "50px",
          background: "#25D366",
          color: "white",
          zIndex: 9999,
          border: "none"
        }}
      >
        {show ? <FaTimes size={22} /> : <FaWhatsapp size={26} />}
      </button>

      {/* Popup */}
      {show && (
        <div
          className="position-fixed bg-white rounded shadow"
          style={{
            bottom: "90px",
            left: "20px",
            width: "310px",
            zIndex: 9999
          }}
        >
          <div className="bg-success text-white p-3 rounded-top">
            <h6 className="mb-1">Start a Conversation</h6>
            <small>Click below to chat on WhatsApp</small>
          </div>

          <div className="p-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center border rounded p-2 text-decoration-none"
            >
              <div className="flex-grow-1">
                <strong>Amanah</strong>
                <div className="small text-muted">
                  Drop a message if you need help.
                </div>
              </div>

              <FaWhatsapp color="#25D366" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppChat;
