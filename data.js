// Wissensdatenbank – Inhalte nur aus den eigenen Vortrags-Screenshots transkribiert.
// Bereiche (z. B. LVEF) aus den Grafiken abgelesen.
window.KB = {
  klassen: {
    "I":    { label: "Klasse I",   farbe: "green"  },
    "IIa":  { label: "Klasse IIa", farbe: "yellow" },
    "IIb":  { label: "Klasse IIb", farbe: "orange" },
    "I/IIa":{ label: "Klasse I/IIa (Balken zweifarbig)", farbe: "split" }
  },
  themen: [
    {
      id: "herzinsuffizienz-therapie",
      titel: "Herzinsuffizienz – Therapie nach LVEF",
      fachgebiet: "Kardiologie",
      tags: ["herzinsuffizienz", "heart failure", "hf", "hfref", "hfmref", "hfpef", "lvef", "ejektionsfraktion"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026" },
      parameter: { name: "LVEF", einheit: "%", min: 20, max: 65, achsenNotiz: "Achse 20–65 %; HFrEF links, HFpEF rechts von 50 %" },
      hinweise: [
        "Bereiche aus der Grafik abgelesen (Raster 5 %).",
        "Fussnoten a–h stehen auf den Folien, ihr Inhalt ist auf den Screenshots nicht sichtbar."
      ],
      screenshots: [
        { datei: "img/hf-basistherapie.png",   titel: "Foundational Medical Therapy" },
        { datei: "img/hf-zusatztherapie.png",  titel: "Additional Medical Therapy" },
        { datei: "img/hf-interventionell.png", titel: "Guideline Directed Interventional Therapy · Additional management" }
      ],
      eintraege: [
        // Foundational Medical Therapy
        { gruppe: "Foundational Medical Therapy", indikation: "All patients with HF", massnahme: "ACE-I/ARNI or ARB", fussnote: "a,b", von: 20, bis: 50, klasse: "I", bild: 0 },
        { gruppe: "Foundational Medical Therapy", indikation: "All patients with HF", massnahme: "Beta-blocker", fussnote: "b", von: 20, bis: 50, klasse: "I", bild: 0 },
        { gruppe: "Foundational Medical Therapy", indikation: "All patients with HF", massnahme: "SGLT2-I", von: 20, bis: 65, klasse: "I", bild: 0 },
        { gruppe: "Foundational Medical Therapy", indikation: "All patients with HF", massnahme: "MRA", von: 20, bis: 65, klasse: "I", bild: 0 },

        // Additional Medical Therapy
        { gruppe: "Additional Medical Therapy", indikation: "Congestion", massnahme: "Loop diuretic", von: 20, bis: 65, klasse: "I", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "Iron deficiency", massnahme: "IV iron", von: 20, bis: 50, klasse: "I/IIa", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "SR, HR >70 bpm", massnahme: "Ivabradine", von: 20, bis: 35, klasse: "IIa", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "Obesity", massnahme: "Semaglutide or tirzepatide", von: 45, bis: 65, klasse: "IIa", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "Self-identified Black", massnahme: "Hydralazine/ISDN", von: 20, bis: 40, klasse: "IIa", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "All patients with HF", massnahme: "Vaccination", von: 20, bis: 65, klasse: "IIa", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "All patients with HF", massnahme: "Digoxin/digitoxin", von: 20, bis: 40, klasse: "IIa", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "All patients with HF", massnahme: "ACE-I/ARNI or ARB", von: 50, bis: 65, klasse: "IIb", bild: 1 },
        { gruppe: "Additional Medical Therapy", indikation: "All patients with HF", massnahme: "Vericiguat", von: 20, bis: 45, klasse: "IIb", bild: 1 },

        // Guideline Directed Interventional Therapy
        { gruppe: "Interventional Therapy", indikation: "NYHA class II/III", massnahme: "ICD", fussnote: "c", von: 20, bis: 35, klasse: "I/IIa", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Wide QRS duration", massnahme: "CRT", fussnote: "d", von: 20, bis: 35, klasse: "I/IIa", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Severe AS", massnahme: "SAVR or TAVI", von: 20, bis: 65, klasse: "I", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Secondary MR", massnahme: "TEER", von: 20, bis: 50, klasse: "I", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Advanced HF (e)", massnahme: "Heart transplantation", fussnote: "f", von: 20, bis: 65, klasse: "I", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Advanced HF (e)", massnahme: "LVAD", fussnote: "g", von: 20, bis: 50, klasse: "I", bild: 2, notiz: "Balken läuft zum Ende hin aus" },
        { gruppe: "Interventional Therapy", indikation: "Advanced HF (e)", massnahme: "Kidney replacement therapy", von: 20, bis: 65, klasse: "IIa", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Cardiogenic shock", massnahme: "Temporary MCS", von: 20, bis: 50, klasse: "IIa", bild: 2, notiz: "Balken läuft zum Ende hin aus" },
        { gruppe: "Interventional Therapy", indikation: "Coronary artery disease", massnahme: "CABG", von: 20, bis: 35, klasse: "IIa", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Atrial fibrillation", massnahme: "AF ablation", von: 20, bis: 50, klasse: "IIa", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Atrial fibrillation", massnahme: "AV node ablation", von: 20, bis: 65, klasse: "IIa", bild: 2 },
        { gruppe: "Interventional Therapy", indikation: "Sleep disordered breathing (h)", massnahme: "Adaptive servo-ventilation", von: 20, bis: 65, klasse: "IIb", bild: 2 },

        // Additional management
        { gruppe: "Additional management", indikation: "All patients with HF", massnahme: "Rehabilitation/exercise", von: 20, bis: 65, klasse: "I", bild: 2 },
        { gruppe: "Additional management", indikation: "All patients with HF", massnahme: "Telemonitoring", von: 20, bis: 65, klasse: "IIa", bild: 2 }
      ]
    },
    {
      id: "ckd",
      titel: "Chronische Niereninsuffizienz (CKD) – Diagnostik und Aktionsplan",
      fachgebiet: "Nephrologie",
      tags: ["ckd", "chronische niereninsuffizienz", "niereninsuffizienz", "nierenfunktion", "nierenschädigung", "chronic kidney disease", "egfr", "uacr", "albuminurie", "cystatin"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026" },
      hinweise: ["Hochgestellte Ziffern (1, 2) verweisen auf Literatur, die auf der Folie nicht sichtbar ist."],
      screenshots: [
        { datei: "img/ckd-diagnostik.png", titel: "Beurteilung der Nierenfunktion und -schädigung" },
        { datei: "img/ckd-aktionsplan.png", titel: "Aktionsplan nach Blickwinkel (Nephro am See / Nephro am Wald)" }
      ],
      eintraege: [
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "CKD-Screening", massnahme: "Ideales CKD-Screening sollte duale Beurteilung von eGFR und UACR umfassen", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenfunktion", massnahme: "Verminderte eGFR: eGFR <60 ml/min/1,73 m² (Stadium 3a–5)", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenfunktion", massnahme: "Messung von Cystatin C zusätzlich zur Kreatinin-Messung kann Genauigkeit der eGFR-Bestimmung verbessern", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenfunktion", massnahme: "Diagnostische Bestätigung und Stadienbestimmung sollte idealerweise sowohl Kreatinin als auch Cystatin C zur genauen eGFR-Messung umfassen", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenschädigung", massnahme: "Albuminurie: AER ≥30 mg/24 h; UACR ≥30 mg/g [≥3 mg/mmol]", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenschädigung", massnahme: "Urinsediment-Anomalien", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenschädigung", massnahme: "Elektrolyt- und andere Störungen aufgrund von tubulären Veränderungen", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenschädigung", massnahme: "Histologisch entdeckte Veränderungen", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenschädigung", massnahme: "Mittels Bildgebung entdeckte strukturelle Veränderungen", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Nierenschädigung", massnahme: "Nierentransplantation in der Anamnese", bild: 0 },
        { gruppe: "Beurteilung der Nierenfunktion und -schädigung", indikation: "Diagnose", massnahme: "Diagnose von CKD erfordert zwei abnormale Messwerte im Abstand von mindestens 3 Monaten", bild: 0 },

        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Therapie", massnahme: "RAAS-Blockade", bild: 1 },
        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Therapie", massnahme: "Blutdruck-Kontrolle", bild: 1 },
        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Therapie", massnahme: "Blutzucker-Korrektur", bild: 1 },
        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Therapie", massnahme: "(Azidose-Korrektur)", notiz: "auf der Folie in Klammern", bild: 1 },
        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Therapie", massnahme: "SGLT2-Inhibition", bild: 1 },
        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Bei T2D", massnahme: "nsMRA", bild: 1 },
        { gruppe: "Aktionsplan – Ärztin-seits", indikation: "Bei T2D", massnahme: "Semaglutid", bild: 1 },

        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Lebensstil", massnahme: "Bleiben Sie fit und aktiv", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Lebensstil", massnahme: "Lassen Sie regelmässig Ihren Blutzuckerspiegel überprüfen", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Lebensstil", massnahme: "Behalten Sie Ihren Blutdruck im Auge", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Lebensstil", massnahme: "Ernähren Sie sich gesund und achten Sie auf Ihr Körpergewicht", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Lebensstil", massnahme: "Trinken Sie ausreichend", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Lebensstil", massnahme: "Rauchen Sie nicht", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Medikamente", massnahme: "Nehmen Sie nicht regelmässig Medikamente, die frei verkäuflich sind", bild: 1 },
        { gruppe: "Aktionsplan – Patientinnen-seits", indikation: "Screening", massnahme: "Lassen Sie Ihre Nierenfunktion messen, wenn mehr als einer der «Hochrisikofaktoren» zutrifft: Diabetes, Bluthochdruck, Übergewicht, FA pos, nicht-kaukasische Abstammung", bild: 1 }
      ]
    },
    {
      id: "copd-gold",
      titel: "COPD – GOLD-Klassifikation und Therapie (GOLD 2026)",
      fachgebiet: "Pneumologie",
      tags: ["copd", "chronisch obstruktive lungenerkrankung", "gold", "lama", "laba", "bronchodilator", "exazerbation"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026", titel: "GOLD 2026 Report (goldcopd.org), Zugriff 20.04.2026" },
      hinweise: ["Folientitel: «GOLD-Klassifikation der COPD 2025 vs. 2026», markiert als «NEU! GOLD 2026».", "Achsen: Exazerbationen ≤12 Monate (0 / ≥1) gegen Symptome (CAT <10 / ≥10)."],
      screenshots: [ { datei: "img/copd-gold-2026.png", titel: "GOLD-Klassifikation der COPD 2025 vs. 2026" } ],
      eintraege: [
        { gruppe: "Gruppen und Initialtherapie", indikation: "Gruppe A: 0 Exazerbationen, CAT <10", massnahme: "«A» Bronchodilator", bild: 0 },
        { gruppe: "Gruppen und Initialtherapie", indikation: "Gruppe B: 0 Exazerbationen, CAT ≥10", massnahme: "LABA + LAMA", bild: 0 },
        { gruppe: "Gruppen und Initialtherapie", indikation: "Gruppe E: ≥1 Exazerbation (unabhängig von CAT)", massnahme: "LABA + LAMA + ICS*", notiz: "*Blut-Eos ≥300/µl bzw. ≥100/µl falls wiederholte Exazerbationen", bild: 0 },
        { gruppe: "Zusätzlich aufgeführt (neben Gruppe E)", indikation: "Chronische Bronchitis", massnahme: "Roflumilast", bild: 0 },
        { gruppe: "Zusätzlich aufgeführt (neben Gruppe E)", indikation: "Former Smoker", massnahme: "Azithromycin", bild: 0 },
        { gruppe: "Zusätzlich aufgeführt (neben Gruppe E)", indikation: "—", massnahme: "Biologika [Dupilumab/Mepolizumab]", bild: 0 },
        { gruppe: "Zusätzlich aufgeführt (neben Gruppe E)", indikation: "Bronchiektasen-Erkrankung", massnahme: "Brensocatib", bild: 0 }
      ]
    },
    {
      id: "doak-antagonisierung",
      titel: "DOAK vor dringlicher Operation – Abklärung und Antagonisierung",
      fachgebiet: "Gerinnung / Perioperative Medizin",
      tags: ["doak", "noak", "antikoagulation", "antagonisierung", "reversal", "apixaban", "rivaroxaban", "dabigatran", "edoxaban", "andexanet", "idarucizumab", "pcc", "dringliche operation", "notfall-op", "perioperativ", "esaic", "blutung", "gerinnung"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026", titel: "Algorithmus European Society of Anaesthesiology and Intensive Care (ESAIC)" },
      hinweise: ["Die Folie ist rechts abgeschnitten; die Fortsetzung des Algorithmus (Pfeil nach rechts) ist nicht sichtbar."],
      screenshots: [ { datei: "img/doak-antagonisierung.png", titel: "Patients with confirmed intake of DOACs before urgent surgery" } ],
      eintraege: [
        { gruppe: "Ablauf", indikation: "History", massnahme: "Verify intake of direct FXa inhibitors or direct thrombin inhibitor and direct evidence by lab tests (e.g. calibrated anti-FXa activity or (diluted) thrombin time for dabigatran). Check for concomitant bleeding disorders or intake of platelet inhibitors.", bild: 0 },
        { gruppe: "Ablauf", indikation: "Beratung", massnahme: "Seek advice from thrombosis and haemostasis service", bild: 0 },
        { gruppe: "Ablauf", indikation: "Blood sampling", massnahme: "PT, PT-ratio, aPTT, thrombin time (for dabigatran), calibrated anti-FXa activity, point of care coagulation monitoring (if available), creatinine (GFR), fibrinogen, D-dimers and platelet count on admission", bild: 0 },
        { gruppe: "Ablauf", indikation: "Important", massnahme: "Draw blood samples before treatment, but treatment must not be delayed by waiting for lab results.", bild: 0 },
        { gruppe: "Antagonisierung nach Substanz", indikation: "Apixaban, rivaroxaban", massnahme: "1. Consider «wait and see» strategy if clinically appropriate; stimulate diuresis; 2. Andexanet alfa or PCC; 3. aPCC, if both drugs are unavailable.", bild: 0 },
        { gruppe: "Antagonisierung nach Substanz", indikation: "Dabigatran", massnahme: "1. Consider «wait and see» strategy if clinically appropriate; stimulate diuresis; 2. Idarucizumab; 3. PCC or aPCC, if idarucizumab is unavailable.", bild: 0 },
        { gruppe: "Antagonisierung nach Substanz", indikation: "Edoxaban*", massnahme: "1. Consider «wait and see» strategy if clinically appropriate; stimulate diuresis; 2. PCC; 3. aPCC, if PCC is not available.", notiz: "*Andexanet alfa not approved as of February 2024", bild: 0 }
      ]
    },
    {
      id: "diabetes-typ2",
      titel: "Diabetes mellitus Typ 2 – Therapiealgorithmus",
      fachgebiet: "Endokrinologie / Diabetologie",
      tags: ["diabetes", "diabetes mellitus", "t2d", "typ 2", "dm2", "metformin", "sglt-2", "sglt2", "glp-1", "dpp4", "insulin", "basalinsulin", "blutzucker"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026" },
      hinweise: ["Pfeile innerhalb der beiden Kästen zeigen in beide Richtungen (Reihenfolge austauschbar).", "Zuordnung der Pfade gemäss Beschriftung unten: links Herzinsuffizienz und Nierenschutz, rechts kardiovaskulär und Gewichtsreduktion."],
      screenshots: [ { datei: "img/dm2-algorithmus.png", titel: "Therapiealgorithmus Diabetes mellitus Typ 2" } ],
      eintraege: [
        { gruppe: "Basis", indikation: "Alle", massnahme: "Motivation für Änderung Lebensstil (mehr Aktivität und gesunde Ernährung) = sehr wichtig", bild: 0 },
        { gruppe: "Basis", indikation: "Alle", massnahme: "Multifaktorielle Behandlung: Blutdruckkontrolle, Senkung Lipide und Rauchstopp", bild: 0 },
        { gruppe: "Medikamentöse Therapie", indikation: "Begleiterkrankung: Herzinsuffizienz, Nierenschutz", massnahme: "Metformin + SGLT-2i (eGFR >30) ↔ + GLP-1-RA (BMI >28) bzw. DPP4i (BMI <28)", bild: 0 },
        { gruppe: "Medikamentöse Therapie", indikation: "Begleiterkrankung: kardiovaskulär, Gewichtsreduktion", massnahme: "Metformin (eGFR >30) + GLP-1-RA (BMI >28) ↔ + SGLT-2i (eGFR >30)", bild: 0 },
        { gruppe: "Medikamentöse Therapie", indikation: "Nächste Stufe", massnahme: "+ Basalinsulin oder ko-formuliertes Insulin (ein- oder zweimal täglich)", bild: 0 },
        { gruppe: "Medikamentöse Therapie", indikation: "Insulinmangel", massnahme: "Falls Insulinmangel, beginne hier (Basalinsulin bzw. ko-formuliertes Insulin)", bild: 0 },
        { gruppe: "Medikamentöse Therapie", indikation: "Unter Insulin", massnahme: "Weiterfahren mit Metformin, SGLT-2i, GLP-1-RA. Stopp: Sulfonylharnstoff + DPP4i (falls GLP-1-RA)", bild: 0 }
      ]
    },
    {
      id: "acs",
      titel: "Akutes Koronarsyndrom (ACS) / Myokardinfarkt",
      fachgebiet: "Kardiologie",
      tags: ["acs", "akutes koronarsyndrom", "myokardinfarkt", "herzinfarkt", "infarkt", "stemi", "nstemi", "omi", "dapt", "koronar", "pci", "p2y12"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026" },
      parameter: { name: "LVEF", einheit: "%", min: 20, max: 65 },
      hinweise: ["Mit LVEF gesucht, werden nur die Einträge mit LVEF-Angabe gefiltert (LVEF <40 %). Einträge ohne Zahlenangabe (z. B. «normale LVEF») bleiben immer sichtbar."],
      screenshots: [
        { datei: "img/acs-take-home.png", titel: "Take-home message" },
        { datei: "img/acs-dapt.png", titel: "DAPT: Was gibt man und wie lange?" },
        { datei: "img/acs-herzinsuffizienz.png", titel: "Herzinsuffizienztherapie nach ACS" },
        { datei: "img/acs-nachsorge.png", titel: "Wann ist eine erste Kontrolle empfohlen" }
      ],
      eintraege: [
        { gruppe: "Take-home message", indikation: "Diagnose", massnahme: "EKG innerhalb von 10 Minuten nach Erstkontakt. An «OMI» denken.", bild: 0 },
        { gruppe: "Take-home message", indikation: "Akutmedikation", massnahme: "Standardgabe von ASS und UFH", bild: 0 },
        { gruppe: "Take-home message", indikation: "Timing der Revaskularisation", massnahme: "Sofortige invasive Abklärung bei STEMI und instabilen NSTEMI-Patienten; bei stabilen NSTEMI-Patienten erfolgt die Koronarangiographie in der Regel innerhalb von 24 Stunden", bild: 0 },
        { gruppe: "Take-home message", indikation: "DAPT", massnahme: "Wahl des P2Y12-Inhibitors: Prasugrel und Ticagrelor erste Wahl. Dauer i.d.R. 12 Monate", bild: 0 },
        { gruppe: "Take-home message", indikation: "Lipidsenkung", massnahme: "Frühzeitige, aggressive Senkung anstreben", bild: 0 },
        { gruppe: "Take-home message", indikation: "Management der Herzinsuffizienz", massnahme: "Bei einer LVEF <40 % ist die frühzeitige Einleitung der prognoseverbessernden Therapie (ACE-Hemmer, Betablocker, MRA und SGLT2-Inhibitor) essenziell", von: 0, bis: 39.9, bereichText: "<40 %", bild: 0 },
        { gruppe: "Take-home message", indikation: "Nachsorge", massnahme: "Rauchstopp; kardiologische Rehabilitation entscheidend. Aktive Suche nach Depressionen und Angststörungen (z. B. PHQ-Score)", bild: 0 },

        { gruppe: "DAPT – was gibt man und wie lange?", indikation: "Grundsätzlich", massnahme: "ASS cardio + P2Y12-Inhibitor", bild: 1 },
        { gruppe: "DAPT – was gibt man und wie lange?", indikation: "Clopidogrel", massnahme: "Schwächer als Prasugrel und Ticagrelor → Mittel der Wahl bei elektiver PCI", bild: 1 },
        { gruppe: "DAPT – was gibt man und wie lange?", indikation: "Prasugrel", massnahme: "Grundsätzlich erste Wahl (ISAR-REACT-5-Studie). Kontraindikation: Alter 75 LJ, St. n. Stroke/TIA; Cave bei Gewicht <60 kg", bild: 1 },
        { gruppe: "DAPT – was gibt man und wie lange?", indikation: "Ticagrelor", massnahme: "Nachteil 2×/d; ggf. Dyspnoe-NW (ca. 15 %)", bild: 1 },
        { gruppe: "DAPT – was gibt man und wie lange?", indikation: "Bei etablierter OAK", massnahme: "NOAK + ASS cardio + Clopidogrel: grundsätzlich 1 Woche Triple-Therapie, dann NOAK + ASS cardio oder Clopidogrel für 1 Jahr", bild: 1 },

        { gruppe: "Herzinsuffizienztherapie nach ACS", indikation: "Herzinfarkt mit LVEF <40 %", massnahme: "ACE-Hemmer und Betablocker. Optimal während Hosp. auch Beginn mit SGLT2-Hemmer +/- Aldactone/Eplerenon (MRA)", von: 0, bis: 39.9, bereichText: "<40 %", bild: 2 },
        { gruppe: "Herzinsuffizienztherapie nach ACS", indikation: "Normale LVEF, keine Hypertonie", massnahme: "Grundsätzlich für Remodelling 1 Jahr erwägen. Dauertherapie wahrscheinlich nicht notwendig", bild: 2 },
        { gruppe: "Herzinsuffizienztherapie nach ACS", indikation: "Normale LVEF + Hypertonie", massnahme: "ACE-Hemmer und Betablocker für 1 Jahr, dann Betablocker-Stopp", bild: 2 },

        { gruppe: "Nachsorge – wann ist eine erste Kontrolle empfohlen?", indikation: "Grundsätzlich", massnahme: "Hängt von verschiedenen Faktoren ab", bild: 3 },
        { gruppe: "Nachsorge – wann ist eine erste Kontrolle empfohlen?", indikation: "Kardiologe/Kardiologin", massnahme: "Nach 4–6 Wochen; Kontrolle LVEF nach 2–3 Monaten", bild: 3 },
        { gruppe: "Nachsorge – wann ist eine erste Kontrolle empfohlen?", indikation: "Hausarzt/Hausärztin", massnahme: "In den ersten 2–3 Wochen", bild: 3 },
        { gruppe: "Nachsorge – wann ist eine erste Kontrolle empfohlen?", indikation: "Lipid-Kontrolle", massnahme: "Nach 6–8 Wochen mit ggf. Anpassung der Therapie (Ezetimib). Grundsätzlich: je früher LDL-C-Senkung, desto besser!", bild: 3 },
        { gruppe: "Nachsorge – wann ist eine erste Kontrolle empfohlen?", indikation: "Rauchen", massnahme: "Rauchstopp!!", bild: 3 }
      ]
    },
    {
      id: "lipide-ldl",
      titel: "LDL-C-Senkung – ESC-Zielwerte und AGLA-Behandlungsschema",
      fachgebiet: "Kardiologie / Prävention",
      tags: ["lipide", "lipidtherapie", "lipidsenkung", "ldl", "ldl-c", "cholesterin", "dyslipidämie", "hypercholesterinämie", "statin", "ezetimib", "pcsk9", "inclisiran", "bempedoinsäure", "agla", "ascvd", "acs", "myokardinfarkt", "herzinfarkt"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026", titel: "ESC Guidelines (LDL-C Lowering); AGLA-Behandlungsschema" },
      hinweise: [
        "Im Vortrag gehören beide Folien zum Thema ACS.",
        "AGLA: «Die hier dargestellten Behandlungsschemata berücksichtigen die Limitatio des BAG für PCSK9-Inhibitoren und Bempedoinsäure. Sie weichen deshalb von der PCSK9-Indikation in den ESC/EAS Guidelines ab.»"
      ],
      screenshots: [
        { datei: "img/lipide-esc-zielwerte.png", titel: "ESC Guidelines – LDL-C Lowering" },
        { datei: "img/lipide-agla-schema.png", titel: "AGLA Behandlungsschema – sehr hohes Risiko" }
      ],
      eintraege: [
        { gruppe: "ESC – LDL-C-Zielwert nach CV-Risiko", indikation: "Low: SCORE <1%", massnahme: "LDL-C goal 3.0 mmol/L", bild: 0 },
        { gruppe: "ESC – LDL-C-Zielwert nach CV-Risiko", indikation: "Moderate: SCORE ≥1% and <5%; young patients (T1DM <35 years; T2DM <50 years) with DM duration <10 years without other risk factors", massnahme: "LDL-C goal 2.6 mmol/L", bild: 0 },
        { gruppe: "ESC – LDL-C-Zielwert nach CV-Risiko", indikation: "High: SCORE ≥5% and <10%; markedly elevated single risk factors, in particular TC >8 mmol/L or LDL-C >4.9 mmol/L or BP ≥180/110 mmHg; FH without other major risk factors; moderate CKD (eGFR 30–59 mL/min); DM without target organ damage, with DM duration ≥10 years, or other additional risk factor", massnahme: "LDL-C goal 1.8 mmol/L and ≥50% reduction from baseline", bild: 0 },
        { gruppe: "ESC – LDL-C-Zielwert nach CV-Risiko", indikation: "Very high: ASCVD (clinical/imaging); SCORE ≥10%; FH with ASCVD or with another major risk factor; severe CKD (eGFR <30 mL/min); DM & target organ damage: ≥3 major risk factors; or early onset of T1DM of long duration (>20 years)", massnahme: "LDL-C goal 1.4 mmol/L and ≥50% reduction from baseline", bild: 0 },
        { gruppe: "ESC – LDL-C-Zielwert nach CV-Risiko", indikation: "ASCVD with second vascular event within 2 years (not necessarily of the same type) under maximally tolerated statin therapy", massnahme: "LDL-C goal <1.0 mmol/L may be considered", klasse: "IIb", notiz: "Level B", bild: 0 },
        { gruppe: "ESC – LDL-C-Zielwert nach CV-Risiko", indikation: "Grundsatz", massnahme: "Raised LDL-C is a cause of ASCVD; the proportional reduction in risk depends on the absolute reduction in LDL-C", bild: 0 },

        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Start", massnahme: "Hochwirksames Statin (Rosuvastatin, Pitavastatin, Atorvastatin)", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "LDL-C <1,4 mmol/l und Senkung ≥50 %", massnahme: "Therapie kontrolliert fortsetzen", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Ziel nicht erreicht, keine manifeste ASCVD", massnahme: "Ezetimib", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Ziel nicht erreicht, manifeste ASCVD, LDL-C ≤1,8 mmol/l", massnahme: "Ezetimib", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Ziel nicht erreicht, manifeste ASCVD, LDL-C >1,8 mmol/l", massnahme: "PCSK9-Inhibitor (siRNA: Inclisiran; mAbs: Alirocumab, Evolocumab) oder Ezetimib", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Unter Ezetimib LDL-C ≤1,8 mmol/l", massnahme: "Therapie kontrolliert fortsetzen", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Unter Ezetimib LDL-C >1,8 mmol/l", massnahme: "PCSK9-Inhibitor oder Bempedoinsäure", bild: 1 },
        { gruppe: "AGLA – Behandlungsschema sehr hohes Risiko", indikation: "Therapie kontrolliert fortsetzen", massnahme: "LDL-C-Kontrolle 1×/Jahr; häufiger bei entsprechender klinischer Situation", bild: 1 }
      ]
    },
    {
      id: "onko-antiemetika",
      titel: "Antiemetische Prophylaxe bei Chemotherapie",
      fachgebiet: "Onkologie",
      tags: ["antiemetika", "antiemese", "emesis", "übelkeit", "erbrechen", "nausea", "cinv", "chemotherapie", "onkologie", "olanzapin", "dexamethason", "aprepitant"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026", titel: "Herrstedt J, et al. ESMO Open 2024;9(2):102195" },
      hinweise: ["Abkürzungen: 5-HT3 = serotonin3 receptor antagonist; DEX = dexamethasone; NK1 = neurokinin1 receptor antagonist such as aprepitant or fosaprepitant or rolapitant or oral or i.v. NEPA (combination of netupitant and palonosetron); OLZ = olanzapine; DOP = dopamine receptor antagonist."],
      screenshots: [ { datei: "img/onko-antiemetika.png", titel: "Antiemetika – Richtlinien" } ],
      eintraege: [
        { gruppe: "Antiemetika nach emetischem Risiko", indikation: "High Non-AC", massnahme: "5-HT3 + DEX + NK1 + OLZ", bild: 0 },
        { gruppe: "Antiemetika nach emetischem Risiko", indikation: "High AC", massnahme: "5-HT3 + DEX + NK1 + OLZ", bild: 0 },
        { gruppe: "Antiemetika nach emetischem Risiko", indikation: "Moderate: Carboplatin ≥AUC 5; Oxaliplatin women ≤50 years", massnahme: "5-HT3 + DEX + NK1", bild: 0 },
        { gruppe: "Antiemetika nach emetischem Risiko", indikation: "Moderate (other than above)*", massnahme: "5-HT3 + DEX", notiz: "*The emetic potential of sacituzumab-govitecan and trastuzumab-deruxtecan appears to be at the high end of the moderate category, most closely resembling that of carboplatin. While prospective studies are needed it is suggested to prevent emesis as for carboplatin AUC ≥5.", bild: 0 },
        { gruppe: "Antiemetika nach emetischem Risiko", indikation: "Low", massnahme: "5-HT3 OR DEX OR DOP", bild: 0 },
        { gruppe: "Antiemetika nach emetischem Risiko", indikation: "Minimal", massnahme: "No routine prophylaxis", bild: 0 }
      ]
    },
    {
      id: "onko-irae",
      titel: "Immuntherapie – immunvermittelte Nebenwirkungen (irAE)",
      fachgebiet: "Onkologie",
      tags: ["irae", "immuntherapie", "checkpoint", "checkpoint-inhibitor", "pd-1", "ctla-4", "immunvermittelt", "nebenwirkungen", "ctcae", "onkologie", "kolitis", "hypophysitis", "pneumonitis", "myokarditis"],
      quelle: { typ: "Vortrag (FOMF)", stand: "2025/2026", titel: "Dougan M, et al. Cell 2021;184(6):1575-88; Michot JM, et al. Eur J Cancer 2016;54:139-48; ESMO Patient Guide Immunotherapy Side Effects" },
      parameter: { name: "Grad", einheit: "", min: 1, max: 4 },
      hinweise: ["Suche nach Schweregrad z. B. mit «irAE Grad 3». Einträge ohne Grad (Substanz-Übersicht) bleiben sichtbar."],
      screenshots: [
        { datei: "img/onko-irae-substanz.png", titel: "irAE – abhängig von der Substanz" },
        { datei: "img/onko-irae-grade.png", titel: "Verdacht auf irAE" },
        { datei: "img/onko-irae-therapie.png", titel: "Therapie von irAEs" }
      ],
      eintraege: [
        { gruppe: "Häufigste klinisch wichtige irAE nach Substanz", indikation: "PD-1-Blockade (hervorgehoben)", massnahme: "Hypothyroidism, Pneumonitis, Myocarditis, Arthralgia, Autoimmune diabetes", notiz: "Ebenfalls dargestellt: Uveitis, Encephalitis, Rash/Dermatitis, Hepatitis, Enteritis, Colitis", bild: 0 },
        { gruppe: "Häufigste klinisch wichtige irAE nach Substanz", indikation: "CTLA-4-/Kombinationsblockade (hervorgehoben)", massnahme: "Hypophysitis, Rash/Dermatitis, Enteritis, Colitis", notiz: "Ebenfalls dargestellt: Encephalitis, Uveitis, Hypothyroidism, Pneumonitis, Myocarditis, Arthralgia, Autoimmune diabetes, Hepatitis", bild: 0 },

        { gruppe: "Verdacht auf irAE – Behandlungsintensität nach Grad", indikation: "Setting", massnahme: "Managed in outpatient/community setting (Grade 1–2)", von: 1, bis: 2, bild: 1 },
        { gruppe: "Verdacht auf irAE – Behandlungsintensität nach Grad", indikation: "Setting", massnahme: "Needs hospital admission and care (Grade 3–4)", von: 3, bis: 4, bild: 1 },
        { gruppe: "Verdacht auf irAE – Behandlungsintensität nach Grad", indikation: "Alle Grade", massnahme: "Symptomatic therapy", von: 1, bis: 4, bild: 1 },
        { gruppe: "Verdacht auf irAE – Behandlungsintensität nach Grad", indikation: "Ab Grad 2", massnahme: "Stop treatment*", notiz: "*For some side effects, treatment can be restarted when they subside", von: 2, bis: 4, bild: 1 },
        { gruppe: "Verdacht auf irAE – Behandlungsintensität nach Grad", indikation: "Ab Grad 2", massnahme: "Oral steroids → intravenous steroids started (ab Grad 3)", von: 2, bis: 4, bild: 1 },
        { gruppe: "Verdacht auf irAE – Behandlungsintensität nach Grad", indikation: "Ab Grad 3", massnahme: "Referral to specialist (strong immunosuppressive therapy)", von: 3, bis: 4, bild: 1 },

        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 1 – Management", massnahme: "Ambulant", von: 1, bis: 1, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 1 – Kortikosteroide", massnahme: "Nicht empfohlen", von: 1, bis: 1, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 1 – Weitere Immunsuppressiva", massnahme: "Nicht empfohlen", von: 1, bis: 1, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 1 – Immuntherapie", massnahme: "Weiterführen", von: 1, bis: 1, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 2 – Management", massnahme: "Ambulant", von: 2, bis: 2, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 2 – Kortikosteroide", massnahme: "Topisch oder systemisch oral (0.5–1 mg/kg/d)", von: 2, bis: 2, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 2 – Weitere Immunsuppressiva", massnahme: "Nicht empfohlen", von: 2, bis: 2, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 2 – Immuntherapie", massnahme: "Pausieren, Wiederbeginn wenn G ≤1", von: 2, bis: 2, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 3 – Management", massnahme: "Hospitalisation", von: 3, bis: 3, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 3 – Kortikosteroide", massnahme: "Systemisch oral oder i.v. (1–2 mg/kg/d)", von: 3, bis: 3, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 3 – Weitere Immunsuppressiva", massnahme: "Ggf., falls keine Besserung nach 3–5 Tagen unter Steroiden", von: 3, bis: 3, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 3 – Immuntherapie", massnahme: "Pausieren, ggf. Wiederbeginn wenn G ≤1", von: 3, bis: 3, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 4 – Management", massnahme: "Hospitalisation (ev. IPS)", von: 4, bis: 4, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 4 – Kortikosteroide", massnahme: "Systemisch, i.v. (1–2 mg/kg/d)", von: 4, bis: 4, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 4 – Weitere Immunsuppressiva", massnahme: "Ggf., falls keine Besserung nach 3–5 Tagen unter Steroiden", von: 4, bis: 4, bild: 2 },
        { gruppe: "Therapie von irAEs nach CTCAE-Grad", indikation: "Grad 4 – Immuntherapie", massnahme: "Absetzen", von: 4, bis: 4, bild: 2 }
      ]
    }
  ]
};
