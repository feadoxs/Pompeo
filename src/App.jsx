import './App.css'
import logo from './assets/Pompeo.svg';
import shopLogo from './assets/shop-logo.svg';
import firstSectionImg from './assets/first-section-image.svg';
import and from './assets/&.svg';
import Card from '/Components/Card';
import secondSectionCard1 from './assets/second-section-card1.svg';
import Info from '/Components/Info';
import Part from '/Components/Part';
import thirdSectionImg1 from '/src/assets/third-section-img1.svg';
import thirdSectionImg2 from '/src/assets/third-section-img2.svg';
import Cards from '/Components/Cards';
import fourthSectionCard1 from '/src/assets/fourth-section-card1.svg';
import sixSectionLogo from './assets/six-section-logo.svg';
import FooterCard from '/Components/Footer-card';
import footerCard1 from './assets/footer-section-card1.svg';
import footerCard2 from './assets/footer-section-card2.svg';
import footerCard3 from './assets/footer-section-card3.svg';
import secondCard from './assets/second-card.svg';
import thirdCard from './assets/third-card.svg';


function App() {
  return (
    <>
      {/* Навигационное меню */}
      <header>
        <div className='header-container container'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className='header-container-right-wrap'>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
            <div className='header-container-end-item'>
              <img src={shopLogo} alt="" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>

      {/* Первая секция */}
      <section className='first-section'>
        <div className="first-container container">
          <div className="first-section-left-wrap">
            <span>POMPEO POTTERY</span>
            <h1>Unique Porcelain <img src={and} alt="" /> Stone Collection</h1>
            <p>Unique & modern pottery made by our master in porcelain & stones</p>
            <button>SHOP COLLECTION</button>
          </div>
          {/* Правая часть */}
          <div className='first-section-right-wrap'>
            <img src={firstSectionImg} alt="" />
          </div>
        </div>
      </section>

      {/* Вторая секция */}
      <section className='second-section'>
        <div className='second-container container'>
          <div className="second-container-top-wrap">
            <span>PRODUCT CATEGORIES</span>
            <h2>Porcelain <img src={and} alt="" />Pottery</h2>
          </div>
          {/* Коробка */}
          <div className='second-section-box'>
            <Card firstCard={"first-card"} img={secondSectionCard1} text={"VASES"} />
            <Card secondCard={"second-card"} secondCircle={"second-circle"} img={secondCard} text={"VASES"} />
            <Card thirdCard={"third-card"} thirdCircle={"third-circle"} img={thirdCard} text={"VASES"} />
          </div>

          {/* текст коробка */}
          <div className='text-box'>
            <Info title={"Hand Grafted Pottery since 1990"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."} />
            <Info longTitle={"long-title"} title={"We Provide Premium Pottery Produts"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."} />
          </div>
        </div>
      </section>

      {/* Третья секция */}
      <section className='third-section'>
        <div className="third-container container">
          <div>
            <Part img={thirdSectionImg1} title={"Gold & Black Pottery"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."} />
            <Part reverse={"reverse"} right={"right-reverse"} left={"left-reverse"} img={thirdSectionImg2} title={"Orange Ceramic"} text={"Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt."} />
          </div>
        </div>
      </section>

      {/* Четвёртая секция */}
      <section className='fourth-section'>
        <div className="fourth-container container">
          <div className='fourth-container-top-wrap'>
            <span>OUR ONLINE STORE</span>
            <h2>Pottery Collection</h2>
          </div>

          {/* Коробка */}
          <div className='fourth-container-box'>
            <Cards img={fourthSectionCard1} name={"Decor Plate"} price={"$ 65.00 USD"} />
            <Cards img={fourthSectionCard1} name={"Decor Plate"} price={"$ 65.00 USD"} />
            <Cards img={fourthSectionCard1} name={"Decor Plate"} price={"$ 65.00 USD"} />
            <Cards img={fourthSectionCard1} name={"Decor Plate"} price={"$ 65.00 USD"} />
            <Cards img={fourthSectionCard1} name={"Decor Plate"} price={"$ 65.00 USD"} />
            <Cards img={fourthSectionCard1} name={"Decor Plate"} price={"$ 65.00 USD"} />
          </div>

          <div className='fourth-container-bottom-item'>
            <button>VIEW ALL PRODUCTS</button>
          </div>
        </div>
      </section>

      {/* Пятая секция */}
      <section className='five-section'>
        <div className="five-container container">
          <div className='five-section-left-item'>
            <span>POMPEO POTTERY</span>
            <h2>Ready to start shopping?</h2>
            <p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit </b>. Suspendisse varius enim in eros elementum.</p>
            <button>NEW COLLECTION</button>
          </div>
        </div>
      </section>

      {/* Шестая секция */}
      <section className="six-section">
        <div className="six-container container">
          <div className='six-container-top-wrap'>
            <img src={sixSectionLogo} alt="" />
            <p>LATEST NEWS</p>
            <h2>Latest news <img src={and} alt="" />New updates</h2>
          </div>

          {/* Основная часть */}
          <div className='six-container-main-wrap'>
            <div>
              <div>
                <input type="email" className='email' />
                <button>SUBSCRIBE</button>
              </div>
              <div className='six-section-end-item'>
                <input type="checkbox" />
                <p>Sign up for our newsletter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-containercontainer">
          <div className='footer-container-top-wrap'>
            <img src={logo} alt="" />
            <p>I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed.</p>
          </div>

          <div className='footer-section-box'>
            <FooterCard img={footerCard1} text={"EMAIL"} email={"pompeopotery@gmail.com"} />
            <FooterCard img={footerCard2} text={"FIND"} email={"Central Park, Manhattan New York, 1101"} />
            <FooterCard img={footerCard3} text={"CALL"} email={"+1 292 345 678"} />
          </div>

          {/* Нижняя часть */}
          <div className='footer-bottom-wrap long-container'>
            <p>Template design by
              <span>Dorian Hoxha</span>
              -
              <span>Image License Info</span> Powered by <span>Webflow</span></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
