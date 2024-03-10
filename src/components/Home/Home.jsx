import Aladhan from '../Aladhan/Aladhan';
import Homecss from './Home.module.css';
function Home() {
    return <>
   <section className={Homecss.hero}>
  <div className="container">
    <div className="row">
      {/*text col*/}
      <div className="col-md-6">
        <div className={Homecss.text}>
          <h2>Ramdan Karem</h2>
          <p> May practicing sawm and salat bring light to your soul this Ramadan.</p>
          <p> Wishing you abundance for Iftar</p>
        </div>
      </div>
      {/*image col*/}
      <div className="col-md-6">
        <img src={require("../../photos/IndoJuly_9.png")} alt="hero" className="w-75" />
      </div>
    </div>
  </div>
</section>

<Aladhan/>
    </>
}

export default Home
