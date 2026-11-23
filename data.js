// AIM-Wissensdatenbank – Inhalte nur aus den eigenen Vortrags-Screenshots transkribiert.
// Struktur: Krankheitsbild (themen) → Kapitel (Karteikarte) → gruppe → Einträge.
window.KB = {
  "klassen": {
    "I": {
      "label": "Klasse I",
      "farbe": "green"
    },
    "IIa": {
      "label": "Klasse IIa",
      "farbe": "yellow"
    },
    "IIb": {
      "label": "Klasse IIb",
      "farbe": "orange"
    },
    "I/IIa": {
      "label": "Klasse I/IIa (Balken zweifarbig)",
      "farbe": "split"
    }
  },
  "themen": [
    {
      "id": "herzinsuffizienz",
      "titel": "Herzinsuffizienz",
      "fachgebiet": "Kardiologie",
      "tags": [
        "herzinsuffizienz",
        "heart failure",
        "hf",
        "hfref",
        "hfmref",
        "hfpef",
        "lvef",
        "ejektionsfraktion"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026"
      },
      "parameter": {
        "name": "LVEF",
        "einheit": "%",
        "min": 20,
        "max": 65,
        "achsenNotiz": "Achse 20–65 %; HFrEF links, HFpEF rechts von 50 %"
      },
      "hinweise": [
        "Bereiche aus der Grafik abgelesen (Raster 5 %).",
        "Fussnoten a–h stehen auf den Folien, ihr Inhalt ist auf den Screenshots nicht sichtbar."
      ],
      "screenshots": [
        {
          "datei": "img/hf-basistherapie.png",
          "titel": "Foundational Medical Therapy"
        },
        {
          "datei": "img/hf-zusatztherapie.png",
          "titel": "Additional Medical Therapy"
        },
        {
          "datei": "img/hf-interventionell.png",
          "titel": "Guideline Directed Interventional Therapy · Additional management"
        }
      ],
      "eintraege": [
        {
          "gruppe": "Basistherapie (Foundational Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "ACE-I/ARNI or ARB",
          "fussnote": "a,b",
          "von": 20,
          "bis": 50,
          "klasse": "I",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Basistherapie (Foundational Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "Beta-blocker",
          "fussnote": "b",
          "von": 20,
          "bis": 50,
          "klasse": "I",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Basistherapie (Foundational Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "SGLT2-I",
          "von": 20,
          "bis": 65,
          "klasse": "I",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Basistherapie (Foundational Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "MRA",
          "von": 20,
          "bis": 65,
          "klasse": "I",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "Congestion",
          "massnahme": "Loop diuretic",
          "von": 20,
          "bis": 65,
          "klasse": "I",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "Iron deficiency",
          "massnahme": "IV iron",
          "von": 20,
          "bis": 50,
          "klasse": "I/IIa",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "SR, HR >70 bpm",
          "massnahme": "Ivabradine",
          "von": 20,
          "bis": 35,
          "klasse": "IIa",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "Obesity",
          "massnahme": "Semaglutide or tirzepatide",
          "von": 45,
          "bis": 65,
          "klasse": "IIa",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "Self-identified Black",
          "massnahme": "Hydralazine/ISDN",
          "von": 20,
          "bis": 40,
          "klasse": "IIa",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "Vaccination",
          "von": 20,
          "bis": 65,
          "klasse": "IIa",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "Digoxin/digitoxin",
          "von": 20,
          "bis": 40,
          "klasse": "IIa",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "ACE-I/ARNI or ARB",
          "von": 50,
          "bis": 65,
          "klasse": "IIb",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Erweiterte medikamentöse Therapie (Additional Medical Therapy)",
          "indikation": "All patients with HF",
          "massnahme": "Vericiguat",
          "von": 20,
          "bis": 45,
          "klasse": "IIb",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "NYHA class II/III",
          "massnahme": "ICD",
          "fussnote": "c",
          "von": 20,
          "bis": 35,
          "klasse": "I/IIa",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Wide QRS duration",
          "massnahme": "CRT",
          "fussnote": "d",
          "von": 20,
          "bis": 35,
          "klasse": "I/IIa",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Severe AS",
          "massnahme": "SAVR or TAVI",
          "von": 20,
          "bis": 65,
          "klasse": "I",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Secondary MR",
          "massnahme": "TEER",
          "von": 20,
          "bis": 50,
          "klasse": "I",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Advanced HF (e)",
          "massnahme": "Heart transplantation",
          "fussnote": "f",
          "von": 20,
          "bis": 65,
          "klasse": "I",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Advanced HF (e)",
          "massnahme": "LVAD",
          "fussnote": "g",
          "von": 20,
          "bis": 50,
          "klasse": "I",
          "bild": 2,
          "notiz": "Balken läuft zum Ende hin aus",
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Advanced HF (e)",
          "massnahme": "Kidney replacement therapy",
          "von": 20,
          "bis": 65,
          "klasse": "IIa",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Cardiogenic shock",
          "massnahme": "Temporary MCS",
          "von": 20,
          "bis": 50,
          "klasse": "IIa",
          "bild": 2,
          "notiz": "Balken läuft zum Ende hin aus",
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Coronary artery disease",
          "massnahme": "CABG",
          "von": 20,
          "bis": 35,
          "klasse": "IIa",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Atrial fibrillation",
          "massnahme": "AF ablation",
          "von": 20,
          "bis": 50,
          "klasse": "IIa",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Atrial fibrillation",
          "massnahme": "AV node ablation",
          "von": 20,
          "bis": 65,
          "klasse": "IIa",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Devices / Interventionen (Guideline Directed Interventional Therapy)",
          "indikation": "Sleep disordered breathing (h)",
          "massnahme": "Adaptive servo-ventilation",
          "von": 20,
          "bis": 65,
          "klasse": "IIb",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Weiteres Management (Additional management)",
          "indikation": "All patients with HF",
          "massnahme": "Rehabilitation/exercise",
          "von": 20,
          "bis": 65,
          "klasse": "I",
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Weiteres Management (Additional management)",
          "indikation": "All patients with HF",
          "massnahme": "Telemonitoring",
          "von": 20,
          "bis": 65,
          "klasse": "IIa",
          "bild": 2,
          "kapitel": "Therapie"
        }
      ],
      "siehe": [
        {
          "kapitel": "Spezielle Situationen",
          "ziel": "acs",
          "zielKapitel": "Spezielle Situationen",
          "text": "Herzinsuffizienztherapie nach ACS"
        }
      ],
      "synonyme": [
        "herzinsuffizienz",
        "heart failure",
        "hfref",
        "hfmref",
        "hfpef"
      ]
    },
    {
      "id": "ckd",
      "titel": "Chronische Niereninsuffizienz (CKD)",
      "fachgebiet": "Nephrologie",
      "tags": [
        "ckd",
        "chronische niereninsuffizienz",
        "niereninsuffizienz",
        "nierenfunktion",
        "nierenschädigung",
        "chronic kidney disease",
        "egfr",
        "uacr",
        "albuminurie",
        "cystatin"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026"
      },
      "hinweise": [
        "Hochgestellte Ziffern (1, 2) verweisen auf Literatur, die auf der Folie nicht sichtbar ist."
      ],
      "screenshots": [
        {
          "datei": "img/ckd-diagnostik.png",
          "titel": "Beurteilung der Nierenfunktion und -schädigung"
        },
        {
          "datei": "img/ckd-aktionsplan.png",
          "titel": "Aktionsplan nach Blickwinkel (Nephro am See / Nephro am Wald)"
        }
      ],
      "eintraege": [
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "CKD-Screening",
          "massnahme": "Ideales CKD-Screening sollte duale Beurteilung von eGFR und UACR umfassen",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenfunktion",
          "massnahme": "Verminderte eGFR: eGFR <60 ml/min/1,73 m² (Stadium 3a–5)",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenfunktion",
          "massnahme": "Messung von Cystatin C zusätzlich zur Kreatinin-Messung kann Genauigkeit der eGFR-Bestimmung verbessern",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenfunktion",
          "massnahme": "Diagnostische Bestätigung und Stadienbestimmung sollte idealerweise sowohl Kreatinin als auch Cystatin C zur genauen eGFR-Messung umfassen",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenschädigung",
          "massnahme": "Albuminurie: AER ≥30 mg/24 h; UACR ≥30 mg/g [≥3 mg/mmol]",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenschädigung",
          "massnahme": "Urinsediment-Anomalien",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenschädigung",
          "massnahme": "Elektrolyt- und andere Störungen aufgrund von tubulären Veränderungen",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenschädigung",
          "massnahme": "Histologisch entdeckte Veränderungen",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenschädigung",
          "massnahme": "Mittels Bildgebung entdeckte strukturelle Veränderungen",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Nierenschädigung",
          "massnahme": "Nierentransplantation in der Anamnese",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Beurteilung der Nierenfunktion und -schädigung",
          "indikation": "Diagnose",
          "massnahme": "Diagnose von CKD erfordert zwei abnormale Messwerte im Abstand von mindestens 3 Monaten",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Therapie",
          "massnahme": "RAAS-Blockade",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Therapie",
          "massnahme": "Blutdruck-Kontrolle",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Therapie",
          "massnahme": "Blutzucker-Korrektur",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Therapie",
          "massnahme": "(Azidose-Korrektur)",
          "notiz": "auf der Folie in Klammern",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Therapie",
          "massnahme": "SGLT2-Inhibition",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Bei T2D",
          "massnahme": "nsMRA",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Ärztin-seits",
          "indikation": "Bei T2D",
          "massnahme": "Semaglutid",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Lebensstil",
          "massnahme": "Bleiben Sie fit und aktiv",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Lebensstil",
          "massnahme": "Lassen Sie regelmässig Ihren Blutzuckerspiegel überprüfen",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Lebensstil",
          "massnahme": "Behalten Sie Ihren Blutdruck im Auge",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Lebensstil",
          "massnahme": "Ernähren Sie sich gesund und achten Sie auf Ihr Körpergewicht",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Lebensstil",
          "massnahme": "Trinken Sie ausreichend",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Lebensstil",
          "massnahme": "Rauchen Sie nicht",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Medikamente",
          "massnahme": "Nehmen Sie nicht regelmässig Medikamente, die frei verkäuflich sind",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Aktionsplan – Patientinnen-seits",
          "indikation": "Screening",
          "massnahme": "Lassen Sie Ihre Nierenfunktion messen, wenn mehr als einer der «Hochrisikofaktoren» zutrifft: Diabetes, Bluthochdruck, Übergewicht, FA pos, nicht-kaukasische Abstammung",
          "bild": 1,
          "kapitel": "Therapie"
        }
      ],
      "synonyme": [
        "ckd",
        "chronische niereninsuffizienz",
        "niereninsuffizienz",
        "nierenkrankheit",
        "chronic kidney disease"
      ]
    },
    {
      "id": "copd",
      "titel": "COPD",
      "fachgebiet": "Pneumologie",
      "tags": [
        "copd",
        "chronisch obstruktive lungenerkrankung",
        "gold",
        "lama",
        "laba",
        "bronchodilator",
        "exazerbation"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "GOLD 2026 Report (goldcopd.org), Zugriff 20.04.2026"
      },
      "hinweise": [],
      "screenshots": [
        {
          "datei": "img/copd-gold-2026.png",
          "titel": "GOLD-Klassifikation der COPD 2025 vs. 2026"
        }
      ],
      "eintraege": [
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "GOLD 2026: Gruppen (A/B/E) und Therapie",
          "indikation": "Flowchart/Grafik",
          "massnahme": "GOLD-Klassifikation der COPD 2025 vs. 2026",
          "bild": 0,
          "suchtext": "Gruppe A: 0 Exazerbationen, CAT <10 «A» Bronchodilator · Gruppe B: 0 Exazerbationen, CAT ≥10 LABA + LAMA · Gruppe E: ≥1 Exazerbation (unabhängig von CAT) LABA + LAMA + ICS* *Blut-Eos ≥300/µl bzw. ≥100/µl falls wiederholte Exazerbationen · Chronische Bronchitis Roflumilast · Former Smoker Azithromycin · — Biologika [Dupilumab/Mepolizumab] · Bronchiektasen-Erkrankung Brensocatib"
        }
      ],
      "synonyme": [
        "copd",
        "chronisch obstruktive lungenerkrankung"
      ]
    },
    {
      "id": "diabetes-typ2",
      "titel": "Diabetes mellitus Typ 2",
      "fachgebiet": "Endokrinologie / Diabetologie",
      "tags": [
        "diabetes",
        "diabetes mellitus",
        "t2d",
        "typ 2",
        "dm2",
        "metformin",
        "sglt-2",
        "sglt2",
        "glp-1",
        "dpp4",
        "insulin",
        "basalinsulin",
        "blutzucker"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026"
      },
      "hinweise": [],
      "screenshots": [
        {
          "datei": "img/dm2-algorithmus.png",
          "titel": "Therapiealgorithmus Diabetes mellitus Typ 2"
        }
      ],
      "eintraege": [
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "Therapiealgorithmus",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Therapiealgorithmus Diabetes mellitus Typ 2",
          "bild": 0,
          "suchtext": "Alle Motivation für Änderung Lebensstil (mehr Aktivität und gesunde Ernährung) = sehr wichtig · Alle Multifaktorielle Behandlung: Blutdruckkontrolle, Senkung Lipide und Rauchstopp · Begleiterkrankung: Herzinsuffizienz, Nierenschutz Metformin + SGLT-2i (eGFR >30) ↔ + GLP-1-RA (BMI >28) bzw. DPP4i (BMI <28) · Begleiterkrankung: kardiovaskulär, Gewichtsreduktion Metformin (eGFR >30) + GLP-1-RA (BMI >28) ↔ + SGLT-2i (eGFR >30) · Nächste Stufe + Basalinsulin oder ko-formuliertes Insulin (ein- oder zweimal täglich) · Insulinmangel Falls Insulinmangel, beginne hier (Basalinsulin bzw. ko-formuliertes Insulin) · Unter Insulin Weiterfahren mit Metformin, SGLT-2i, GLP-1-RA. Stopp: Sulfonylharnstoff + DPP4i (falls GLP-1-RA)"
        }
      ],
      "synonyme": [
        "diabetes",
        "diabetes mellitus",
        "t2d",
        "dm2"
      ]
    },
    {
      "id": "acs",
      "titel": "Akutes Koronarsyndrom / Myokardinfarkt",
      "fachgebiet": "Kardiologie",
      "tags": [
        "acs",
        "akutes koronarsyndrom",
        "myokardinfarkt",
        "herzinfarkt",
        "infarkt",
        "stemi",
        "nstemi",
        "omi",
        "dapt",
        "koronar",
        "pci",
        "p2y12"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026"
      },
      "parameter": {
        "name": "LVEF",
        "einheit": "%",
        "min": 20,
        "max": 65
      },
      "hinweise": [
        "Mit LVEF gesucht, werden nur die Einträge mit LVEF-Angabe gefiltert (LVEF <40 %). Einträge ohne Zahlenangabe (z. B. «normale LVEF») bleiben immer sichtbar."
      ],
      "screenshots": [
        {
          "datei": "img/acs-take-home.png",
          "titel": "Take-home message"
        },
        {
          "datei": "img/acs-dapt.png",
          "titel": "DAPT: Was gibt man und wie lange?"
        },
        {
          "datei": "img/acs-herzinsuffizienz.png",
          "titel": "Herzinsuffizienztherapie nach ACS"
        },
        {
          "datei": "img/acs-nachsorge.png",
          "titel": "Wann ist eine erste Kontrolle empfohlen"
        }
      ],
      "eintraege": [
        {
          "gruppe": "Take-home message",
          "indikation": "Diagnose",
          "massnahme": "EKG innerhalb von 10 Minuten nach Erstkontakt. An «OMI» denken.",
          "bild": 0,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Take-home message",
          "indikation": "Akutmedikation",
          "massnahme": "Standardgabe von ASS und UFH",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Take-home message",
          "indikation": "Timing der Revaskularisation",
          "massnahme": "Sofortige invasive Abklärung bei STEMI und instabilen NSTEMI-Patienten; bei stabilen NSTEMI-Patienten erfolgt die Koronarangiographie in der Regel innerhalb von 24 Stunden",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Take-home message",
          "indikation": "DAPT",
          "massnahme": "Wahl des P2Y12-Inhibitors: Prasugrel und Ticagrelor erste Wahl. Dauer i.d.R. 12 Monate",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Take-home message",
          "indikation": "Lipidsenkung",
          "massnahme": "Frühzeitige, aggressive Senkung anstreben",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Take-home message",
          "indikation": "Management der Herzinsuffizienz",
          "massnahme": "Bei einer LVEF <40 % ist die frühzeitige Einleitung der prognoseverbessernden Therapie (ACE-Hemmer, Betablocker, MRA und SGLT2-Inhibitor) essenziell",
          "von": 0,
          "bis": 39.9,
          "bereichText": "<40 %",
          "bild": 0,
          "kapitel": "Spezielle Situationen"
        },
        {
          "gruppe": "Take-home message",
          "indikation": "Nachsorge",
          "massnahme": "Rauchstopp; kardiologische Rehabilitation entscheidend. Aktive Suche nach Depressionen und Angststörungen (z. B. PHQ-Score)",
          "bild": 0,
          "kapitel": "Nachsorge"
        },
        {
          "gruppe": "DAPT – was gibt man und wie lange?",
          "indikation": "Grundsätzlich",
          "massnahme": "ASS cardio + P2Y12-Inhibitor",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "DAPT – was gibt man und wie lange?",
          "indikation": "Clopidogrel",
          "massnahme": "Schwächer als Prasugrel und Ticagrelor → Mittel der Wahl bei elektiver PCI",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "DAPT – was gibt man und wie lange?",
          "indikation": "Prasugrel",
          "massnahme": "Grundsätzlich erste Wahl (ISAR-REACT-5-Studie). Kontraindikation: Alter 75 LJ, St. n. Stroke/TIA; Cave bei Gewicht <60 kg",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "DAPT – was gibt man und wie lange?",
          "indikation": "Ticagrelor",
          "massnahme": "Nachteil 2×/d; ggf. Dyspnoe-NW (ca. 15 %)",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "DAPT – was gibt man und wie lange?",
          "indikation": "Bei etablierter OAK",
          "massnahme": "NOAK + ASS cardio + Clopidogrel: grundsätzlich 1 Woche Triple-Therapie, dann NOAK + ASS cardio oder Clopidogrel für 1 Jahr",
          "bild": 1,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Herzinsuffizienztherapie nach ACS",
          "indikation": "Herzinfarkt mit LVEF <40 %",
          "massnahme": "ACE-Hemmer und Betablocker. Optimal während Hosp. auch Beginn mit SGLT2-Hemmer +/- Aldactone/Eplerenon (MRA)",
          "von": 0,
          "bis": 39.9,
          "bereichText": "<40 %",
          "bild": 2,
          "kapitel": "Spezielle Situationen"
        },
        {
          "gruppe": "Herzinsuffizienztherapie nach ACS",
          "indikation": "Normale LVEF, keine Hypertonie",
          "massnahme": "Grundsätzlich für Remodelling 1 Jahr erwägen. Dauertherapie wahrscheinlich nicht notwendig",
          "bild": 2,
          "kapitel": "Spezielle Situationen"
        },
        {
          "gruppe": "Herzinsuffizienztherapie nach ACS",
          "indikation": "Normale LVEF + Hypertonie",
          "massnahme": "ACE-Hemmer und Betablocker für 1 Jahr, dann Betablocker-Stopp",
          "bild": 2,
          "kapitel": "Spezielle Situationen"
        },
        {
          "gruppe": "Nachsorge – wann ist eine erste Kontrolle empfohlen?",
          "indikation": "Grundsätzlich",
          "massnahme": "Hängt von verschiedenen Faktoren ab",
          "bild": 3,
          "kapitel": "Nachsorge"
        },
        {
          "gruppe": "Nachsorge – wann ist eine erste Kontrolle empfohlen?",
          "indikation": "Kardiologe/Kardiologin",
          "massnahme": "Nach 4–6 Wochen; Kontrolle LVEF nach 2–3 Monaten",
          "bild": 3,
          "kapitel": "Nachsorge"
        },
        {
          "gruppe": "Nachsorge – wann ist eine erste Kontrolle empfohlen?",
          "indikation": "Hausarzt/Hausärztin",
          "massnahme": "In den ersten 2–3 Wochen",
          "bild": 3,
          "kapitel": "Nachsorge"
        },
        {
          "gruppe": "Nachsorge – wann ist eine erste Kontrolle empfohlen?",
          "indikation": "Lipid-Kontrolle",
          "massnahme": "Nach 6–8 Wochen mit ggf. Anpassung der Therapie (Ezetimib). Grundsätzlich: je früher LDL-C-Senkung, desto besser!",
          "bild": 3,
          "kapitel": "Nachsorge"
        },
        {
          "gruppe": "Nachsorge – wann ist eine erste Kontrolle empfohlen?",
          "indikation": "Rauchen",
          "massnahme": "Rauchstopp!!",
          "bild": 3,
          "kapitel": "Nachsorge"
        }
      ],
      "siehe": [
        {
          "kapitel": "Therapie",
          "ziel": "dyslipidaemie",
          "zielKapitel": "Therapie",
          "text": "Lipidsenkung: AGLA-Behandlungsschema und ESC-Zielwerte (Dyslipidämie)"
        }
      ],
      "synonyme": [
        "acs",
        "akutes koronarsyndrom",
        "koronarsyndrom",
        "myokardinfarkt",
        "herzinfarkt",
        "infarkt",
        "stemi",
        "nstemi"
      ]
    },
    {
      "id": "dyslipidaemie",
      "titel": "Dyslipidämie (LDL-C-Senkung)",
      "fachgebiet": "Kardiologie",
      "tags": [
        "lipide",
        "lipidtherapie",
        "lipidsenkung",
        "ldl",
        "ldl-c",
        "cholesterin",
        "dyslipidämie",
        "hypercholesterinämie",
        "statin",
        "ezetimib",
        "pcsk9",
        "inclisiran",
        "bempedoinsäure",
        "agla",
        "ascvd",
        "acs",
        "myokardinfarkt",
        "herzinfarkt"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "ESC Guidelines (LDL-C Lowering); AGLA-Behandlungsschema"
      },
      "hinweise": [
        "Im Vortrag gehören beide Folien zum Thema ACS.",
        "AGLA: «Die hier dargestellten Behandlungsschemata berücksichtigen die Limitatio des BAG für PCSK9-Inhibitoren und Bempedoinsäure. Sie weichen deshalb von der PCSK9-Indikation in den ESC/EAS Guidelines ab.»"
      ],
      "screenshots": [
        {
          "datei": "img/lipide-esc-zielwerte.png",
          "titel": "ESC Guidelines – LDL-C Lowering"
        },
        {
          "datei": "img/lipide-agla-schema.png",
          "titel": "AGLA Behandlungsschema – sehr hohes Risiko"
        }
      ],
      "eintraege": [
        {
          "typ": "bild",
          "kapitel": "Risiko/Klassifikation",
          "gruppe": "ESC – LDL-C-Zielwert nach CV-Risiko",
          "indikation": "Flowchart/Grafik",
          "massnahme": "ESC Guidelines – LDL-C Lowering",
          "bild": 0,
          "suchtext": "Low: SCORE <1% LDL-C goal 3.0 mmol/L · Moderate: SCORE ≥1% and <5%; young patients (T1DM <35 years; T2DM <50 years) with DM duration <10 years without other risk factors LDL-C goal 2.6 mmol/L · High: SCORE ≥5% and <10%; markedly elevated single risk factors, in particular TC >8 mmol/L or LDL-C >4.9 mmol/L or BP ≥180/110 mmHg; FH without other major risk factors; moderate CKD (eGFR 30–59 mL/min); DM without target organ damage, with DM duration ≥10 years, or other additional risk factor LDL-C goal 1.8 mmol/L and ≥50% reduction from baseline · Very high: ASCVD (clinical/imaging); SCORE ≥10%; FH with ASCVD or with another major risk factor; severe CKD (eGFR <30 mL/min); DM & target organ damage: ≥3 major risk factors; or early onset of T1DM of long duration (>20 years) LDL-C goal 1.4 mmol/L and ≥50% reduction from baseline · ASCVD with second vascular event within 2 years (not necessarily of the same type) under maximally tolerated statin therapy LDL-C goal <1.0 mmol/L may be considered Level B · Grundsatz Raised LDL-C is a cause of ASCVD; the proportional reduction in risk depends on the absolute reduction in LDL-C"
        },
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "AGLA – Behandlungsschema sehr hohes Risiko",
          "indikation": "Flowchart/Grafik",
          "massnahme": "AGLA Behandlungsschema – sehr hohes Risiko",
          "bild": 1,
          "suchtext": "Start Hochwirksames Statin (Rosuvastatin, Pitavastatin, Atorvastatin) · LDL-C <1,4 mmol/l und Senkung ≥50 % Therapie kontrolliert fortsetzen · Ziel nicht erreicht, keine manifeste ASCVD Ezetimib · Ziel nicht erreicht, manifeste ASCVD, LDL-C ≤1,8 mmol/l Ezetimib · Ziel nicht erreicht, manifeste ASCVD, LDL-C >1,8 mmol/l PCSK9-Inhibitor (siRNA: Inclisiran; mAbs: Alirocumab, Evolocumab) oder Ezetimib · Unter Ezetimib LDL-C ≤1,8 mmol/l Therapie kontrolliert fortsetzen · Unter Ezetimib LDL-C >1,8 mmol/l PCSK9-Inhibitor oder Bempedoinsäure · Therapie kontrolliert fortsetzen LDL-C-Kontrolle 1×/Jahr; häufiger bei entsprechender klinischer Situation"
        }
      ],
      "siehe": [
        {
          "kapitel": "Nachsorge",
          "ziel": "acs",
          "zielKapitel": "Nachsorge",
          "text": "Lipid-Kontrolle nach ACS"
        }
      ],
      "synonyme": [
        "dyslipidämie",
        "dyslipidaemie",
        "hypercholesterinämie",
        "lipide",
        "cholesterin",
        "ldl",
        "ldl-c"
      ]
    },
    {
      "id": "onko-antiemetika",
      "titel": "Übelkeit/Erbrechen unter Chemotherapie (Antiemetika)",
      "fachgebiet": "Onkologie",
      "tags": [
        "antiemetika",
        "antiemese",
        "emesis",
        "übelkeit",
        "erbrechen",
        "nausea",
        "cinv",
        "chemotherapie",
        "onkologie",
        "olanzapin",
        "dexamethason",
        "aprepitant"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "Herrstedt J, et al. ESMO Open 2024;9(2):102195"
      },
      "hinweise": [
        "Abkürzungen: 5-HT3 = serotonin3 receptor antagonist; DEX = dexamethasone; NK1 = neurokinin1 receptor antagonist such as aprepitant or fosaprepitant or rolapitant or oral or i.v. NEPA (combination of netupitant and palonosetron); OLZ = olanzapine; DOP = dopamine receptor antagonist."
      ],
      "screenshots": [
        {
          "datei": "img/onko-antiemetika.png",
          "titel": "Antiemetika – Richtlinien"
        }
      ],
      "eintraege": [
        {
          "gruppe": "Antiemetika nach emetischem Risiko",
          "indikation": "High Non-AC",
          "massnahme": "5-HT3 + DEX + NK1 + OLZ",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Antiemetika nach emetischem Risiko",
          "indikation": "High AC",
          "massnahme": "5-HT3 + DEX + NK1 + OLZ",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Antiemetika nach emetischem Risiko",
          "indikation": "Moderate: Carboplatin ≥AUC 5; Oxaliplatin women ≤50 years",
          "massnahme": "5-HT3 + DEX + NK1",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Antiemetika nach emetischem Risiko",
          "indikation": "Moderate (other than above)*",
          "massnahme": "5-HT3 + DEX",
          "notiz": "*The emetic potential of sacituzumab-govitecan and trastuzumab-deruxtecan appears to be at the high end of the moderate category, most closely resembling that of carboplatin. While prospective studies are needed it is suggested to prevent emesis as for carboplatin AUC ≥5.",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Antiemetika nach emetischem Risiko",
          "indikation": "Low",
          "massnahme": "5-HT3 OR DEX OR DOP",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Antiemetika nach emetischem Risiko",
          "indikation": "Minimal",
          "massnahme": "No routine prophylaxis",
          "bild": 0,
          "kapitel": "Therapie"
        }
      ],
      "synonyme": [
        "übelkeit",
        "erbrechen",
        "emesis",
        "cinv",
        "antiemetika",
        "antiemese",
        "nausea"
      ]
    },
    {
      "id": "onko-irae",
      "titel": "Immuntherapie-Nebenwirkungen (irAE)",
      "fachgebiet": "Onkologie",
      "tags": [
        "irae",
        "immuntherapie",
        "checkpoint",
        "checkpoint-inhibitor",
        "pd-1",
        "ctla-4",
        "immunvermittelt",
        "nebenwirkungen",
        "ctcae",
        "onkologie",
        "kolitis",
        "hypophysitis",
        "pneumonitis",
        "myokarditis",
        "ici",
        "monitoring"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "Dougan M, et al. Cell 2021;184(6):1575-88; Michot JM, et al. Eur J Cancer 2016;54:139-48; ESMO Patient Guide Immunotherapy Side Effects; Özdemir BC, et al. Cancer Immunol Immunother 2023;72(7):1991-2001"
      },
      "parameter": {
        "name": "Grad",
        "einheit": "",
        "min": 1,
        "max": 4
      },
      "hinweise": [
        "Grad-Feld: blendet in «Therapie von irAEs nach CTCAE-Grad» die anderen Grade aus. Grafiken und Abklärungen bleiben sichtbar.",
        "Abklärungen: Fussnoten a–f sind auf der Folie nicht erklärt. Spalten ohne Untersuchung («–») sind weggelassen."
      ],
      "screenshots": [
        {
          "datei": "img/onko-irae-substanz.png",
          "titel": "irAE – abhängig von der Substanz"
        },
        {
          "datei": "img/onko-irae-grade.png",
          "titel": "Verdacht auf irAE"
        },
        {
          "datei": "img/onko-irae-therapie.png",
          "titel": "Therapie von irAEs"
        },
        {
          "datei": "img/onko-irae-abklaerungen.png",
          "titel": "Abklärungen vor/unter Immuntherapie"
        }
      ],
      "eintraege": [
        {
          "typ": "bild",
          "kapitel": "Diagnostik",
          "gruppe": "Häufigste klinisch wichtige irAE nach Substanz",
          "indikation": "Flowchart/Grafik",
          "massnahme": "irAE – abhängig von der Substanz",
          "bild": 0,
          "suchtext": "PD-1-Blockade (hervorgehoben) Hypothyroidism, Pneumonitis, Myocarditis, Arthralgia, Autoimmune diabetes Ebenfalls dargestellt: Uveitis, Encephalitis, Rash/Dermatitis, Hepatitis, Enteritis, Colitis · CTLA-4-/Kombinationsblockade (hervorgehoben) Hypophysitis, Rash/Dermatitis, Enteritis, Colitis Ebenfalls dargestellt: Encephalitis, Uveitis, Hypothyroidism, Pneumonitis, Myocarditis, Arthralgia, Autoimmune diabetes, Hepatitis"
        },
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "Verdacht auf irAE – Behandlungsintensität nach Grad",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Verdacht auf irAE",
          "bild": 1,
          "suchtext": "Setting Managed in outpatient/community setting (Grade 1–2) · Setting Needs hospital admission and care (Grade 3–4) · Alle Grade Symptomatic therapy · Ab Grad 2 Stop treatment* *For some side effects, treatment can be restarted when they subside · Ab Grad 2 Oral steroids → intravenous steroids started (ab Grad 3) · Ab Grad 3 Referral to specialist (strong immunosuppressive therapy)"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 1 – Management",
          "massnahme": "Ambulant",
          "von": 1,
          "bis": 1,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 1 – Kortikosteroide",
          "massnahme": "Nicht empfohlen",
          "von": 1,
          "bis": 1,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 1 – Weitere Immunsuppressiva",
          "massnahme": "Nicht empfohlen",
          "von": 1,
          "bis": 1,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 1 – Immuntherapie",
          "massnahme": "Weiterführen",
          "von": 1,
          "bis": 1,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 2 – Management",
          "massnahme": "Ambulant",
          "von": 2,
          "bis": 2,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 2 – Kortikosteroide",
          "massnahme": "Topisch oder systemisch oral (0.5–1 mg/kg/d)",
          "von": 2,
          "bis": 2,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 2 – Weitere Immunsuppressiva",
          "massnahme": "Nicht empfohlen",
          "von": 2,
          "bis": 2,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 2 – Immuntherapie",
          "massnahme": "Pausieren, Wiederbeginn wenn G ≤1",
          "von": 2,
          "bis": 2,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 3 – Management",
          "massnahme": "Hospitalisation",
          "von": 3,
          "bis": 3,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 3 – Kortikosteroide",
          "massnahme": "Systemisch oral oder i.v. (1–2 mg/kg/d)",
          "von": 3,
          "bis": 3,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 3 – Weitere Immunsuppressiva",
          "massnahme": "Ggf., falls keine Besserung nach 3–5 Tagen unter Steroiden",
          "von": 3,
          "bis": 3,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 3 – Immuntherapie",
          "massnahme": "Pausieren, ggf. Wiederbeginn wenn G ≤1",
          "von": 3,
          "bis": 3,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 4 – Management",
          "massnahme": "Hospitalisation (ev. IPS)",
          "von": 4,
          "bis": 4,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 4 – Kortikosteroide",
          "massnahme": "Systemisch, i.v. (1–2 mg/kg/d)",
          "von": 4,
          "bis": 4,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 4 – Weitere Immunsuppressiva",
          "massnahme": "Ggf., falls keine Besserung nach 3–5 Tagen unter Steroiden",
          "von": 4,
          "bis": 4,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Therapie von irAEs nach CTCAE-Grad",
          "indikation": "Grad 4 – Immuntherapie",
          "massnahme": "Absetzen",
          "von": 4,
          "bis": 4,
          "bild": 2,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Liver",
          "massnahme": "Baseline: AST, ALT, GGT, ALP, total bilirubin · Erste 3 Monate, jede ICI-Gabe: AST, ALT, GGT, ALP, total bilirubin · Nach 3 Monaten, alle 4–6 Wochen: AST, ALT, GGT, ALP, total bilirubin",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Endocrine function",
          "massnahme": "Baseline: Cortisol, TSH, fT3, fT4, AMH (a), FSH, LH, Estradiol (b), Glucose, HbA1c · Erste 3 Monate, jede ICI-Gabe: TSH, fT4, fT3 · Nach 3 Monaten, alle 4–6 Wochen: AMH, FSH, LH, Estradiol, HbA1c · Nach 3 Monaten, alle 3–6 Monate: TSH, fT4, fT3",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Heart",
          "massnahme": "Baseline: ECG, CK, Troponin T and I, Echocardiography (c) · Erste 3 Monate, jede ICI-Gabe: CK, Troponin T and I (d) · Nach 3 Monaten, alle 4–6 Wochen: CK, Troponin T (d)",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Kidney",
          "massnahme": "Baseline: Creatinine, Urea, Urine dipstick · Erste 3 Monate, jede ICI-Gabe: Creatinine, Urea · Nach 3 Monaten, alle 4–6 Wochen: Creatinine, Urea · Nach 3 Monaten, alle 3–6 Monate: Urine dipstick",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Fluid and electrolyte balance",
          "massnahme": "Baseline: Sodium, Potassium · Erste 3 Monate, jede ICI-Gabe: Sodium, Potassium · Nach 3 Monaten, alle 4–6 Wochen: Sodium, Potassium",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Bone metabolism",
          "massnahme": "Baseline: Calcium, Albumin, Vitamin D3 · Nach 3 Monaten, alle 3–6 Monate: Calcium, Albumin",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Bone marrow",
          "massnahme": "Baseline: Complete blood count · Erste 3 Monate, alle 4–6 Wochen: Complete blood count · Nach 3 Monaten, alle 4–6 Wochen: Complete blood count",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Latent infections",
          "massnahme": "Baseline: Hepatitis B and C, HIV, Tuberculosis",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Coagulation and fibrinolysis",
          "massnahme": "Baseline: INR, PT, PTT, D-Dimer, Fibrinogen, Ferritin · Nach 3 Monaten, alle 3–6 Monate: INR, PT, PTT",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Gastrointestinal function",
          "massnahme": "Baseline: FC, C.diff, CMV (e)",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Lung function",
          "massnahme": "Baseline: Spirometry and DLCO (f)",
          "bild": 3,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Abklärungen vor/unter Immuntherapie (ICI)",
          "indikation": "Neurological function",
          "massnahme": "Baseline: Neurological examination (cranial nerves and motoric and sensory function)",
          "bild": 3,
          "kapitel": "Diagnostik"
        }
      ],
      "synonyme": [
        "irae",
        "immuntherapie",
        "checkpoint",
        "checkpoint-inhibitor",
        "ici"
      ]
    },
    {
      "id": "vorhofflimmern",
      "titel": "Vorhofflimmern",
      "fachgebiet": "Kardiologie",
      "tags": [
        "vorhofflimmern",
        "vhf",
        "atrial fibrillation",
        "cha2ds2-va",
        "cha2ds2",
        "chads",
        "has-bled",
        "frequenzkontrolle",
        "rate control",
        "oak",
        "rhythmus",
        "arrhythmie",
        "kardioversion",
        "cardioversion",
        "tee",
        "amiodaron",
        "flecainid"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "2024 ESC GL on AF (Van Gelder IC, et al. EHJ 2024;45:3314-414); Kirchhof P, et al. EHJ 2016;37:2893-962 (adapted); Verma A, et al. Can J Cardiol 2014;30:1114-30; Atzema CL, Singh SM. Cardiol Clin 2018;36:141-59"
      },
      "hinweise": [
        "Risikofaktor-Management: Die Folie nennt links «BD <130/80 mmHg», die ESC-Grafik rechts «120–129 mmHg / 70–79 mmHg»."
      ],
      "screenshots": [
        {
          "datei": "img/vhf-antikoagulation.png",
          "titel": "2024 ESC GL on AF: Anticoagulation"
        },
        {
          "datei": "img/vhf-frequenzkontrolle.png",
          "titel": "Acute heart rate control"
        },
        {
          "datei": "img/vhf-risikofaktoren.png",
          "titel": "Integrated care model for AF management"
        },
        {
          "datei": "img/vhf-kardioversion.png",
          "titel": "Cardioversion"
        }
      ],
      "eintraege": [
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Grundsatz",
          "massnahme": "Start OAC ab ≥1 Punkt",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Chronic heart failure – 1 Punkt",
          "massnahme": "Symptoms or signs of HF (irrespective of LVEF) or asymptomatic LVEF ≤40%",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Hypertension – 1 Punkt",
          "massnahme": "Resting BP >140/90 mmHg, or antihypertensive treatment",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Age ≥75 years – 2 Punkte",
          "massnahme": "Alter ≥75 Jahre",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Diabetes mellitus – 1 Punkt",
          "massnahme": "According to currently accepted criteria, or glucose lowering therapy",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Stroke/TIA/TE – 2 Punkte",
          "massnahme": "St. n. Stroke, TIA oder Thromboembolie",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Vascular disease – 1 Punkt",
          "massnahme": "CAD: prior myocardial infarction, PCI, or significant CAD on imaging studies. PVD: claudication, previous revascularization (incl. aorta), or complex aortic plaques (≥4 mm) on imaging",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Thromboembolisches Risiko: CHA₂DS₂-VA (neu, ohne «Sc»)",
          "indikation": "Age 65–74 years – 1 Punkt",
          "massnahme": "Alter 65–74 Jahre",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Blutungsrisiko",
          "indikation": "Blutungsscores",
          "massnahme": "Do not use bleeding risk scores (e.g. HAS-BLED) to decide starting or withdrawing OAC",
          "klasse": "III",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Blutungsrisiko",
          "indikation": "Modifizierbare Faktoren",
          "massnahme": "Manage all modifiable risk factors: AHT, antiplatelet drugs, unstable INR, LMWH bridging, NSAID, corticosteroids, alcohol, drug-drug interactions",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "gruppe": "Blutungsrisiko",
          "indikation": "GI-Blutung",
          "massnahme": "Offer PPI to avoid GI bleeding",
          "bild": 0,
          "kapitel": "Risiko/Klassifikation"
        },
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "Akute Frequenzkontrolle",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Acute heart rate control",
          "bild": 1,
          "suchtext": "LVEF <40 % oder Zeichen der Herzinsuffizienz Smallest dose of βB to achieve rate control · LVEF <40 % oder Zeichen der Herzinsuffizienz Amiodarone is an option in patients with hemodynamic instability and severely reduced LVEF · LVEF ≥40 % βB or ND-CCB (diltiazem or verapamil) · LVEF ≥40 % Check previous drug history to avoid concomitant administration · Beide Pfade Initial resting HR target: <110 bpm · Beide Pfade, danach Add digoxin (if no contraindications); initial resting HR target <110 bpm · Note Avoid bradycardia; perform an echocardiogram to guide further management; consider need for anticoagulation"
        },
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "Kardioversion",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Cardioversion",
          "bild": 3,
          "suchtext": "Hämodynamische Instabilität Ja → Electrical cardioversion · Keine Instabilität Risk for stroke? Low (1) → Kardioversion; High (2) → TEE · (1) Low risk for stroke (NEU) Clear onset <24 h; therapeutic OAC ≥3 weeks · (2) High risk for stroke Insufficient OAC ≥3 weeks and: onset >24 h or unknown, or mechanical/rheumatic valve, or stroke/TIA <6 months · TEE: intracardiac thrombus OAC and rate control, danach erneut Risk for stroke beurteilen · Kardioversion: Wahl Electrical cardioversion oder pharmacological cardioversion · Pharmakologisch: ischemic or structural heart disease Amiodarone i.v. · Pharmakologisch: no relevant structural heart disease Flecainide / Propafenone i.v. / pitp. Ibutilide i.v. · Nach Kardioversion (alle) Stroke prevention: anticoagulation for ≥4 weeks independent of the CHA₂DS₂-VA score. Long-term rhythm control"
        },
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "Risikofaktor-Management (integrated care model)",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Integrated care model for AF management",
          "bild": 2,
          "suchtext": "Alle Integrated management: identify and actively manage all risk factors and comorbidities · AHT BD <130/80 mmHg ESC-Grafik: Blood pressure treatment with target 120–129 mmHg / 70–79 mmHg in most adults (or as low as reasonably achievable) · Heart failure OMT, SGLT2i ESC-Grafik: Optimize with diuretics to alleviate congestion appropriate, medical therapy for reduced LVEF, and SGLT2 inhibitors for all LVEF · Diabetes Glycemic control ESC-Grafik: Effective glycaemic control with diet/medication(s) · Alcohol intake ≤3 drinks/week ESC-Grafik: Reduce alcohol consumption to 3 or less standard drinks per week · Obesity Weight loss >10% ESC-Grafik: Weight loss programme if overweight/obese, with 10% or more weight loss · Sleep apnea CPAP ESC-Grafik: Management of obstructive sleep apnoea to minimize apnoeic episodes · Physical activity Regular activity ESC-Grafik: Tailored exercise programme aiming for regular moderate/vigorous activity · Vorgehen (ESC-Grafik) Setting individual targets for comorbidities and risk factors; behavioural change: shared decision-making, focus on key risk factors, achievable targets, provide information without overloading"
        }
      ],
      "siehe": [
        {
          "kapitel": "Therapie",
          "ziel": "antikoagulation",
          "zielKapitel": "Therapie",
          "text": "Antikoagulanzien nach Indikation (Spalte VHF)"
        }
      ],
      "synonyme": [
        "vorhofflimmern",
        "vhf",
        "atrial fibrillation",
        "af"
      ]
    },
    {
      "id": "hypertonie",
      "titel": "Arterielle Hypertonie",
      "fachgebiet": "Kardiologie",
      "tags": [
        "hypertonie",
        "arterielle hypertonie",
        "bluthochdruck",
        "blutdruck",
        "hypertension",
        "elevated bp",
        "score2",
        "antihypertensiva",
        "amlodipin",
        "amlodipine",
        "losartan",
        "lisinopril",
        "metoprolol",
        "hydrochlorothiazid",
        "hydrochlorothiazide"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "ESC-Algorithmus (erhöhter Blutdruck); www.bpmodel.org"
      },
      "hinweise": [
        "Kombinationstabelle (bpmodel.org): Die Einheit steht nicht auf der Folie."
      ],
      "screenshots": [
        {
          "datei": "img/hypertonie-risikostratifizierung.png",
          "titel": "Erhöhter Blutdruck – Risikostratifizierung (ESC)"
        },
        {
          "datei": "img/hypertonie-baseline.png",
          "titel": "Baseline assessment"
        },
        {
          "datei": "img/hypertonie-kombinationen.png",
          "titel": "Therapie: Medikamente (bpmodel.org)"
        }
      ],
      "eintraege": [
        {
          "typ": "bild",
          "kapitel": "Risiko/Klassifikation",
          "gruppe": "Erhöhter Blutdruck – Risikostratifizierung (ESC)",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Erhöhter Blutdruck – Risikostratifizierung (ESC)",
          "bild": 0,
          "suchtext": "Definition Patient with elevated BP*: office SBP 120–139 mmHg or DBP 70–89 mmHg *Exercise caution when considering treating persons with elevated BP and: moderate-to-severe frailty; symptomatic orthostatic hypotension; age ≥85 years · Schritt 1 Established CVD, moderate/severe CKD, HMOD, DM, or FH? Ja → weiter zu «Patient with T2DM (only) and <60 years old?». Nein → SCORE2 bzw. SCORE2-OP · Schritt 1: Ja Patient with T2DM (only) and <60 years old? Ja → Calculate SCORE2-Diabetes. Nein → Behandlungspfad · Schritt 1: Nein Calculate SCORE2 or SCORE2-OP · T2DM (only), <60 Jahre Calculate SCORE2-Diabetes · 10-year predicted CVD risk ≥10 % Behandlungspfad: Lifestyle measures to reduce BP (Class I); after 3 months of lifestyle measures, pharmacological treatment for patients with ≥130/80 mmHg (Class I) · 10-year predicted CVD risk <5 % Lifestyle measures to reduce BP (Class I); reassess risk/BP one year later (Class IIa) · 10-year predicted CVD risk 5 % – <10 % Consider shared risk modifiers: high-risk ethnicity; family history of premature onset ASCVD; socio-economic deprivation; auto-immune diseases; severe mental illness; HIV. Ja → Behandlungspfad · 5 % – <10 %, keine gemeinsamen Risikomodifikatoren Consider sex-specific risk modifiers: gestational diabetes; gestational hypertension; pre-eclampsia; pre-term delivery; one or more still births; recurrent miscarriage. Ja → Behandlungspfad · Weiterhin unklar If still uncertain, shared decision-making informed by risk tools: CAC score; carotid or femoral plaque; high-sensitivity cardiac troponin; NT-proBNP; pulse wave velocity. Abnormal → Behandlungspfad; nicht abnormal → Lifestyle + Reassessment nach 1 Jahr"
        },
        {
          "gruppe": "Baseline assessment",
          "indikation": "Labor",
          "massnahme": "Basic lab workup (Hematology, Na, K, Crea, Ca, Gluc, HbA1c, LDL)",
          "bild": 1,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Baseline assessment",
          "indikation": "EKG",
          "massnahme": "ECG",
          "bild": 1,
          "kapitel": "Diagnostik"
        },
        {
          "gruppe": "Baseline assessment",
          "indikation": "Urin",
          "massnahme": "Urine with albumine/creatinine ratio",
          "bild": 1,
          "kapitel": "Diagnostik"
        },
        {
          "typ": "bild",
          "kapitel": "Therapie",
          "gruppe": "Kombinationstherapie – Wirkung je Kombination (bpmodel.org)",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Therapie: Medikamente (bpmodel.org)",
          "bild": 2,
          "suchtext": "Spalten None 0 mg · Losartan 50 / 100 mg · Lisinopril 10 / 20 mg · Metoprolol 50 / 100 mg · HCT 0 mg + Amlodipin 0 mg None: – · Losartan 50: 7 (6–8) · Losartan 100: 8 (7–9) · Lisinopril 10: 7 (6–8) · Lisinopril 20: 10 (7–11) · Metoprolol 50: 7 (5–8) · Metoprolol 100: 7 (6–8) · HCT 0 mg + Amlodipin 5 mg None: 9 (8–10) · Losartan 50: 15 (13–16) · Losartan 100: 16 (14–17) · Lisinopril 10: 15 (13–16) · Lisinopril 20: 18 (15–19) · Metoprolol 50: 15 (13–16) · Metoprolol 100: 15 (14–17) · HCT 0 mg + Amlodipin 10 mg None: 12 (10–15) · Losartan 50: 18 (15–19) · Losartan 100: 19 (16–21) · Lisinopril 10: 18 (16–20) · Lisinopril 20: 21 (17–22) · Metoprolol 50: 18 (16–20) · Metoprolol 100: 18 (16–21) · HCT 12,5 mg + Amlodipin 0 mg None: 6 (5–7) · Losartan 50: 12 (11–13) · Losartan 100: 13 (12–14) · Lisinopril 10: 12 (11–13) · Lisinopril 20: 15 (13–16) · Metoprolol 50: 12 (11–13) · Metoprolol 100: 12 (11–14) · HCT 12,5 mg + Amlodipin 5 mg None: 14 (13–15) · Losartan 50: 19 (17–20) · Losartan 100: 20 (18–21) · Lisinopril 10: 20 (18–21) · Lisinopril 20: 22 (19–24) · Metoprolol 50: 19 (17–21) · Metoprolol 100: 20 (17–21) · HCT 12,5 mg + Amlodipin 10 mg None: 17 (15–19) · Losartan 50: 22 (19–24) · Losartan 100: 23 (20–25) · Lisinopril 10: 22 (20–24) · Lisinopril 20: 25 (21–27) · Metoprolol 50: 22 (19–24) · Metoprolol 100: 22 (19–24) · HCT 25 mg + Amlodipin 0 mg None: 8 (7–9) · Losartan 50: 14 (12–15) · Losartan 100: 15 (13–16) · Lisinopril 10: 14 (12–15) · Lisinopril 20: 17 (15–18) · Metoprolol 50: 14 (12–15) · Metoprolol 100: 14 (12–15) · HCT 25 mg + Amlodipin 5 mg None: 16 (14–17) · Losartan 50: 21 (19–22) · Losartan 100: 22 (19–23) · Lisinopril 10: 21 (19–22) · Lisinopril 20: 24 (21–25) · Metoprolol 50: 21 (19–22) · Metoprolol 100: 21 (18–23) · HCT 25 mg + Amlodipin 10 mg None: 19 (17–21) · Losartan 50: 23 (20–25) · Losartan 100: 24 (21–26) · Lisinopril 10: 24 (21–25) · Lisinopril 20: 26 (22–28) · Metoprolol 50: 23 (20–25) · Metoprolol 100: 23 (20–25)"
        }
      ],
      "synonyme": [
        "hypertonie",
        "arterielle hypertonie",
        "bluthochdruck",
        "hypertension",
        "blutdruck"
      ]
    },
    {
      "id": "antikoagulation",
      "titel": "Antikoagulation",
      "fachgebiet": "Gerinnung / Perioperative Medizin",
      "tags": [
        "antikoagulation",
        "therapeutische antikoagulation",
        "heparin",
        "ufh",
        "nmh",
        "fondaparinux",
        "marcumar",
        "xabane",
        "dabigatran",
        "argatroban",
        "hit",
        "klappenersatz",
        "monitoring",
        "thrombose",
        "lungenembolie",
        "doak",
        "noak",
        "antagonisierung",
        "reversal",
        "apixaban",
        "rivaroxaban",
        "edoxaban",
        "andexanet",
        "idarucizumab",
        "pcc",
        "dringliche operation",
        "notfall-op",
        "perioperativ",
        "esaic",
        "blutung",
        "gerinnung"
      ],
      "quelle": {
        "typ": "Vortrag (FOMF)",
        "stand": "2025/2026",
        "titel": "DOAK vor dringlicher OP: Algorithmus ESAIC"
      },
      "hinweise": [
        "Abkürzungen: UFH = unfraktioniertes Heparin; NMH = niedermolekulares Heparin; Xabane = Apixaban, Rivaroxaban, Edoxaban; NVHF = nichtvalvuläres Vorhofflimmern.",
        "Die Folie ist rechts abgeschnitten; die Fortsetzung des Algorithmus (Pfeil nach rechts) ist nicht sichtbar."
      ],
      "screenshots": [
        {
          "datei": "img/antikoagulation-substanzen.png",
          "titel": "Therapeutische Antikoagulation"
        },
        {
          "datei": "img/doak-antagonisierung.png",
          "titel": "Patients with confirmed intake of DOACs before urgent surgery"
        }
      ],
      "eintraege": [
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "UFH",
          "massnahme": "Thrombose/LE: ja · VHF: ja · Mech. Klappenersatz: ja · Monitoring: aPTT/aXa",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "NMH",
          "massnahme": "Thrombose/LE: ja · VHF: ja · Mech. Klappenersatz: (ja) · Monitoring: aXa 0,4–1,1 U/ml",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "Fondaparinux",
          "massnahme": "Thrombose/LE: ja · VHF: (ja) · Mech. Klappenersatz: nein · Monitoring: 0,6–1,2 µg/ml",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "Marcumar",
          "massnahme": "Thrombose/LE: ja (nicht initial) · VHF: ja · Mech. Klappenersatz: ja · Monitoring: INR",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "Xabane (Apixaban, Rivaroxaban, Edoxaban)",
          "massnahme": "Thrombose/LE: ja (A, R), E d5 · VHF: ja (NVHF) · Mech. Klappenersatz: nein · Monitoring: kein, ggf. aXa",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "Dabigatran",
          "massnahme": "Thrombose/LE: (ja) d5 · VHF: ja (NVHF) · Mech. Klappenersatz: nein · Monitoring: kein, ggf. Spiegel",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "gruppe": "Substanzen nach Indikation und Monitoring",
          "indikation": "Argatroban",
          "massnahme": "Thrombose/LE: bei HIT II · VHF: bei HIT II · Mech. Klappenersatz: bei HIT II · Monitoring: 1,5–3 × aPTT; 0,5–1,0 µg/ml",
          "bild": 0,
          "kapitel": "Therapie"
        },
        {
          "typ": "bild",
          "kapitel": "Spezielle Situationen",
          "gruppe": "DOAK vor dringlicher OP (ESAIC)",
          "indikation": "Flowchart/Grafik",
          "massnahme": "Patients with confirmed intake of DOACs before urgent surgery",
          "bild": 1,
          "suchtext": "History Verify intake of direct FXa inhibitors or direct thrombin inhibitor and direct evidence by lab tests (e.g. calibrated anti-FXa activity or (diluted) thrombin time for dabigatran). Check for concomitant bleeding disorders or intake of platelet inhibitors. · Beratung Seek advice from thrombosis and haemostasis service · Blood sampling PT, PT-ratio, aPTT, thrombin time (for dabigatran), calibrated anti-FXa activity, point of care coagulation monitoring (if available), creatinine (GFR), fibrinogen, D-dimers and platelet count on admission · Important Draw blood samples before treatment, but treatment must not be delayed by waiting for lab results. · Apixaban, rivaroxaban 1. Consider «wait and see» strategy if clinically appropriate; stimulate diuresis; 2. Andexanet alfa or PCC; 3. aPCC, if both drugs are unavailable. · Dabigatran 1. Consider «wait and see» strategy if clinically appropriate; stimulate diuresis; 2. Idarucizumab; 3. PCC or aPCC, if idarucizumab is unavailable. · Edoxaban* 1. Consider «wait and see» strategy if clinically appropriate; stimulate diuresis; 2. PCC; 3. aPCC, if PCC is not available. *Andexanet alfa not approved as of February 2024"
        }
      ],
      "siehe": [
        {
          "kapitel": "Therapie",
          "ziel": "vorhofflimmern",
          "zielKapitel": "Risiko/Klassifikation",
          "text": "Vorhofflimmern: CHA₂DS₂-VA – ab wann antikoagulieren"
        }
      ],
      "synonyme": [
        "antikoagulation",
        "antikoagulanzien",
        "doak",
        "noak",
        "blutverdünnung"
      ]
    }
  ],
  "kapitel": [
    "Diagnostik",
    "Risiko/Klassifikation",
    "Therapie",
    "Spezielle Situationen",
    "Nachsorge"
  ]
};
