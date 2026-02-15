import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Mélodie Bouly',
    photo: '/images/photo.jpg',
    photoBackEmoji: '🧠',
    title: {
      en: 'Data Scientist',
      fr: 'Data Scientist',
    },
    subtitle: {
      en: '4 years of experience',
      fr: '4 ans d\'expérience',
    },
    location: 'Montpellier, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Mélodie Bouly — Data Scientist',
    description: 'Interactive resume of Mélodie Bouly, Data Scientist specialized in machine and deep learning applied to medical imaging.',
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
    { type: 'location', label: 'Montpellier, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' } },
        { name: { en: 'German', fr: 'Allemand' }, level: { en: 'B1', fr: 'B1' } },
      ],
    },
    {
      title: { en: 'Machine Learning', fr: 'Machine Learning' },
      type: 'badges',
      items: [
        { name: 'scikit-learn' },
        { name: 'XGBoost' },
        { name: 'FLAML' },
        { name: 'AutoML' },
      ],
    },
    {
      title: { en: 'Deep Learning', fr: 'Deep Learning' },
      type: 'badges',
      items: [
        { name: 'PyTorch' },
        { name: 'TensorFlow' },
        { name: 'MONAI' },
        { name: 'MONAILabel' },
      ],
    },
    {
      title: { en: 'Data & Visualization', fr: 'Données & Visualisation' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'Matplotlib' },
        { name: 'Seaborn' },
        { name: 'Plotly' },
        { name: 'PyVista' },
      ],
    },
    {
      title: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' },
      type: 'badges',
      items: [
        { name: 'AWS' },
        { name: 'GitLab CI' },
        { name: 'Git' },
      ],
    },
    {
      title: { en: 'Soft Skills', fr: 'Savoir-être' },
      type: 'text',
      items: [
        {
          name: {
            en: 'Team spirit, Rigor & attention to detail, Strong willingness to learn, Open-mindedness & adaptability',
            fr: 'Esprit d\'équipe, Rigueur & souci du détail, Forte volonté d\'apprendre, Ouverture d\'esprit & adaptabilité',
          },
        },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'simcure-engineer',
      company: { en: 'SIM&CURE', fr: 'SIM&CURE' },
      role: {
        en: 'Junior Data Science Engineer',
        fr: 'Ingénieure Data Science Junior',
      },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: 'Oct 2022 - Present', fr: 'Oct 2022 - Présent' },
      description: {
        en: 'Data Scientist in the R&D department of a medical startup. Developing ML/DL models for intracranial aneurysm detection and segmentation on medical imaging.',
        fr: 'Data Scientist au sein du département R&D d\'une startup médicale. Développement de modèles ML/DL pour la détection et segmentation d\'anévrismes intracrâniens en imagerie médicale.',
      },
      techs: ['Python', 'PyTorch', 'scikit-learn', 'AWS', 'Pandas', 'NumPy', 'Seaborn', 'PyVista', 'GitLab CI'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Data Scientist in a team of 4 within the Research & Development department of a 60-person startup specializing in medical devices for treating intracranial aneurysms.',
          fr: 'Data Scientist dans une équipe de 4 personnes au sein du département Recherche & Développement d\'une startup de 60 personnes spécialisée dans les dispositifs médicaux pour le traitement des anévrismes intracrâniens.',
        },
        tasks: {
          en: [
            'Independently developed a machine learning model for predicting aneurysm rupture status, based on clinical and morphological features',
            'Collaboratively developed a two-step deep learning pipeline for detecting intracranial aneurysms on MRA and CTA scans (data cleaning, statistical analysis, network training, model evaluation, hyperparameter optimization)',
            'Independently developed an annotation initialization plugin for the 3DRA modality as part of a partnership with a consortium of European hospitals, along with a transformer-based model for the segmentation of cerebral arteries and intracranial aneurysms on 3DRA',
            'Conducted a solo project for analyzing and visualizing usage data from the company\'s flagship software via an API, presenting insights to executives to support decision-making',
            'Supervised two internships (one Master\'s and one Bachelor\'s student)',
          ],
          fr: [
            'Développement autonome d\'un modèle de machine learning pour la prédiction du statut de rupture d\'anévrisme, basé sur des caractéristiques cliniques et morphologiques',
            'Développement collaboratif d\'un pipeline de deep learning en deux étapes pour la détection d\'anévrismes intracrâniens sur des scans ARM et CTA (nettoyage de données, analyse statistique, entraînement réseau, évaluation de modèle, optimisation d\'hyperparamètres)',
            'Développement autonome d\'un plugin d\'initialisation d\'annotations pour la modalité 3DRA dans le cadre d\'un partenariat avec un consortium d\'hôpitaux européens, avec un modèle à base de transformers pour la segmentation des artères cérébrales et des anévrismes intracrâniens',
            'Projet solo d\'analyse et de visualisation des données d\'utilisation du logiciel phare de l\'entreprise via une API, présentation des résultats aux dirigeants pour le support à la décision',
            'Encadrement de deux stages (un étudiant en Master et un en Licence)',
          ],
        },
        env: {
          en: 'Python / AWS / PyTorch / scikit-learn / Pandas / NumPy / Seaborn / PyVista / CI-CD / GitLab',
          fr: 'Python / AWS / PyTorch / scikit-learn / Pandas / NumPy / Seaborn / PyVista / CI-CD / GitLab',
        },
      },
    },
    {
      id: 'simcure-apprentice',
      company: { en: 'SIM&CURE', fr: 'SIM&CURE' },
      role: {
        en: 'Data Scientist (Work-Study)',
        fr: 'Data Scientist en apprentissage',
      },
      type: { en: 'Apprenticeship', fr: 'Alternance' },
      period: { en: 'Sept 2020 - Oct 2022', fr: 'Sept 2020 - Oct 2022' },
      description: {
        en: 'Data Scientist apprentice during a Master\'s work-study program in the R&D department. Data engineering and ML model development for medical imaging.',
        fr: 'Data Scientist en alternance dans le cadre d\'un Master. Ingénierie de données et développement de modèles ML pour l\'imagerie médicale.',
      },
      techs: ['Python', 'PyTorch', 'scikit-learn', 'AWS', 'Pandas', 'NumPy', 'Seaborn', 'PyVista'],
      details: {
        context: {
          en: 'Data Scientist apprentice during a Master\'s work-study program, part of a 3-person team within the Research & Development department of a 30-person startup.',
          fr: 'Data Scientist en apprentissage dans le cadre d\'un Master en alternance, dans une équipe de 3 personnes au sein du département Recherche & Développement d\'une startup de 30 personnes.',
        },
        tasks: {
          en: [
            'Performed data engineering on complex medical datasets',
            'Developed and evaluated a machine learning model deployed in the company\'s software to automate an arterial reconstruction task',
            'Collected data in hospitals and collaborated with physicians',
            'Conducted data visualization and analysis',
          ],
          fr: [
            'Ingénierie de données sur des jeux de données médicales complexes',
            'Développement et évaluation d\'un modèle de machine learning déployé dans le logiciel de l\'entreprise pour automatiser une tâche de reconstruction artérielle',
            'Collecte de données en milieu hospitalier et collaboration avec des médecins',
            'Visualisation et analyse de données',
          ],
        },
        env: {
          en: 'Python / AWS / PyTorch / scikit-learn / Pandas / NumPy / Seaborn / PyVista',
          fr: 'Python / AWS / PyTorch / scikit-learn / Pandas / NumPy / Seaborn / PyVista',
        },
      },
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Montpellier', fr: 'Université de Montpellier' },
      degree: { en: 'Master\'s Degree in Data Science', fr: 'Master Data Science' },
      specialty: { en: 'Work-Study Program', fr: 'Alternance' },
      period: '2020 - 2022',
    },
    {
      school: { en: 'University of Montpellier', fr: 'Université de Montpellier' },
      degree: { en: 'Bachelor\'s Degree in Computer Science', fr: 'Licence Informatique' },
      period: '2017 - 2020',
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
