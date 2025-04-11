import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Amin Shire</h1>
        <p className="text-xl mb-4">Bioinformatician | Software Developer | IT Support</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>Amin.M.Shire@outlook.com</span>
          <span>+44 7932617883</span>
          <span>London</span>
          <a 
            href="https://www.linkedin.com/in/aminshire"
            className="text-blue-600 hover:text-blue-800"
          >
            Linkedin
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">MSc in Bioinformatics</h3>
          <p className="text-gray-600">Queen Mary University of London • 2023-2024</p>
          <ul className="list-disc list-inside mt-2">
            <li>Distinction expected</li>
            <li>Key modules: Machine Learning, Bioinformatics, Programming in Python & R</li>
            <li>Winner of Best Software Project Award (Team Mint)</li>
            <li>Dissertation: Evaluation of Foundation Models for Biomedical Named Entity Recognition</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">BSc in Biochemistry</h3>
          <p className="text-gray-600">Queen Mary University of London • 2019-2022</p>
          <ul className="list-disc list-inside mt-2">
            <li>Studied fundamental principles of biochemistry and molecular biology</li>
            <li>Laboratory techniques and experimental design</li>
            <li>Research methods and data analysis</li>
            <li>Final year project in biochemistry</li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200">Work Experience</h2>
        <div>
          <h3 className="text-xl font-semibold">1st Line Support - Global Net ICT</h3>
          <p className="text-gray-600">July 2022 - August 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Managed ServiceNow ticketing system for efficient issue resolution</li>
            <li>Performed software/hardware installations including Windows OS and Office 365</li>
            <li>Configured domain user accounts using Windows Server 2016</li>
            <li>Provided remote support and troubleshooting for VPN connections</li>
            <li>Created technical documentation and conducted user training sessions</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200">Featured Projects</h2>
        
        {/* Team Mint Project */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Population Genetics Analysis Web Application</h3>
          <p className="text-gray-600 mb-2">Team Mint Project • Group Software Development</p>
          <p className="mb-2">
            Developed a comprehensive web application for analyzing SNPs on chromosome 1 across 3,929 global samples.
          </p>
          <ul className="list-disc list-inside">
            <li>Population clustering using Principal Component Analysis (PCA)</li>
            <li>Admixture analysis with customizable population selection</li>
            <li>SNP search with allele and genotype frequency retrieval</li>
            <li>Gene-based SNP association analysis</li>
            <li>Automated Fst matrix generation and visualization</li>
          </ul>
          <p className="mt-2 text-gray-600">
            Technologies: Python, Flask, MySQL, JavaScript, PLINK, ADMIXTURE, Matplotlib
          </p>
        </div>

        {/* Dissertation Project */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Biomedical Named Entity Recognition Research</h3>
          <p className="text-gray-600 mb-2">MSc Dissertation • 2023-2024</p>
          <p className="mb-2">
            Evaluated foundation models for Biomedical Named Entity Recognition using Europe PMC corpus.
          </p>
          <ul className="list-disc list-inside">
            <li>BioBERT achieved highest F1-score of 95.08%</li>
            <li>Domain-specific models significantly outperformed general-purpose models</li>
            <li>Evaluated 72,000 biomedical term mentions across 114,000 sentences</li>
          </ul>
          <p className="mt-2 text-gray-600">
            Technologies: Python, PyTorch, Hugging Face, BERT, BioBERT, TensorFlow
          </p>
        </div>

        {/* Dengue Analysis Project */}
        <div>
          <h3 className="text-xl font-semibold">Dengue Fever Gene Expression Analysis</h3>
          <p className="text-gray-600 mb-2">Bioinformatics Research Project • 2023</p>
          <p className="mb-2">
            Analyzed gene expression patterns in dengue fever patients using machine learning approaches.
          </p>
          <ul className="list-disc list-inside">
            <li>Identified CNTNAP3 gene's potential role in dengue hemorrhagic fever</li>
            <li>Achieved 83% accuracy in disease classification using SVMs</li>
            <li>Analyzed 29,777 genes across multiple patient populations</li>
          </ul>
          <p className="mt-2 text-gray-600">
            Technologies: Python, R, PCA, Hierarchical Clustering, SVMs, Volcano Plots
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Programming Languages</h3>
            <p>Python, R, JavaScript, SQL</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Frameworks & Tools</h3>
            <p>Flask, PyTorch, TensorFlow, MySQL, Git</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Bioinformatics</h3>
            <p>PLINK, ADMIXTURE, BioBERT, Gene Expression Analysis</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">IT Support</h3>
            <p>Windows Server, Office 365, ServiceNow, VPN</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV; 
