# DNA-Based Disease Risk Prediction Using Machine Learning

## 📌 Project Overview

This project focuses on predicting an individual's disease risk level using DNA sequence features and Machine Learning techniques. The model analyzes genomic characteristics such as nucleotide composition, GC/AT content, mutation indicators, and k-mer frequencies to classify whether an individual belongs to a **High Risk** or **Low Risk** disease category.

The project demonstrates the complete Machine Learning workflow, including:

* Data Generation
* Data Preprocessing
* Exploratory Data Analysis (EDA)
* Feature Engineering
* Model Training
* Model Evaluation
* Disease Risk Prediction

---

## 🎯 Problem Statement

The aim of this project is to develop a supervised machine learning model that analyzes DNA sequence features such as nucleotide composition, GC/AT content, k-mer frequencies, and mutation indicators to predict an individual's Disease Risk Level.

The model performs binary classification by generating the following prediction:

* Disease Risk:

  * High Risk
  * Low Risk

Based on the predicted risk category, the corresponding disease group is identified and displayed.

Possible Disease Categories:

* Common Cold
* Seasonal Allergy
* Flu
* Skin Allergy
* Mild Hypertension
* Mild Joint Pain
* Food Poisoning
* Cancer
* Diabetes
* Heart Disease
* Stroke
* Alzheimer's Disease
* Kidney Disease
* Lung Disease

---

## 📊 Dataset Information

The dataset contains DNA sequence-related features generated for educational and demonstration purposes.

### Features

| Feature         | Description                       |
| --------------- | --------------------------------- |
| GC_Content      | Percentage of G and C nucleotides |
| AT_Content      | Percentage of A and T nucleotides |
| Sequence_Length | Length of DNA sequence            |
| Num_A           | Count of Adenine nucleotides      |
| Num_T           | Count of Thymine nucleotides      |
| Num_C           | Count of Cytosine nucleotides     |
| Num_G           | Count of Guanine nucleotides      |
| kmer_3_freq     | Frequency of 3-mer patterns       |
| Mutation_Flag   | Indicates presence of mutation    |
| Class_Label     | Biological category label         |

### Target Variable

| Target       | Description          |
| ------------ | -------------------- |
| Disease_Risk | High Risk / Low Risk |

---

## 🛠 Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* Seaborn
* Scikit-Learn
* Jupyter Notebook

---

## 📈 Exploratory Data Analysis

The following EDA techniques were performed:

* Missing Value Analysis
* Duplicate Value Analysis
* Data Cleaning
* Feature Encoding
* Outlier Detection using Boxplots
* Univariate Analysis using Histograms
* Bivariate Analysis using Correlation Heatmaps
* Feature Relationship Analysis

---

## 🤖 Machine Learning Algorithm

### Random Forest Classifier

Random Forest is an ensemble learning algorithm that combines multiple decision trees to improve prediction performance and reduce overfitting.

Advantages:

* Handles numerical and categorical data effectively
* Reduces overfitting
* Provides stable predictions
* Works well on structured datasets

---

## 📋 Project Workflow

1. Data Collection / Generation
2. Data Cleaning
3. Feature Selection
4. Feature Encoding
5. Exploratory Data Analysis
6. Train-Test Split
7. Model Training using Random Forest
8. Model Evaluation
9. Disease Risk Prediction

---

## 📊 Evaluation Metrics

The following evaluation metrics were used:

* Accuracy Score
* Precision
* Recall
* F1-Score
* Classification Report
* Confusion Matrix

---

## 🚀 How to Run the Project

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/dna-disease-risk-prediction-ml.git
```

### Navigate to Project Directory

```bash
cd dna-disease-risk-prediction-ml
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Launch Jupyter Notebook

```bash
jupyter notebook
```

Open the notebook and run all cells.

---

## 📁 Project Structure

```text
dna-disease-risk-prediction-ml
│
├── dataset/
│   └── dna_dataset.csv
│
├── notebooks/
│   └── disease_prediction.ipynb
│
├── images/
│   └── correlation_heatmap.png
│
├── README.md
│
├── requirements.txt
│
└── .gitignore
```

---

## ⚠ Important Note

This dataset is synthetically generated for educational and demonstration purposes. Since the target variable was generated using randomized logic, strong real-world biological relationships may not exist between the input features and disease risk labels.

As a result, model performance may be lower than what would be expected when training on real-world genomic or medical datasets.

The primary objective of this project is to demonstrate the complete Machine Learning pipeline, including data preprocessing, exploratory data analysis, model training, and performance evaluation.

---

## 👨‍💻 Author

Rudra Chauhan

B.Tech Computer Science Engineering (AI/ML)

GSFC University

---

## ⭐ Future Improvements

* Use real genomic datasets
* Perform hyperparameter tuning
* Train additional algorithms (Decision Tree, Naive Bayes, Bagging)
* Deploy the model using Flask or Streamlit
* Add model explainability using SHAP and Feature Importance Analysis
