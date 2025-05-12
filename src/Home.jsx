import Ribbon from "./components/Ribbon";

export default function Home() {
  return (
    <div className="home">
        <section className="hero_section">
            <div className="hero_ribbon_img">
            {/* <img src="/src/assets/rybbon1.png" alt="ribbon element" className="ribbon" /> */}
            <Ribbon />
            </div>
            <div className="hero_text">
              <div className="hero_title hero_title_1">

              <p>Oyin</p>
              <p>damola</p>
              </div>
              <div className="hero_title hero_title_2">
                <p>DAVID</p>
              </div>
            </div>
            <div className="hero_image">
              <img src="/src/assets/oyin11.png" alt="hero image" className="hero_img" />
            </div>
        </section>
        <section className="intro_section">
          <div className="intro_ribbon_img">
            <Ribbon />
          </div>
          <div className="intro_text">
            <p className="intro_text_1">jill of <span>many</span> </p>
            <p className="intro_text_2">trades</p>
          </div>
          <div className="intro_paragraph">
            <p>Hi there, my name is Oyindamola David and I am a Jill of many trades. I do many things and I do them well.</p>
          </div>
          <div className="intro_images">
            <div className="intro_image">
              <img src="/src/assets/introImages/introIMG1.jpg" alt="intro image" className="intro_img" />
            </div>
             <div className="intro_image">
              <img src="/src/assets/introImages/introIMG2.jpg" alt="intro image" className="intro_img" />
            </div>
             <div className="intro_image">
              <img src="/src/assets/introImages/introIMG3.jpg" alt="intro image" className="intro_img" />
            </div>
          </div>
          <div className="outro_text">
            <div>
            <p className="outro_text_1">heal deeply</p>
            <p className="outro_text_2">live boldly</p>
            </div>
          </div>
          <div className="outro_paragraph">
            <p>as a faith-based teacher, speaker, and all round creative, I am passionate about helping people, especially teens and young adults, live boldly, heal deeply, and grow spiritually so that they can live fully doing all God tells them to do.</p>
          </div>
        </section>

    </div>
  )
}
