import styles from "../pages/Product.module.css";
import Image2 from "../../public/Images/img-2.jpg";
import NavMenu from "../components/NavMenu/NavMenu";

function Pricing() {
  return (
    <main className={styles.product}>
      <NavMenu />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src={Image2} alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}

export default Pricing;
