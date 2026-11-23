# AIM-Wissensdatenbank

Private Nachschlage-Datenbank zur Allgemeinen Inneren Medizin. Die Inhalte stammen nur aus Screenshots von FOMF-On-Demand-Vorträgen (Stand 2025/2026) und aus hochgeladenen Leitlinien.

## Aufbau

- `index.html` – Suche und Anzeige, ohne externe Abhängigkeiten ausser Google Fonts
- `data.js` – alle Inhalte (Themen, Einträge, Parameterbereiche, Empfehlungsklassen)
- `img/` – Originalfolien

## Suche

Freitext und Parameter, z. B. `Herzinsuffizienz LVEF 50`. Ein Parameter mit Zahl filtert auf die Einträge, deren Bereich diesen Wert einschliesst.

## Neues Thema ergänzen

In `data.js` ein Objekt unter `themen` anlegen (Vorlage: Herzinsuffizienz) und die Folien unter `img/` ablegen.

Repository privat halten: Die Folien sind urheberrechtlich geschützt.
