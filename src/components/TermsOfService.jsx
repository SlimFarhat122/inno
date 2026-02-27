import React from 'react';
import { Shield, Info, Eye, Clock, Share2, UserCheck, Phone, MapPin, Mail } from 'lucide-react';

const TermsOfService = () => {
  const styles = {
    container: {
      padding: '120px 8% 80px',
      maxWidth: '1100px',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif",
      color: '#334155',
      lineHeight: '1.8',
      backgroundColor: '#ffffff'
    },
    header: {
      marginBottom: '40px',
      borderBottom: '2px solid #f1f5f9',
      paddingBottom: '30px'
    },
    title: {
      fontSize: '32px',
      fontWeight: '900',
      color: '#1e3a8a',
      marginBottom: '10px'
    },
    updateDate: {
      color: '#64748b',
      fontSize: '15px',
      fontWeight: '700'
    },
    section: {
      marginBottom: '40px'
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '800',
      color: '#1e3a8a',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderLeft: '5px solid #62a15b',
      paddingLeft: '15px'
    },
    subSectionTitle: {
      fontSize: '18px',
      fontWeight: '800',
      color: '#1e3a8a',
      marginTop: '25px',
      marginBottom: '15px'
    },
    text: {
      marginBottom: '15px',
      textAlign: 'justify'
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px'
    },
    listItem: {
      marginBottom: '10px'
    },
    contactCard: {
      backgroundColor: '#f8fafc',
      padding: '30px',
      borderRadius: '15px',
      border: '1px solid #e2e8f0',
      marginTop: '40px'
    },
    bold: {
      fontWeight: '700',
      color: '#0f172a'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Déclaration relative à la vie privée INNO</h1>
        <p style={styles.updateDate}>Date de la dernière mise à jour: 25 Décembre 2024</p>
      </header>

      <div style={styles.section}>
        <p style={styles.text}>
          INNO est une application fournie par <span style={styles.bold}>DIGITAL CITY INNOVATION</span> (ci-après dénommée “nous”, “notre” ou “nos”). INNO fournit des services de transport intelligents pratiques pour vous.
        </p>
        <p style={styles.text}>La présente Déclaration décrit les aspects suivants :</p>
        <ol style={styles.list}>
          <li style={styles.listItem}>Quelles données collectons-nous à votre sujet?</li>
          <li style={styles.listItem}>Comment utilisons-nous vos données ?</li>
          <li style={styles.listItem}>Pendant combien de temps conservons-nous vos données ?</li>
          <li style={styles.listItem}>Comment partageons-nous vos données ?</li>
          <li style={styles.listItem}>Quels sont vos droits et vos options ?</li>
          <li style={styles.listItem}>Comment nous contacter ?</li>
          <li style={styles.listItem}>Comment mettons-nous la présente Déclaration à jour ?</li>
        </ol>
      </div>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Eye size={24} /> 1 Quelles données collectons-nous à votre sujet?</h2>
        <p style={styles.text}>
          Nous collectons et utilisons vos données personnelles aux seules fins stipulées dans la présente Déclaration. Par données personnelles, nous entendons toute information nous permettant de vous identifier comme utilisateur.
        </p>
        <p style={styles.text}>Nous pouvons donc être amenés à collecter et traiter les données suivantes :</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Informations sur l’appareil, telles que l’identifiant de l’appareil (UUID, UDID et OAID aléatoire), la langue du système, le code pays, le type d’appareil, le type de téléphone, la version du système d’exploitation.</li>
          <li style={styles.listItem}>Informations réseau, telles que l’adresse IP, le code pays mobile (MCC) et le code réseau de données mobiles (MNC).</li>
          <li style={styles.listItem}>Informations sur l’utilisation des applications, telles que les statistiques.</li>
          <li style={styles.listItem}>Les informations de localisation basées sur le GPS, qui consistent en une longitude et une latitude avec deux (2) décimales et vous permettent de vous situer dans un périmètre de localisation tel qu’un quartier ou une rue.</li>
        </ul>
        <p style={styles.text}>
          Afin de vous fournir les services, cette application INNO nécessite un accès à Internet. Elle doit également accéder à l’appareil et au réseau, ainsi qu’aux autres informations que vous envoyez. Vous pouvez gérer les autorisations sur votre appareil en allant dans <span style={styles.bold}>Paramètres &gt; Applications &gt; Applications &gt; INNO &gt; Autorisations</span>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Info size={24} /> 2 Comment utilisons-nous vos données ?</h2>
        <p style={styles.text}>
          Pour vous fournir les services de INNO, nous recueillerons et traiterons vos données sur la base de votre consentement ou de l’exécution de contrats, dans la mesure où cela est nécessaire pour la gestion de la relation client, l’assistance et la communication, le traitement des réclamations des clients, la maintenance, les mises à jour des logiciels et du système de l’utilisateur, et à des fins de diagnostic et de réparation.
        </p>
        <p style={styles.text}>
          Nous utiliserons vos informations de localisation basées sur le GPS, qui consistent en une longitude et une latitude avec deux (2) décimales, pour vous fournir des informations sur votre trajet, ou votre course.
        </p>
        <p style={styles.text}>En outre, nous pouvons être amenés à utiliser vos données personnelles aux fins suivantes, avec votre consentement :</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>À des fins d’analyse et de développement, notamment la création de groupes agrégés basés sur vos activités d’utilisation. Cela nous permet également de comprendre vos besoins en tant que clients et d’améliorer la qualité et l’expérience utilisateur de nos services et offres actuels et futurs. Vous pouvez vous opposer à cet opérateur des données comme décrit à la Section 5.5 ci-dessous.</li>
          <li style={styles.listItem}>À des fins de sécurité des informations et du compte, y compris le traitement de toutes vos données pour détecter ou prévenir divers types d’abus de services et de fraude afin de vous fournir des services sûrs et fiables.</li>
          <li style={styles.listItem}>Nous pouvons vous proposer des publicités personnalisées dans INNO.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Clock size={24} /> 3 Pendant combien de temps conservons-nous vos données ?</h2>
        <p style={styles.text}>
          Nous conserverons vos données personnelles pendant une durée n’excédant pas celle nécessaire aux fins définies dans la présente Déclaration.
        </p>
        <p style={styles.text}>Nous conservons vos données comme suit :</p>
        <p style={styles.text}>
          L’identifiant du compte client, le numéro de téléphone, la photo si elle existe, le type de téléphone, la version de l’application, la version du système d’exploitation et les informations relatives à l’utilisation de INNO seront conservés pendant <span style={styles.bold}>douze (12) mois</span> à compter de la date de leur collecte, sauf si vous vous opposez à ce traitement.
        </p>
        <p style={styles.text}>
          Une fois la période de conservation expirée, nous supprimerons vos données personnelles en temps voulu et les rendrons anonymes, sauf prescription légale contraire.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Share2 size={24} /> 4 Comment partageons-nous vos données ?</h2>
        <p style={styles.text}>
          Nous stockons vos données dans des data centers situés <span style={styles.bold}>exclusivement en Tunisie</span>.
        </p>
        <p style={styles.text}>
          Nos opérations commerciales et nos opérations de maintenance et de traitement des données ne peuvent avoir l’accès à vos données que depuis notre data center en Tunisie.
        </p>
        <p style={styles.text}>Nous partageons vos données dans les circonstances suivantes :</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Nos fournisseurs tiers, qui nous fournissent des services informatiques (y compris Cloud) et une assistance commerciale ainsi que des services d’assistance clientèle, peuvent être amenés à traiter vos informations. Toutes ces tierces parties opèrent sous contrat et agissent en notre nom. Nos prestataires informatiques ne peuvent traiter vos données que depuis la Tunisie</li>
          <li style={styles.listItem}>Nous pouvons être amenés à partager vos données en réponse à une procédure judiciaire ou à une demande émanant d’une autorité compétente conformément aux lois applicables ou dans le cadre d’une procédure ou d’un processus judiciaire.</li>
          <li style={styles.listItem}>Vos données peuvent également être divulguées dans le cadre d’une fusion, d’une acquisition, d’une vente d’actifs (tels que des accords de services) ou d’un transfert de services à une entité interne a Digital City Innovation.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><UserCheck size={24} /> 5 Quels sont vos droits et vos options ?</h2>
        <p style={styles.text}>Vous disposez des options et droits de la personne concernée suivants concernant vos données personnelles :</p>
        
        <h3 style={styles.subSectionTitle}>5.1 Accéder à vos données</h3>
        <p style={styles.text}>Vous pouvez demander des informations et une copie des données personnelles que nous avons collectées et stockées à votre sujet dans le cadre de votre utilisation d’INNO en nous contactant à contact@inno.tn</p>
        
        <h3 style={styles.subSectionTitle}>5.2 Rectifier vos données</h3>
        <p style={styles.text}>Si vous pensez que vos données ne sont pas exactes ou à jour, vous pouvez demander la rectification de ces données en passant par la page du profil ou de nous contacter sur cette adresse : contact@inno.tn. Dans votre demande, n’oubliez pas de spécifier la portée des données que vous souhaitez rectifier. Nous vous contacterons pour vérifier votre identité afin de donner suite à votre demande.</p>
        
        <h3 style={styles.subSectionTitle}>5.3 Transférer vos données</h3>
        <p style={styles.text}>Vous pouvez transférer vos données personnelles que vous nous avez fournies en nous contactant.</p>
        
        <h3 style={styles.subSectionTitle}>5.4 Suppression des données</h3>
        <p style={styles.text}>Vous pouvez à tout moment :</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Effacez vos données dans INNO en allant à Paramètres &gt; Applications &gt; Applications &gt; INNO &gt; Stockage &gt; EFFACER LES DONNÉES.</li>
          <li style={styles.listItem}>Désinstaller l’application.</li>
          <li style={styles.listItem}>S’opposer au traitement de vos données tel que décrit dans la Section 5.5. Si votre objection est valide et que nous n’avons plus de base légale pour continuer le traitement de vos données, nous supprimerons les données correspondantes, à condition bien sûr que votre objection soit recevable.</li>
        </ul>
        <p style={styles.text}>Veuillez nous contacter si vous pensez que le traitement de vos données personnelles est illégal et que vos données doivent être supprimées. Le cas échéant, en fonction de vos actions susmentionnées, nous effacerons ou rendrons anonymes vos données personnelles sans retard injustifié, conformément aux périodes de conservation détaillées dans la Section 3.</p>
        
        <h3 style={styles.subSectionTitle}>5.5 S’opposer au traitement</h3>
        <p style={styles.text}>Vous pouvez vous opposer à l’utilisation de vos données à des fins d’analyse et de développement en nous contactant.</p>
        
        <h3 style={styles.subSectionTitle}>5.6 Limiter le traitement</h3>
        <p style={styles.text}>Si vous souhaitez limiter le traitement de vos données personnelles, veuillez nous contacter. Vous avez le droit de limiter le traitement de vos données personnelles dans les cas suivants :</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Vos données sont traitées de manière illégale, mais vous ne souhaitez pas les supprimer.</li>
          <li style={styles.listItem}>Vous devez établir, présenter ou défendre une réclamation légale, et vous nous demandez de conserver des données que nous ne conserverions pas en temps normal.</li>
          <li style={styles.listItem}>Vous avez contesté l’exactitude de vos données personnelles, laquelle est en attente de notre vérification.</li>
          <li style={styles.listItem}>Votre demande d’opposition est en attente de vérification.</li>
        </ul>
        <p style={styles.text}>Dans votre demande, n’oubliez pas de spécifier la portée et les circonstances attenantes. Nous vous contacterons pour vérifier votre identité afin de donner suite à votre demande.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Phone size={24} /> 6 Comment nous contacter ?</h2>
        <p style={styles.text}>
          Vous trouverez des conseils sur la méthode à suivre pour exercer vos droits de la personne titulaire des données dans la section 5. Si vous avez des questions, commentaires ou suggestions sur vos droits en tant que personne titulaire des données ou sur notre traitement de vos données personnelles, ou si vous souhaitez contacter notre délégué à la protection des données, veuillez nous contacter.
        </p>
        <div style={styles.contactCard}>
          <p style={styles.text}><MapPin size={18} style={{marginRight: '10px', verticalAlign: 'middle'}} /> <span style={styles.bold}>Notre adresse:</span> Startup Village, Immeuble Saiidi 1004 Tunis.</p>
          <p style={styles.text}><Phone size={18} style={{marginRight: '10px', verticalAlign: 'middle'}} /> <span style={styles.bold}>Numéro de téléphone :</span> 58000888</p>
          <p style={styles.text}><Mail size={18} style={{marginRight: '10px', verticalAlign: 'middle'}} /> <span style={styles.bold}>Email :</span> contact@inno.tn</p>
        </div>
        <p style={{marginTop: '15px', fontStyle: 'italic'}}>
          Si vous pensez que nous ne traitons pas vos données personnelles conformément à la présente Déclaration ou aux lois en vigueur en matière de protection des données, vous pouvez déposer une plainte auprès de l’autorité chargée de protection des données en Tunisie.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Shield size={24} /> 7 Comment mettons-nous la présente Déclaration à jour ?</h2>
        <p style={styles.text}>
          Nous vous encourageons à vérifier régulièrement la dernière version de cette Déclaration dans les paramètres de l’application, car il se peut que nous la modifiions de temps à autre.
        </p>
        <p style={styles.text}>
          En cas de modification importante de la présente Déclaration, nous vous en informerons par une méthode appropriée, telle que des boîtes de dialogue contextuelles de notification, des messages push, etc. en fonction de la nature de la modification.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;