import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#666',
  },
  contact: {
    fontSize: 10,
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    borderBottom: '1 solid #ccc',
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  projectTitle: {
    fontSize: 14,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  projectSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    marginBottom: 5,
  },
  list: {
    marginLeft: 15,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 10,
    marginBottom: 3,
  },
  technologies: {
    fontSize: 10,
    color: '#666',
    marginTop: 5,
    marginBottom: 10,
  },
  quote: {
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    borderLeft: '2 solid #ccc',
  },
});

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Amin Shire</Text>
        <Text style={styles.subtitle}>Bioinformatician | Software Developer | IT Support</Text>
        <Text style={styles.contact}>Amin.M.Shire@outlook.com • +44 7932617883 • London</Text>
        <Text style={styles.contact}>LinkedIn: linkedin.com/in/aminshire Portfolio: aminshire.github.io</Text>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>

        {/* Team Mint Project */}
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.projectTitle}>Population Genetics Analysis Web Application</Text>
          <Text style={styles.projectSubtitle}>Team Mint Project • Group Software Development</Text>
          <Text style={styles.description}>
            Developed a comprehensive web application for analyzing SNPs on chromosome 1 across 3,929 global samples. 
            The application enables population genetic structure analysis through interactive visualizations and 
            detailed genetic information retrieval.
          </Text>
          <Text style={styles.projectSubtitle}>Core Features:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Population clustering using Principal Component Analysis (PCA)</Text>
            <Text style={styles.listItem}>• Admixture analysis with customizable population selection</Text>
            <Text style={styles.listItem}>• SNP search with allele and genotype frequency retrieval</Text>
            <Text style={styles.listItem}>• Gene-based SNP association analysis</Text>
            <Text style={styles.listItem}>• Automated Fst matrix generation and visualization</Text>
            <Text style={styles.listItem}>• Clinical information integration from ClinVar database</Text>
          </View>
          <Text style={styles.technologies}>
            Technologies: Python, Flask, MySQL, JavaScript, PLINK, ADMIXTURE, Matplotlib
          </Text>
        </View>

        {/* Dissertation Project */}
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.projectTitle}>Evaluation of Foundation Models for Biomedical Named Entity Recognition</Text>
          <Text style={styles.projectSubtitle}>MSc Dissertation • 2023-2024</Text>
          <Text style={styles.description}>
            A comprehensive evaluation of foundation models for Biomedical Named Entity Recognition (BioNER), 
            analyzing their effectiveness in extracting meaningful information from biomedical literature using 
            the Europe PMC annotated full-text corpus of 300 research articles.
          </Text>
          <Text style={styles.projectSubtitle}>Research Highlights:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• BioBERT achieved highest F1-score of 95.08% (batch size 8, learning rate 1e-5)</Text>
            <Text style={styles.listItem}>• Domain-specific models significantly outperformed general-purpose models</Text>
            <Text style={styles.listItem}>• Bioformer models showed optimal computational efficiency</Text>
            <Text style={styles.listItem}>• Evaluated 72,000 biomedical term mentions across 114,000 sentences</Text>
          </View>
          <Text style={styles.technologies}>
            Technologies: Python, PyTorch, Hugging Face, BERT, BioBERT, TensorFlow, GPU Computing
          </Text>
        </View>

        {/* Dengue Project */}
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.projectTitle}>Data Analysis and Machine Learning Insights into Dengue Fever</Text>
          <Text style={styles.projectSubtitle}>Bioinformatics Research Project • 2023</Text>
          <Text style={styles.description}>
            Conducted comprehensive analysis of gene expression patterns in dengue fever patients, 
            analyzing data from 56 individuals including dengue fever, dengue haemorrhagic fever, 
            recovery phase patients, and healthy controls.
          </Text>
          <Text style={styles.projectSubtitle}>Key Findings:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Identified CNTNAP3 gene's potential role in dengue hemorrhagic fever symptoms</Text>
            <Text style={styles.listItem}>• Achieved up to 83% accuracy in disease classification using bootstrapped SVMs</Text>
            <Text style={styles.listItem}>• Discovered distinct clustering between active infection and recovery phases</Text>
            <Text style={styles.listItem}>• Analyzed 29,777 genes across multiple patient populations</Text>
          </View>
          <Text style={styles.technologies}>
            Technologies: Python, R, Principal Component Analysis, Hierarchical Clustering, Support Vector Machines, Volcano Plots
          </Text>
          <Text style={styles.quote}>
            "The integration of multiple analytical approaches revealed key insights into gene expression 
            patterns during dengue infection, particularly highlighting CNTNAP3's potential role in 
            hemorrhagic symptoms through cell adhesion and membrane integrity mechanisms."
          </Text>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <Text style={styles.projectTitle}>1st Line Support - Global Net ICT</Text>
        <Text style={styles.projectSubtitle}>July 2022 - August 2023</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Managed ServiceNow ticketing system for efficient issue resolution</Text>
          <Text style={styles.listItem}>• Performed software/hardware installations including Windows OS and Office 365</Text>
          <Text style={styles.listItem}>• Configured domain user accounts using Windows Server 2016</Text>
          <Text style={styles.listItem}>• Provided remote support and troubleshooting for VPN connections</Text>
          <Text style={styles.listItem}>• Created technical documentation and conducted user training sessions</Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.projectTitle}>MSc in Bioinformatics</Text>
        <Text style={styles.projectSubtitle}>Queen Mary University of London • 2023-2024</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Distinction expected</Text>
          <Text style={styles.listItem}>• Key modules: Machine Learning, Bioinformatics, Programming in Python & R</Text>
          <Text style={styles.listItem}>• Winner of Best Software Project Award (Team Mint)</Text>
          <Text style={styles.listItem}>• Dissertation: Evaluation of Foundation Models for Biomedical Named Entity Recognition</Text>
        </View>

        <Text style={styles.projectTitle}>BSc in Biochemistry</Text>
        <Text style={styles.projectSubtitle}>Queen Mary University of London • 2019-2022</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Studied fundamental principles of biochemistry and molecular biology</Text>
          <Text style={styles.listItem}>• Laboratory techniques and experimental design</Text>
          <Text style={styles.listItem}>• Research methods and data analysis</Text>
          <Text style={styles.listItem}>• Final year project in biochemistry</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument; 
