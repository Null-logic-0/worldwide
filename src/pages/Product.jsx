import NavMenu from "../components/NavMenu/NavMenu";
import styles from "../pages/Product.module.css";
import Image1 from "../../public/Images/img-1.jpg";

function Product() {
  return (
    <main className={styles.product}>
      <NavMenu />

      <section>
        <img
          src={Image1}
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
export default Product;
