const cardOne = document.querySelector('#cardOne');
const cardTwo = document.querySelector('#cardTwo');
const cardThree = document.querySelector('#cardThree');


cardOne.addEventListener('click', function() {
  // Add your code to add a tag and redirect to another page for card 1
  // Example: window.location.href = "new_page_url";
  window.location.href = '../p/featured/covid-19.html'
});

cardTwo.addEventListener('click', function() {
  // Add your code to add a tag and redirect to another page for card 2
  // Example: window.location.href = "new_page_url";
  window.location.href = '../p/featured/partners.html'
});

cardThree.addEventListener('click', function() {
  // Add your code to add a tag and redirect to another page for card 2
  // Example: window.location.href = "new_page_url";
  window.location.href = '../p/featured/sustain.html'
});


const drugs = [
  {
    name: 'Lisinopril',
    classer: 'Angiotensin-Converting Enzyme (ACE) Inhibitor',
    category: 'Cardiology',
    description:
        'An ACE inhibitor used to treat hypertension and heart failure.'
  },
  {
    name: 'Atorvastatin',
    classer: 'Statin',
    category: 'Cardiology',
    description: 'A statin medication used to lower cholesterol.'
  },
  {
    name: 'Levothyroxine',
    classer: 'Thyroid Hormone Replacement',
    category: 'Endocrinology',
    description: 'A synthetic thyroid hormone replacement.'
  },
  {
    name: 'Metformin',
    classer: 'Biguanide',
    category: 'Endocrinology',
    description: 'An oral antidiabetic drug for type 2 diabetes.'
  },
  {
    name: 'Amlodipine',
    classer: 'Calcium Channel Blocker',
    category: 'Cardiology',
    description: 'Used to treat hypertension and angina.'
  },
  {
    name: 'Omeprazole',
    classer: 'Proton Pump Inhibitor',
    category: 'Gastroenterology',
    description:
        'Used for gastroesophageal reflux disease (GERD) and other stomach acid-related conditions.'
  },
  {
    name: 'Hydrochlorothiazide',
    classer: 'Thiazide Diuretic',
    category: 'Cardiology',
    description: 'Used to treat hypertension and edema.'
  },
  {
    name: 'Metoprolol',
    classer: 'Beta-Blocker',
    category: 'Cardiology',
    description: 'Used for hypertension, angina, and heart failure.'
  },
  {
    name: 'Gabapentin',
    classer: 'Anticonvulsant',
    category: 'Neurology',
    description:
        'Used primarily for nerve pain and as an adjunct in some types of seizures.'
  },
  {
    name: 'Losartan',
    classer: 'Angiotensin II Receptor Antagonist',
    category: 'Cardiology',
    description: 'For hypertension and kidney disease in diabetes.'
  },
  {
    name: 'Albuterol',
    classer: 'Bronchodilator',
    category: 'Pulmonology',
    description: 'Used for asthma and COPD.'
  },
  {
    name: 'Sertraline',
    classer: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    category: 'Psychiatry',
    description: 'An SSRI antidepressant.'
  },
  {
    name: 'Simvastatin',
    classer: 'Statin',
    category: 'Cardiology',
    description: 'Another statin medication used to lower cholesterol.'
  },
  {
    name: 'Trazodone',
    classer: 'Antidepressant',
    category: 'Psychiatry',
    description: 'Often used off-label for sleep.'
  },
  {
    name: 'Amoxicillin',
    classer: 'Penicillin Antibiotic',
    category: 'Infectious Disease',
    description: 'A broad-spectrum antibiotic.'
  },
  {
    name: 'Zolpidem',
    classer: 'Sedative-Hypnotic',
    category: 'Psychiatry',
    description: 'Used primarily to treat insomnia.'
  },
  {
    name: 'Citalopram',
    classer: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    category: 'Psychiatry',
    description:
        'An antidepressant used to treat depression and anxiety disorders.'
  },
  {
    name: 'Ibuprofen',
    classer: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    category: 'Pain Management',
    description: 'Used to treat pain, inflammation, and fever.'
  },
  {
    name: 'Azithromycin',
    classer: 'Macrolide Antibiotic',
    category: 'Infectious Disease',
    description:
        'An antibiotic used to treat a variety of bacterial infections.'
  },
  {
    name: 'Fluoxetine',
    classer: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    category: 'Psychiatry',
    description:
        'An antidepressant used to treat depression, panic disorder, and other conditions.'
  },
  {
    name: 'Prednisone',
    classer: 'Corticosteroid',
    category: 'Immunology',
    description: 'Used as an anti-inflammatory and immunosuppressant.'
  },
  {
    name: 'Aspirin',
    classer: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    category: 'Cardiology',
    description:
        'Used for pain relief, anti-inflammation, and for its antiplatelet effects in cardiovascular prevention.'
  },
  {
    name: 'Warfarin',
    classer: 'Anticoagulant',
    category: 'Hematology',
    description: 'Used to prevent and treat blood clots.'
  },
  {
    name: 'Montelukast',
    classer: 'Leukotriene Receptor Antagonist',
    category: 'Pulmonology',
    description:
        'Used to prevent asthma attacks and relieve seasonal allergies.'
  },
  {
    name: 'Furosemide',
    classer: 'Loop Diuretic',
    category: 'Cardiology',
    description: 'Used to treat fluid retention (edema) and hypertension.'
  },
  {
    name: 'Clonazepam',
    classer: 'Benzodiazepine',
    category: 'Psychiatry',
    description: 'Used to treat seizures and panic disorder.'
  },
  {
    name: 'Meloxicam',
    classer: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    category: 'Rheumatology',
    description: 'Used to treat arthritis.'
  },
  {
    name: 'Ranitidine',
    classer: 'Histamine-2 Blocker',
    category: 'Gastroenterology',
    description:
        'Used to treat and prevent ulcers in the stomach and intestines.'
  },
  {
    name: 'Venlafaxine',
    classer: 'Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)',
    category: 'Psychiatry',
    description:
        'An antidepressant used to treat depression, anxiety disorder, and panic disorder.'
  },
  {
    name: 'Bupropion',
    classer: 'Norepinephrine-Dopamine Reuptake Inhibitor (NDRI)',
    category: 'Psychiatry',
    description: 'Used to treat depression and as an aid to smoking cessation.'
  },
  {
    name: 'Clopidogrel',
    classer: 'Antiplatelet',
    category: 'Cardiology',
    description:
        'Used to prevent blood clots in people with coronary artery disease, peripheral vascular disease, and cerebrovascular disease.'
  },
  {
    name: 'Duloxetine',
    classer: 'Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)',
    category: 'Psychiatry',
    description:
        'Used to treat depression, generalized anxiety disorder, neuropathic pain, and fibromyalgia.'
  },
  {
    name: 'Carvedilol',
    classer: 'Beta-Blocker with Alpha-Blocking Activity',
    category: 'Cardiology',
    description: 'Used to treat heart failure and hypertension.'
  },
  {
    name: 'Pravastatin',
    classer: 'Statin',
    category: 'Cardiology',
    description: 'Used to lower cholesterol and prevent cardiovascular disease.'
  },
  {
    name: 'Tamsulosin',
    classer: 'Alpha-1 Blocker',
    category: 'Urology',
    description:
        'Used to treat the symptoms of an enlarged prostate (benign prostatic hyperplasia).'
  },
  {
    name: 'Rosuvastatin',
    classer: 'Statin',
    category: 'Cardiology',
    description:
        'Another statin medication used to lower cholesterol and prevent cardiovascular disease.'
  },
  {
    name: 'Alprazolam',
    classer: 'Benzodiazepine',
    category: 'Psychiatry',
    description:
        'Used to treat anxiety disorders, panic disorders, and anxiety caused by depression.'
  },
  {
    name: 'Tramadol',
    classer: 'Opioid Analgesic',
    category: 'Pain Management',
    description: 'Used to treat moderate to severe pain.'
  },
  {
    name: 'Insulin Glargine',
    classer: 'Long-Acting Insulin',
    category: 'Endocrinology',
    description: 'Used to treat diabetes mellitus.'
  },
  {
    name: 'Pantoprazole',
    classer: 'Proton Pump Inhibitor',
    category: 'Gastroenterology',
    description:
        'Used for gastroesophageal reflux disease (GERD) and other stomach acid-related conditions.'
  },
  {
    name: 'Esomeprazole',
    classer: 'Proton Pump Inhibitor',
    category: 'Gastroenterology',
    description:
        'Another medication for gastroesophageal reflux disease (GERD) and stomach acid-related conditions.'
  },
  {
    name: 'Hydrocodone/Acetaminophen',
    classer: 'Opioid Analgesic Combination',
    category: 'Pain Management',
    description: 'Used for the relief of moderate to moderately severe pain.'
  },
  {
    name: 'Oxycodone',
    classer: 'Opioid Analgesic',
    category: 'Pain Management',
    description: 'Used to treat moderate to severe pain.'
  },
  {
    name: 'Diclofenac',
    classer: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    category: 'Pain Management',
    description:
        'Used to treat pain and inflammation associated with arthritis.'
  },
  {
    name: 'Ciprofloxacin',
    classer: 'Fluoroquinolone Antibiotic',
    category: 'Infectious Disease',
    description: 'Used to treat a variety of bacterial infections.'
  },
  {
    name: 'Paroxetine',
    class: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    category: 'Psychiatry',
    description:
        'Used to treat depression, panic attacks, obsessive-compulsive disorder (OCD), and generalized anxiety disorder.'
  },
  {
    name: 'Lorazepam',
    class: 'Benzodiazepine',
    category: 'Psychiatry',
    description: 'Used for the short-term relief of symptoms of anxiety.'
  },
  {
    name: 'Sildenafil',
    class: 'Phosphodiesterase Type 5 Inhibitor',
    category: 'Urology',
    description:
        'Used to treat erectile dysfunction and pulmonary arterial hypertension.'
  },
  {
    name: 'Clindamycin',
    class: 'Lincosamide Antibiotic',
    category: 'Infectious Disease',
    description: 'Used to treat bacterial infections.'
  },
  {
    name: 'Latanoprost',
    class: 'Prostaglandin Analog',
    category: 'Ophthalmology',
    description: 'Used to treat high eye pressure and open-angle glaucoma.'
  },
  {
    name: 'Glyburide',
    class: 'Sulfonylurea',
    category: 'Endocrinology',
    description: 'Used to treat type 2 diabetes.'
  },
  {
    name: 'Lamotrigine',
    class: 'Anticonvulsant',
    category: 'Neurology',
    description:
        'Used to treat certain types of seizures and as a mood stabilizer in bipolar disorder.'
  },
  {
    name: 'Glipizide',
    class: 'Sulfonylurea',
    category: 'Endocrinology',
    description: 'Used to treat type 2 diabetes.'
  },
  {
    name: 'Quetiapine',
    class: 'Atypical Antipsychotic',
    category: 'Psychiatry',
    description:
        'Used to treat schizophrenia, bipolar disorder, and depression.'
  },
  {
    name: 'Risperidone',
    class: 'Atypical Antipsychotic',
    category: 'Psychiatry',
    description:
        'Used to treat certain mood and mental disorders, including schizophrenia and bipolar disorder.'
  },
  {
    name: 'Memantine',
    class: 'NMDA Receptor Antagonist',
    category: 'Neurology',
    description: 'Used to treat moderate to severe Alzheimer\'s disease.'
  },
  {
    name: 'Donepezil',
    class: 'Acetylcholinesterase Inhibitor',
    category: 'Neurology',
    description: 'Used to treat Alzheimer\'s disease symptoms.'
  },
  {
    name: 'Mometasone',
    class: 'Corticosteroid',
    category: 'Dermatology',
    description:
        'Topical steroid used to treat inflammation and itching caused by skin conditions.'
  },
  {
    name: 'Ezetimibe',
    class: 'Cholesterol Absorption Inhibitor',
    category: 'Cardiology',
    description: 'Used to lower cholesterol in the blood.'
  },
  {
    name: 'Celecoxib',
    class: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    category: 'Rheumatology',
    description:
        'Used to relieve pain and inflammation from various conditions, especially arthritis.'
  }
];

let currentIndex = 0;  // Initialize the index of the content array

function updateContent() {
  const div = document.querySelector('#cont');
  const {name, classer, category} = drugs[currentIndex];

  // Add a class to trigger the transition effect
  div.classList.add('fade-out');

  setTimeout(() => {
    // Change the content after the fade-out animation
    div.querySelector('#drug-title').textContent = name;
    div.querySelector('#drug-cate').textContent = category;

    // Remove the fade-out class to trigger the fade-in animation
    div.classList.remove('fade-out');

    // Increment the index to move to the next content
    currentIndex = (currentIndex + 1) % drugs.length;

    // Schedule the next content update after 3 seconds
    setTimeout(updateContent, 2000);
  }, 1000);  // Wait for 1 second for the fade-out animation to complete
}

// Start the content update loop
updateContent();
