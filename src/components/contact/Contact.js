import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krewn27",
        "template_2cmh9h6",
        formRef.current,
        "user_0mMyO4KpD1gShyhsWdpqB",
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
        <div className="tuts">
          <h3>Priprema peke za pečenje:</h3>
          <p className="directions">
            1.Peku staviti grijati otprilike petnaestak minuta(visoko kalorična
            drva) prije nego što vatra sagori..ili grijati peku blizu vatre.
            2.Tko peče peku na ugljen ili nešto drugo (karton,pelet,nisko
            kalorična drva,daske,itd.)ne mora se držati pravila pod brojem jedan
            tj.neka sam zaključi kad treba staviti peku za peći. P.S.Peku niju
            bitno čime će te je zagrijati..samo je zagrijte
          </p>
          <h3>Priprema posude za kuhanje:(Impregnancija)</h3>
          <p className="directions">
            Prije kuhanja obavezno posudu premazati uljem ili masti(jestivim)
            zatim staviti posudu na visoku temperaturu za kuhat(
            plin,struja,vatra) da posuda upije masnoću.((ako je potrebno dodati
            masti ili ulja,dodajte,)Impregnancija traje petnaestak minuta sa
            temperaturom oko 250°C(ovisi koju temperaturu koristite)Zatim izliti
            ostatak ulja,masti(ako ima) te nadoliti vrele vode (ili pričekati da
            se ulje tj.mast ohladi)Potom kad je sve hladno oprati posudu i
            nastaviti kuhatb po receptima koje vi znatei.Dobar tek.
          </p>
        </div>
      </div>
      <div className="right">
        <h2>Kontakt.</h2>

        <a href="tel:+385976669199" className="phone">
          📞 +385 97 666 9199
        </a>
      </div>
    </div>
  );
};

export default Contact;
