import React, { useState, createContext, useContext, useEffect } from 'react';
import { Book, Briefcase, Cpu, Mail, MapPin, Phone, ExternalLink, Download, Badge, Sun, Moon } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './components/CVDocument';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './components/CV';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ProjectCard = ({ title, subtitle, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-auto">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <h3 className="text-2xl font-bold flex justify-between items-center text-white">
          {title}
          <svg 
            className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </h3>
        <p className="text-gray-400 mb-3">{subtitle}</p>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          visibility: isExpanded ? 'visible' : 'hidden',
          position: isExpanded ? 'relative' : 'absolute'
        }}
      >
        <div className="text-gray-300">
          {content}
        </div>
      </div>
    </div>
  );
};


const Portfolio = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const timelineItems = [
    {
      title: "MSc in Bioinformatics",
      subtitle: "Queen Mary University of London • 2023-2024",
      content: (
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Distinction expected</li>
          <li>Key modules: Machine Learning, Bioinformatics, Programming in Python & R</li>
          <li>Winner of Best Software Project Award (Team Mint)</li>
          <li>Dissertation: Evaluation of Foundation Models for Biomedical Named Entity Recognition</li>
        </ul>
      )
    },
    {
      title: "1st Line Support - Global Net ICT",
      subtitle: "July 2022 - August 2023",
      content: (
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Managed ServiceNow ticketing system for efficient issue resolution</li>
          <li>Performed software/hardware installations including Windows OS and Office 365</li>
          <li>Configured domain user accounts using Windows Server 2016</li>
          <li>Provided remote support and troubleshooting for VPN connections</li>
          <li>Created technical documentation and conducted user training sessions</li>
        </ul>
      )
    },
    {
      title: "BSc in Biochemistry",
      subtitle: "Queen Mary University of London • 2019-2022",
      content: (
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Studied fundamental principles of biochemistry and molecular biology</li>
          <li>Laboratory techniques and experimental design</li>
          <li>Research methods and data analysis</li>
          <li>Final year project in biochemistry</li>
        </ul>
      )
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
            <nav className="bg-gray-100 dark:bg-gray-800 py-4 sticky top-0 z-50 shadow-lg">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">AS</div>
                  <div className="flex gap-6 items-center">
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Toggle theme"
                    >
                      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                    <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                    <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
                    <div className="relative group">
                      <button className="hover:text-blue-400 transition-colors">CV</button>
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                        <div className="py-1">
                          <PDFDownloadLink 
                            document={<CVDocument />} 
                            fileName="Amin_Shire_CV.pdf"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? 'Loading PDF...' : 'Download PDF'
                            }
                          </PDFDownloadLink>
                          <a 
                            href="/cv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                          >
                            View Online
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <header 
              className="relative py-20 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url("/bioinfo header.png")',
                height: '500px' // Adjust this value based on your image
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-5xl font-bold mb-4 text-white">Amin Shire</h1>
                  <p className="text-2xl mb-6 text-white">Bioinformatician | Software Developer | IT Support</p>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-white">
                  <a 
                    href="mailto:amin.m.shire@outlook.com"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Mail size={20} />
                    Amin.m.shire@outlook.com
                  </a>
                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-blue-400" />
                      <span>+44 7932617883</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-blue-400" />
                      <span>London</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink size={18} className="text-blue-400" />
                      <a 
                        href="https://www.linkedin.com/in/aminshire" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:text-blue-300 focus:outline-none"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main className="container mx-auto px-4 py-16">
              <section id="projects" className="mb-16">
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
                  <Cpu className="text-blue-600 dark:text-blue-400" />
                  Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                  <ProjectCard
                    title="Population Genetics Analysis Web Application"
                    subtitle="Team Mint Project • Group Software Development"
                    content={
                      <div className="text-gray-700 dark:text-gray-300">
                        <p className="mb-4">
                          Developed a comprehensive web application for analyzing SNPs on chromosome 1 across 3,929 global samples. 
                          The application enables population genetic structure analysis through interactive visualizations and 
                          detailed genetic information retrieval.
                        </p>
                        
                        <h4 className="text-lg font-semibold mb-2">Core Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mb-4">
                          <li>Population clustering using Principal Component Analysis (PCA)</li>
                          <li>Admixture analysis with customizable population selection</li>
                          <li>SNP search with allele and genotype frequency retrieval</li>
                          <li>Gene-based SNP association analysis</li>
                          <li>Automated Fst matrix generation and visualization</li>
                          <li>Clinical information integration from ClinVar database</li>
                        </ul>

                        <h4 className="text-lg font-semibold mb-2">Technical Implementation:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Flask</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">MySQL</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">JavaScript</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">PLINK</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">ADMIXTURE</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Matplotlib</span>
                        </div>

                        <h4 className="text-lg font-semibold mb-2">Database Architecture:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mb-4">
                          <li>Integrated MySQL database with 6 interconnected tables</li>
                          <li>Efficient data storage for SNP characteristics and frequencies</li>
                          <li>Population and superpopulation mapping</li>
                          <li>PCA and admixture analysis results storage</li>
                        </ul>

                        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-4">
                          <p className="text-sm italic">
                            "A user-friendly interface for exploring genetic variation across global populations, 
                            combining powerful analysis tools with intuitive data visualization and comprehensive 
                            genetic information retrieval."
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href="https://github.com/bishancode/teammint"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    }
                  />

                  <ProjectCard
                    title="Evaluation of Foundation Models for Biomedical Named Entity Recognition"
                    subtitle="MSc Dissertation"
                    content={
                      <div className="text-gray-300">
                        <p className="mb-4">
                          A comprehensive evaluation of foundation models for Biomedical Named Entity Recognition (BioNER), 
                          analyzing their effectiveness in extracting meaningful information from biomedical literature using 
                          the Europe PMC annotated full-text corpus of 300 research articles.
                        </p>
                        
                        <h4 className="text-lg font-semibold mb-2">Research Highlights:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                          <li>BioBERT achieved highest F1-score of 95.08% (batch size 8, learning rate 1e-5)</li>
                          <li>Domain-specific models significantly outperformed general-purpose models</li>
                          <li>Bioformer models showed optimal computational efficiency</li>
                          <li>Evaluated 72,000 biomedical term mentions across 114,000 sentences</li>
                        </ul>

                        <h4 className="text-lg font-semibold mb-2">Models Evaluated:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">BERT</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">BioBERT</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">BioMedBERT</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">RoBERTa</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">GPT-2</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Bioformer 8L</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Bioformer 16L</span>
                        </div>

                        <h4 className="text-lg font-semibold mb-2">Technical Implementation:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                          <li>Utilized Hugging Face Transformers library for model implementation</li>
                          <li>Trained on Andrena GPU cluster with 12 cores and 7.5GB RAM per GPU</li>
                          <li>Implemented custom dataset handling and training procedures</li>
                          <li>Evaluated using precision, recall, and F1-score metrics</li>
                        </ul>

                        <div className="bg-gray-700 p-4 rounded-lg mb-4">
                          <p className="text-sm italic">
                            "Domain-specific models like BioBERT and BioMedBERT, pre-trained on extensive biomedical corpora, 
                            significantly outperform general-purpose models in BioNER tasks, while Bioformer models offer an 
                            excellent balance between performance and computational efficiency."
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href="/Amin_Shire_Dissertation.pdf"
                            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                            download="Amin_Shire_Dissertation.pdf"
                          >
                            Download PDF
                          </a>
                        </div>
                      </div>
                    }
                  />

                  <ProjectCard
                    title="Data Analysis and Machine Learning Insights into Dengue Fever"
                    subtitle="Bioinformatics Research Project"
                    content={
                      <div className="text-gray-300">
                        <p className="mb-4">
                          Conducted comprehensive analysis of gene expression patterns in dengue fever patients, 
                          analyzing data from 56 individuals including dengue fever, dengue haemorrhagic fever, 
                          recovery phase patients, and healthy controls. Combined statistical analysis with 
                          machine learning approaches to identify key genetic markers and patterns.
                        </p>
                        
                        <h4 className="text-lg font-semibold mb-2">Key Findings:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                          <li>Identified CNTNAP3 gene's potential role in dengue hemorrhagic fever symptoms</li>
                          <li>Achieved up to 83% accuracy in disease classification using bootstrapped SVMs</li>
                          <li>Discovered distinct clustering between active infection and recovery phases</li>
                          <li>Analyzed 29,777 genes across multiple patient populations</li>
                        </ul>

                        <h4 className="text-lg font-semibold mb-2">Technical Approaches:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Principal Component Analysis</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Hierarchical Clustering</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Support Vector Machines</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Volcano Plots</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">R</span>
                        </div>

                        <h4 className="text-lg font-semibold mb-2">Analysis Pipeline:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                          <li>Data preparation and dimensionality reduction using PCA</li>
                          <li>Unsupervised clustering with hierarchical analysis</li>
                          <li>Differential expression analysis via volcano plots</li>
                          <li>Machine learning classification using bootstrapped SVMs</li>
                        </ul>

                        <div className="bg-gray-700 p-4 rounded-lg mb-4">
                          <p className="text-sm italic">
                            "The integration of multiple analytical approaches revealed key insights into gene expression 
                            patterns during dengue infection, particularly highlighting CNTNAP3's potential role in 
                            hemorrhagic symptoms through cell adhesion and membrane integrity mechanisms."
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href="/Shire.pdf"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Paper
                          </a>
                        </div>
                      </div>
                    }
                  />
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
                  <Book className="text-blue-400" />
                  Education & Experience
                </h2>
                
                <div className="relative border-l border-gray-600 pl-8 ml-4">
                  {timelineItems.map((item, index) => (
                    <div 
                      key={index}
                      className="mb-8 relative"
                    >
                      <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-blue-600" />
                      <div className="transform transition-all duration-500 hover:translate-x-2">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                          <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>
                          <p className="text-gray-400 mb-4">{item.subtitle}</p>
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <footer className="bg-gray-900 py-8 mt-16 bg-gradient-to-r from-blue-600 to-indigo-700">
              <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400">© 2024 Amin Shire. All rights reserved.</p>
              </div>
            </footer>
          </div>
        } />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
