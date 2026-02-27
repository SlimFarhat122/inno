import React from 'react';
import { Shield, User, Car, Lock, Share2, Eye, Trash2, Mail, Globe, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      padding: '120px 8% 80px',
      maxWidth: '1100px',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif",
      color: '#334155',
      lineHeight: '1.8'
    },
    header: {
      marginBottom: '50px',
      borderBottom: '2px solid #f1f5f9',
      paddingBottom: '30px'
    },
    title: {
      fontSize: '36px',
      fontWeight: '900',
      color: '#1e3a8a',
      marginBottom: '15px'
    },
    updateDate: {
      color: '#64748b',
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    introText: {
      fontSize: '18px',
      color: '#475569',
      marginBottom: '40px'
    },
    section: {
      marginBottom: '50px'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '800',
      color: '#1e3a8a',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderLeft: '5px solid #62a15b',
      paddingLeft: '20px'
    },
    subTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e3a8a',
      marginTop: '30px',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '30px',
      marginTop: '20px'
    },
    card: {
      backgroundColor: '#f8fafc',
      padding: '30px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
    },
    list: {
      paddingLeft: '20px',
      margin: '0'
    },
    listItem: {
      marginBottom: '12px'
    },
    highlight: {
      color: '#1e3a8a',
      fontWeight: '700'
    },
    footerCard: {
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '40px',
      borderRadius: '20px',
      marginTop: '60px',
      textAlign: 'center'
    },
    link: {
      color: '#62a15b',
      textDecoration: 'none',
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.container}>
      {/* EN-TÊTE */}
      <header style={styles.header}>
        <h1 style={styles.title}>Page de confidentialité – Plateforme de réservation de taxis Inno</h1>
        <p style={styles.updateDate}>Dernière mise à jour : 13 mai 2024</p>
      </header>

      {/* ENGAGEMENT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Shield size={28} /> Notre engagement envers votre vie privée</h2>
        <p style={styles.introText}>
          Inno est une plateforme de réservation de taxis qui s’engage à protéger la confidentialité de ses utilisateurs. 
          Nous recueillons et utilisons vos informations personnelles uniquement dans le but de vous offrir une expérience sûre, agréable et personnalisée. 
          Cette page de confidentialité explique en détail comment nous collectons, utilisons, partageons et protégeons vos informations personnelles.
        </p>
      </section>

      {/* COLLECTE DES DONNÉES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Eye size={28} /> Informations personnelles que nous collectons</h2>
        <p>Nous collectons les informations personnelles suivantes auprès de nos utilisateurs :</p>
        
        <div style={styles.cardGrid}>
          {/* Utilisateurs */}
          <div style={styles.card}>
            <h3 style={styles.subTitle}><User size={24} /> Utilisateurs :</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><span style={styles.highlight}>Nom complet :</span> Votre nom complet nous permet de vous identifier et de personnaliser votre expérience sur la plateforme.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Adresse e-mail :</span> Votre adresse e-mail est essentielle pour créer un compte, recevoir des confirmations de courses, des notifications et des communications marketing (avec votre consentement).</li>
              <li style={styles.listItem}><span style={styles.highlight}>Numéro de téléphone :</span> Votre numéro de téléphone permet aux chauffeurs de vous contacter en cas de besoin et sert de numéro de secours en cas d’urgence.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Emplacement GPS :</span> Nous utilisons votre emplacement GPS pour vous mettre en relation avec les chauffeurs les plus proches et pour vous fournir des informations sur le temps d’attente estimé pour une course.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Historique des courses :</span> Votre historique des courses nous permet de vous proposer des destinations fréquentes et d’améliorer nos recommandations.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Avis et commentaires :</span> Vos avis et commentaires nous aident à maintenir la qualité de nos services et à identifier les chauffeurs les plus performants.</li>
            </ul>
          </div>

          {/* Chauffeurs */}
          <div style={styles.card}>
            <h3 style={styles.subTitle}><Car size={24} /> Chauffeurs :</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><span style={styles.highlight}>Carte d’identité nationale :</span> La copie de votre carte d’identité nationale est nécessaire pour vérifier votre identité et nous assurer que vous êtes autorisé à exercer l’activité de taxi.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Permis de conduire :</span> Une copie de votre permis de conduire valide est obligatoire pour confirmer que vous êtes apte à conduire un véhicule de taxi.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Attestation d’assurance :</span> Nous demandons une copie de votre attestation d’assurance automobile pour garantir que vous êtes couvert en cas d’accident.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Carte grise du véhicule :</span> La carte grise de votre véhicule nous permet de vérifier la conformité de votre véhicule aux normes de sécurité.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Carte professionnelle de taxi :</span> Une copie de votre carte professionnelle de taxi est nécessaire pour s’assurer que vous êtes en règle avec les réglementations locales.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Emplacement GPS :</span> Nous utilisons votre emplacement GPS pour vous affecter des courses et assurer la sécurité des utilisateurs.</li>
              <li style={styles.listItem}><span style={styles.highlight}>Assurance :</span> Nous exigeons que tous les chauffeurs aient une assurance automobile valide. Nous pouvons vérifier votre attestation d’assurance à tout moment.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* UTILISATION DES DONNÉES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><CheckCircle size={28} /> Comment nous utilisons vos informations personnelles</h2>
        
        <h3 style={styles.subTitle}>Utilisateurs :</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.highlight}>Mettre en relation les utilisateurs avec des chauffeurs de taxi qualifiés et disponibles :</span> Nous utilisons votre emplacement GPS, vos préférences et l’historique de vos courses pour vous proposer le chauffeur le plus adapté à vos besoins.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Améliorer l’application et l’expérience utilisateur :</span> Nous analysons vos données d’utilisation pour identifier les fonctionnalités les plus appréciées et les points à améliorer. Vos avis et commentaires nous permettent également de mieux comprendre vos besoins et de vous offrir une expérience personnalisée.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Prévenir les fraudes et garantir la sécurité de la plateforme :</span>  Nous utilisons vos informations personnelles pour vérifier l’identité des utilisateurs et des chauffeurs, pour lutter contre les comportements frauduleux et pour assurer la sécurité de tous les utilisateurs de la plateforme.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Envoyer des communications marketing (avec le consentement des utilisateurs) :</span> Nous pouvons vous envoyer des emails ou des notifications push pour vous informer des actualités de la plateforme, des promotions en cours et des offres personnalisées (si vous avez consenti à recevoir des communications marketing).</li>
          <li style={styles.listItem}><span style={styles.highlight}>Réaliser des études de marché et analyses :</span> Nous utilisons des données anonymisées et agrégées pour comprendre les tendances d’utilisation de la plateforme, améliorer nos services et répondre aux besoins des utilisateurs.</li>
        </ul>

        <h3 style={styles.subTitle}>Chauffeurs :</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.highlight}>Vérifier l’identité et l’habilitation des chauffeurs :</span> Nous utilisons vos informations personnelles pour vérifier votre identité, votre permis de conduire, votre assurance et votre carte professionnelle de taxi afin de nous assurer que vous êtes autorisé à exercer l’activité de taxi et que vous respectez les réglementations locales.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Gérer les courses et assurer la sécurité des utilisateurs :</span>  Nous utilisons votre emplacement GPS pour vous affecter des courses et vous permettre de localiser les utilisateurs. Nous utilisons également vos informations personnelles pour vous contacter en cas de besoin et pour vous fournir des informations importantes sur les courses.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Prévenir les fraudes et garantir la sécurité de la plateforme :</span>  Nous utilisons vos informations personnelles pour lutter contre les comportements frauduleux et pour assurer la sécurité de tous les utilisateurs de la plateforme.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Envoyer des communications aux chauffeurs (nouvelles, mises à jour, etc.) :</span> Nous pouvons vous envoyer des emails ou des notifications push pour vous informer des demandes de courses et autres informations utiles, tels que : les mises à jour, le traitement administratif, etc.</li>
        </ul>
      </section>

      {/* PARTAGE DES DONNÉES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Share2 size={28} /> Comment nous partageons vos informations personnelles</h2>
        
        <h3 style={styles.subTitle}>Utilisateurs :</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.highlight}>Chauffeurs de taxi :</span> Nous partageons vos informations personnelles avec les chauffeurs qui vous sont assignés afin qu’ils puissent vous contacter, vous localiser et vous fournir le service de course demandé.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Clients :</span> Nous pouvons partager certaines de vos informations personnelles avec d’autres clients, telles que votre nom et l’heure de votre arrivée.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Prestataires tiers :</span> Nous pouvons faire appel à des prestataires de services tiers pour nous aider à fournir nos services, tels que le traitement des paiements, le développement des différents supports de la plateforme ou l’analyse des données. Ces prestataires de services auront accès à vos informations personnelles uniquement dans la mesure nécessaire pour fournir leurs services et seront tenus de respecter nos obligations en matière de confidentialité.</li>
        </ul>

        <h3 style={styles.subTitle}>Chauffeurs :</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.highlight}>Inno (pour la gestion des courses et la sécurité de la plateforme) :</span> Nous partageons vos informations personnelles avec nos équipes internes afin de gérer les courses, assurer la sécurité des utilisateurs et améliorer nos services.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Prestataires de services tiers :</span> Nous pouvons faire appel à des prestataires de services tiers pour nous aider à fournir nos services, tels que le traitement des paiements, le développement des différents supports de la plateforme ou l’analyse des données. Ces prestataires de services auront accès à vos informations personnelles uniquement dans la mesure nécessaire pour fournir leurs services et seront tenus de respecter nos obligations en matière de confidentialité.</li>
        </ul>
      </section>

      {/* PROTECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Lock size={28} /> Protection de vos informations personnelles</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.highlight}>Stockage sécurisé des données :</span> Données stockées sur des serveurs sécurisés hébergés en <span style={styles.highlight}>Tunisie</span>.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Cryptage des données :</span>  Nous cryptons vos informations personnelles lors de leur transmission et de leur stockage.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Contrôles d’accès stricts :</span> Nous limitons l’accès à vos informations personnelles au personnel et aux prestataires de services tiers qui ont besoin de les connaître pour vous fournir nos services.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Formation du personnel sur les pratiques de sécurité des données :</span> Nous formons régulièrement notre personnel sur les pratiques de sécurité des données et sur la protection de vos informations personnelles.</li>
          <li style={styles.listItem}><span style={styles.highlight}>Audits réguliers de sécurité :</span> Nous effectuons des audits réguliers de nos systèmes de sécurité pour nous assurer qu’ils sont conformes aux meilleures pratiques.</li>
        </ul>
      </section>

      {/* CONSERVATION & DROITS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Trash2 size={28} /> Conservation de vos informations personnelles</h2>
        <p>
          Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir les services, respecter les obligations légales et résoudre les litiges. Les données anonymisées peuvent être conservées à des fins de recherche et d’analyse. Vous pouvez demander la suppression de vos données à tout moment en nous contactant à l’adresse support@inno.tn.
        </p>
        <h3 style={styles.subTitle}>Vos droits concernant vos informations personnelles:</h3>
        <ul style={styles.list}>
          <li><span style={styles.highlight}>Accéder à vos informations personnelles :</span> Vous pouvez nous demander une copie des informations personnelles que nous détenons à votre sujet.</li>
          <li><span style={styles.highlight}>Corriger vos informations personnelles :</span> Vous pouvez nous demander de corriger les informations personnelles que vous jugez inexactes ou incomplètes.</li>
          <li><span style={styles.highlight}>Supprimer vos informations personnelles :</span> Vous pouvez nous demander de supprimer vos informations personnelles. Nous supprimerons vos informations personnelles dans la mesure où cela est autorisé par la loi.
</li>
        </ul>
      </section>

      {/* SITES ET APPS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><Globe size={28} /> Sites web et applications concernés</h2>
        <p>Cette page s'applique à :</p>
        <ul style={styles.list}>
          <li>Site web : <strong>https://inno.tn</strong></li>
          <li>Applications : <strong>"Inno"</strong>, <strong>"Inno Driver"</strong> et <strong>"Inno Alert"</strong></li>
        </ul>
      </section>

      {/* FOOTER CONTACT */}
      <div style={styles.footerCard}>
        <h2 style={{fontSize: '24px', marginBottom: '15px'}}>Contact & Support</h2>
        <p>Pour toute question ou pour exercer vos droits :</p>
        <p style={{fontSize: '20px', fontWeight: '800', margin: '15px 0'}}>
          <Mail inline size={24} style={{verticalAlign: 'middle', marginRight: '10px'}} /> 
          support@inno.tn
        </p>
        <p>Formulaire : <a href="https://inno.tn#contact" style={{color: 'white', textDecoration: 'underline'}}>https://inno.tn#contact</a></p>
        <p style={{marginTop: '20px', fontSize: '12px', opacity: 0.8}}>
          Nous pouvons modifier cette page à tout moment. Veuillez la consulter régulièrement.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;