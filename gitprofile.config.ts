// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CChibuko', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['CChibuko/Microbiome-Analysis', 'CChibuko/Genome-Assembly-and-Annotation-Section-Report'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Tendon Morphology in Lizards',
          description:
            'Poster presentation on research looking at how muscles and tendons work as a unit in locomotion',
          imageUrl:
            'https://github.com/CChibuko/cchibuko.github.io/raw/main/Screenshot_30-4-2025_93542_.jpeg',
          link: 'https://github.com/CChibuko/cchibuko.github.io/raw/main/Tendon%20Morphology%20in%20Lizards.pdf',
        },
        {
          title: 'Ecology Lab Poster',
          description:
            'Poster presentation on a paper about West Nile virus and how its vectors spread it',
          imageUrl:
            'https://github.com/CChibuko/cchibuko.github.io/raw/main/Screenshot_30-4-2025_93857_.jpeg',
          link: 'https://github.com/CChibuko/cchibuko.github.io/raw/main/Ecology%20Lab%20Poster%20Presentation.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Chioma Chibuko',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://cchibuko.github.io',
    phone: '',
    email: 'cchibuko@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/CChibuko/cchibuko.github.io/raw/main/ChiomaChibukoCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Agarose Gel',
    'Bioinformatics',
    'Aseptic Technique',
    'Bacteria Isolation',
  ],
  experiences: [
    {
      company: 'California State University, Stanislaus',
      position: 'Peer Mentor Intern',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.csustan.edu/learning-commons/about-us',
    },
    {
      company: 'California State University, Stanislaus',
      position: 'Supplemental Intruction Leader',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://www.csustan.edu/learning-commons/supplemental-instruction',
    },
  ],
  certifications: [
    {
      name: 'Certified Nursing Assistant',
      body: 'Earned at De Brabander California College of Nursing',
      year: 'July 2021',
      link: 'https://dbcnursing.com/',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S. in Biological Sciences',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Maricaulis maris DSM 4734 Isolated from Filtered Polluted Seawater',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Chioma Chibuko, Elias Figueiredo, Sebastian Lepe, Melanie Rivera, Joseph Sada, Tricia A. Van Laar',
      link: 'https://github.com/CChibuko/cchibuko.github.io/raw/main/MRA_template_prokaryotic-eukaryotic_genome.pdf',
      description:
        'This is a manuscript in submission: Here, we report the genome of Maricaulis maris DSM 4734 isolated from filtered polluted seawater. The whole genome was 3568848 bp long, with a GC content of 63.14%, and resistance to 12 antibiotics.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
