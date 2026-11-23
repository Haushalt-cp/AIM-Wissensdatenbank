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
    }
  ]
};
