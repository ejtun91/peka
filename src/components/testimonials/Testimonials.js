import "./testimonials.scss";
import { Restaurant } from "@material-ui/icons";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Rudarenje",
      title: "Prvi Korak",
      img: "https://images.pexels.com/photos/5302903/pexels-photo-5302903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      icon: "assets/tool.png",
      desc: "Glina se ne pronalazi svugdje, a i ako je pronadete mnogo bitnija je njena kvaliteta. Zbog toga se trudimo da uvijek radimo sa najboljom klasom gline. Nakon pronalaska rude, slijedi mijesanje gline sa različitim sastojcima kako bi ta proizvedena masa bila kompaktna i spremna za obradu.",
    },
    {
      id: 2,
      name: "Izrada Loncarije",
      title: "Drugi Korak",
      img: "https://images.pexels.com/photos/357428/pexels-photo-357428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      icon: "assets/tool.png",
      desc: "Sama izrada je jako zahtijevan proces koji iziskuje i mnogo strpljenja. Sa dugogodisnjim iskustvom naš proizvod je dostigao sam vrh kvalitete za koje garantiramo. Vrste i oblici posuda su različiti jer ih pokušavamo uklopiti za bilo kakav oblik uporabe.",
      featured: true,
    },
    {
      id: 3,
      name: "Zavrsni Potez",
      title: "Treci Korak",
      img: "https://images.pexels.com/photos/7399418/pexels-photo-7399418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      icon: "assets/tool.png",
      desc: "Nakon uspješne izrade nasih proizvoda, isti je spreman za sušenje i na kraju pečenje. Naime, sušenje i pečenje povećavaju maksimalnu izdrzivost proizvoda i do najvećih temperatura pucanja.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Proces Proizvodnje</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
