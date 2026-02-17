import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Mélodie Bouly',
    photo: '/images/photo.jpg',
    photoBackEmoji: '🧠',
    title: {
      en: 'Applied Machine Learning Engineer',
      fr: 'Ingénieure Machine Learning Appliqué',
    },
    subtitle: {
      en: '4 years of experience',
      fr: '4 ans d\'expérience',
    },
    summary: {
      en: 'Applied ML Engineer with 4 years of experience in deep learning for complex signal and volumetric data processing. Skilled in end-to-end ML pipelines — from data collection strategy and preprocessing to model deployment. Proven ability to adapt ML expertise across domains within multidisciplinary, customer-facing environments.',
      fr: 'Ingénieure ML Appliqué avec 4 ans d\'expérience en deep learning pour le traitement de signaux complexes et de données volumétriques. Compétente en pipelines ML de bout en bout — de la stratégie de collecte de données au déploiement de modèles. Capacité prouvée à adapter son expertise ML à différents domaines dans des environnements multidisciplinaires orientés client.',
    },
    location: 'Montpellier, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Mélodie Bouly — Applied Machine Learning Engineer',
    description: 'Interactive resume of Mélodie Bouly, Applied ML Engineer with 4 years of experience in deep learning for complex signal and volumetric data processing.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'linkedin', label: 'Mélodie Bouly', href: 'https://www.linkedin.com/in/m%C3%A9lodie-bouly-03b8641a3/' },
    { type: 'email', label: 'melodiebouly@gmail.com' },
    { type: 'phone', label: '+33 6 45 74 90 17' },
    { type: 'location', label: 'Montpellier, willing to relocate to Switzerland' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Fluent', fr: 'Courant' } },
        { name: { en: 'German', fr: 'Allemand' }, level: { en: 'B1', fr: 'B1' } },
      ],
    },
    {
      title: { en: 'Deep Learning & Signal Processing', fr: 'Deep Learning & Traitement du Signal' },
      type: 'badges',
      items: [
        { name: 'PyTorch' },
        { name: 'TensorFlow' },
        { name: 'scikit-learn' },
        { name: 'AutoML' },
      ],
    },
    {
      title: { en: 'Python & Data Engineering', fr: 'Python & Ingénierie de Données' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'PyVista' },
        { name: 'Matplotlib' },
      ],
    },
    {
      title: { en: 'MLOps & Infrastructure', fr: 'MLOps & Infrastructure' },
      type: 'badges',
      items: [
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'GitLab CI' },
      ],
    },
    {
      title: { en: 'Software Engineering', fr: 'Pratiques Logicielles' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'pytest' },
        { name: 'conda' },
        { name: 'Docker' },
      ],
    },
    {
      title: { en: 'Personality', fr: 'Personnalité' },
      type: 'text',
      items: [
        {
          name: {
            en: 'Clear communication, Strong adaptability across domains, Team spirit',
            fr: 'Communication claire, Forte adaptabilité inter-domaines, Esprit d\'équipe',
          },
        },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'simcure-engineer',
      company: { en: 'Sim&Cure', fr: 'Sim&Cure' },
      role: {
        en: 'Junior Data Science Engineer',
        fr: 'Ingénieure Data Science Junior',
      },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: 'Oct 2022 - March 2025', fr: 'Oct 2022 - Mars 2025' },
      description: {
        en: 'Applied ML Engineer in the R&D department of a medical startup. End-to-end ML/DL pipelines for detection, segmentation and clinical outcome prediction on complex 3D medical data.',
        fr: 'Ingénieure ML Appliqué au sein du département R&D d\'une startup médicale. Pipelines ML/DL de bout en bout pour la détection, segmentation et prédiction de résultats cliniques sur données médicales 3D complexes.',
      },
      techs: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'AWS', 'Docker', 'Pandas', 'NumPy', 'PyVista', 'GitLab CI'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Data Scientist in a team of 4 within the Research & Development department of a 60-person startup specializing in medical devices for treating intracranial aneurysms.',
          fr: 'Data Scientist dans une équipe de 4 personnes au sein du département Recherche & Développement d\'une startup de 60 personnes spécialisée dans les dispositifs médicaux pour le traitement des anévrismes intracrâniens.',
        },
        tasks: {
          en: [
            'Designed and optimized ML models for clinical outcome prediction from heterogeneous feature sets, including systematic experimentation and performance benchmarking',
            'Built end-to-end deep learning pipelines for automated detection and localization on complex 3D raw data (MRA, CTA), including data collection strategy, preprocessing, model training, and hyperparameter tuning',
            'Developed a transformer-based segmentation model for 3D structures, delivered as a production-ready plugin within a European multi-site consortium',
            'Built a data analytics dashboard via API integration, identifying usage patterns and delivering actionable insights to executives',
            'Supervised 2 interns (Master\'s and Bachelor\'s level)',
          ],
          fr: [
            'Conception et optimisation de modèles ML pour la prédiction de résultats cliniques à partir d\'ensembles de caractéristiques hétérogènes, incluant expérimentation systématique et benchmarking de performances',
            'Construction de pipelines de deep learning de bout en bout pour la détection et localisation automatisées sur des données 3D brutes complexes (ARM, CTA), incluant stratégie de collecte de données, prétraitement, entraînement et optimisation d\'hyperparamètres',
            'Développement d\'un modèle de segmentation basé sur des transformers pour des structures 3D, livré en tant que plugin prêt pour la production au sein d\'un consortium européen multi-sites',
            'Construction d\'un tableau de bord d\'analyse de données via intégration API, identification de patterns d\'utilisation et présentation d\'insights actionnables aux dirigeants',
            'Encadrement de 2 stagiaires (niveaux Master et Licence)',
          ],
        },
        env: {
          en: 'Python / AWS / PyTorch / TensorFlow / scikit-learn / Docker / Pandas / NumPy / PyVista / CI-CD / GitLab',
          fr: 'Python / AWS / PyTorch / TensorFlow / scikit-learn / Docker / Pandas / NumPy / PyVista / CI-CD / GitLab',
        },
      },
    },
    {
      id: 'simcure-apprentice',
      company: { en: 'Sim&Cure', fr: 'Sim&Cure' },
      role: {
        en: 'Data Science Apprentice',
        fr: 'Apprentie Data Science',
      },
      type: { en: 'Apprenticeship', fr: 'Alternance' },
      period: { en: 'Oct 2020 - Sept 2022', fr: 'Oct 2020 - Sept 2022' },
      description: {
        en: 'Developed and deployed a production ML model integrated into commercial software for automated 3D reconstruction — model still in use. Defined data collection strategies in collaboration with domain experts to build robust, high-quality training datasets.',
        fr: 'Développement et déploiement d\'un modèle ML en production intégré dans un logiciel commercial pour la reconstruction 3D automatisée — modèle toujours en usage. Définition de stratégies de collecte de données en collaboration avec des experts métier pour constituer des datasets d\'entraînement robustes et de haute qualité.',
      },
      techs: ['Python', 'PyTorch', 'scikit-learn', 'AWS', 'Pandas', 'NumPy', 'PyVista'],
      details: {
        context: {
          en: 'Data Scientist apprentice during a Master\'s work-study program, part of a 3-person team within the Research & Development department of a 30-person startup.',
          fr: 'Data Scientist en apprentissage dans le cadre d\'un Master en alternance, dans une équipe de 3 personnes au sein du département Recherche & Développement d\'une startup de 30 personnes.',
        },
        tasks: {
          en: [
            'Developed and deployed a production ML model integrated into commercial software for automated 3D reconstruction',
            'Defined data collection strategies in collaboration with domain experts to build robust, high-quality training datasets',
            'Performed data engineering on complex medical datasets',
            'Collected data in hospitals and collaborated with physicians',
          ],
          fr: [
            'Développement et déploiement d\'un modèle ML en production intégré dans un logiciel commercial pour la reconstruction 3D automatisée',
            'Définition de stratégies de collecte de données en collaboration avec des experts métier pour constituer des datasets d\'entraînement robustes',
            'Ingénierie de données sur des jeux de données médicales complexes',
            'Collecte de données en milieu hospitalier et collaboration avec des médecins',
          ],
        },
        env: {
          en: 'Python / AWS / PyTorch / scikit-learn / Pandas / NumPy / PyVista',
          fr: 'Python / AWS / PyTorch / scikit-learn / Pandas / NumPy / PyVista',
        },
      },
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Montpellier', fr: 'Université de Montpellier' },
      degree: { en: 'Master\'s Degree in Data Science (MIASHS)', fr: 'Master Data Science (MIASHS)' },
      specialty: { en: 'Data Visualisation, Computer Vision, Machine Learning, Deep Learning, Parallel Computing, Advanced Statistics', fr: 'Visualisation de données, Vision par ordinateur, Machine Learning, Deep Learning, Calcul parallèle, Statistiques avancées' },
      period: '2020 - 2022',
    },
    {
      school: { en: 'University of Montpellier', fr: 'Université de Montpellier' },
      degree: { en: 'Bachelor\'s Degree in Computer Science', fr: 'Licence Informatique' },
      period: '2018 - 2020',
    },
  ],

  // ===== HOBBIES =====
  hobbies: [
    {
      title: { en: 'Dance', fr: 'Danse' },
      details: [
        { en: 'Salsa, Bachata, Rock', fr: 'Salsa, Bachata, Rock' },
      ],
    },
    {
      title: { en: 'Music', fr: 'Musique' },
      details: [
        { en: '4 musical instruments', fr: '4 instruments de musique' },
      ],
    },
    {
      title: { en: 'Reading', fr: 'Lecture' },
    },
  ],

  // ===== PDF =====
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: '/cv/CV_melodie_bouly_english.pdf',
  },

  // ===== THEME =====
  theme: {
    preset: 'lilac',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
