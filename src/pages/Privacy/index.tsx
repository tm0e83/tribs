import { Link } from 'react-router-dom';
import styles from './Privacy.module.css';

export default function PrivacyPage() {
  const email = atob('dG0wZTgzQGdtYWlsLmNvbQ==');

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Zurück</Link>
      <h1>Datenschutzerklärung</h1>

      <div className={styles.section}>
        <h2>1. Verantwortlicher</h2>
        <p>
          Timo Ribeiro Szyszka<br />
          Neugasse 21<br />
          68649 Groß-Rohrheim<br />
          E-Mail: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>

      <div className={styles.section}>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird gehostet bei ALL-INKL.COM. Bei jedem Aufruf
          der Website werden automatisch Informationen in sogenannten
          Server-Logfiles gespeichert. Dies sind:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Verwendeter Browser und Betriebssystem</li>
        </ul>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an einem sicheren und funktionsfähigen Betrieb der Website). Die Daten
          werden nicht mit anderen Datenquellen zusammengeführt und nach spätestens
          7 Tagen gelöscht.
        </p>
      </div>

      <div className={styles.section}>
        <h2>3. Cookies und lokaler Speicher</h2>
        <p>
          Diese Website verwendet keine Cookies. Es wird jedoch der lokale Speicher
          (localStorage) Ihres Browsers genutzt, um Antworten der GitHub-API
          zwischenzuspeichern (zuletzt aktualisiertes Datum von Repositories).
          Diese Daten enthalten keine personenbezogenen Informationen und werden
          ausschließlich zur Reduktion externer API-Anfragen verwendet.
          Sie können diese Daten jederzeit über die Entwicklertools Ihres Browsers löschen.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Analyse und Tracking</h2>
        <p>
          Diese Website verwendet keine Tracking- oder Analysetools. Es werden
          keine personenbezogenen Daten zu Werbe- oder Analysezwecken erhoben.
        </p>
      </div>

      <div className={styles.section}>
        <h2>5. Externe Dienste und Links</h2>
        <p>
          Diese Website ruft beim Seitenaufruf automatisch die GitHub-API
          (<a href="https://api.github.com" target="_blank" rel="noreferrer">api.github.com</a>)
          ab, um das zuletzt aktualisierte Datum von Repositories anzuzeigen.
          Dabei wird Ihre IP-Adresse an GitHub (GitHub, Inc., 88 Colin P Kelly Jr St,
          San Francisco, CA 94107, USA) übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse an der Darstellung aktueller Projektdaten).
          Die Anfragen werden clientseitig für eine Stunde zwischengespeichert,
          um die Anzahl der Übertragungen zu minimieren. Informationen zur
          Datenverarbeitung durch GitHub finden Sie in deren{' '}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">Datenschutzerklärung</a>.
        </p>
        <p>
          Diese Website enthält zudem Links zu externen Plattformen (GitHub, Xing,
          LinkedIn). Beim Anklicken dieser Links verlassen Sie diese Website.
          Für die Datenverarbeitung auf den verlinkten Seiten sind die jeweiligen
          Anbieter verantwortlich.
        </p>
      </div>

      <div className={styles.section}>
        <h2>6. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte
          E-Mail-Adresse. Sie haben zudem das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren.
        </p>
      </div>

      <div className={styles.section}>
        <h2>7. Aktualität</h2>
        <p>Stand: April 2026</p>
      </div>
    </div>
  );
}
