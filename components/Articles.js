import styles from "../styles/Articles.module.css";
import Link from "next/link";
import Image from "next/image"

export default function Articles() {
  const articles = [
    {
      title: "",
      link: "",
      previewImage: "",
    },
    {
      title: "",
      link: "",
      previewImage: "",
    },
    {
      title: "",
      link: "",
      previewImage: "",
    },
  ];

  return (
    <section>
      <h3 className={styles.article__header}>Published Articles</h3>

      <p className={styles.article__subheader}>
        Here are Some of my published articles
      </p>

<div className={styles.articles}>
      {articles.map((article) => {
        return (
          <Link key={article.link} href={article.link} passHref>
            <div className={styles.article__card}>
              <div className={styles.article__cover}>
                <Image src={styles.article__previewImage} alt="Article Preview" height={192} width={256} />
              </div>
            </div>
            <div className={styles.article__title}>
                <p></p>
            </div>
          </Link>
        );
      })}
</div>

      <div>
        <p className={styles.advice}>
          Check Out More Articles on my{" "}
          <Link href={"https://www.github.com/ok-timmy"} passHref>
            <button data-text="Awesome" className={styles.button}>
              <span className={styles.actual__text}>&nbsp;Hashnode&nbsp;</span>
              <span className={styles.hover__text} aria-hidden="true">
                &nbsp;Hashnode&nbsp;
              </span>
            </button>
          </Link>
        </p>
      </div>
    </section>
  );
}
