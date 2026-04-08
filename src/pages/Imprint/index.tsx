import { Link } from 'react-router-dom';
import styles from './Imprint.module.css';

export default function ImprintPage() {
  const email = atob('dG0wZTgzQGdtYWlsLmNvbQ==');

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Zurück</Link>
      <h1>Impressum</h1>

      <div className={styles.section}>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Timo Ribeiro Szyszka<br />
          Neugasse 21<br />
          68649 Groß-Rohrheim
        </p>
      </div>

      <div className={styles.section}>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>

      <div className={styles.section}>
        <h2>Hinweis</h2>
        <p>
          Diese Website ist ein privates Portfolio ohne gewerblichen Charakter.
          Es besteht keine Umsatzsteuer-Identifikationsnummer.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Haftung für Links</h2>
        <p>
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten
          ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
          umgehend entfernen.
        </p>
      </div>
    </div>
  );
}
