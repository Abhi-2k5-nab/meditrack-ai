const test = require("node:test");
const assert = require("node:assert/strict");
const {
  trPhrase,
  formatDoseAndMedicine,
  getLowStockMedicines,
  calculateAdherence,
  parsePrescriptionLines
} = require("../app.js");

test("trPhrase translates dose instructions into Hindi and Assamese", () => {
  assert.equal(trPhrase("1 Tablet", "hi"), "1 गोली");
  assert.equal(trPhrase("1 Tablet", "as"), "১ টা টেবলেট");
  assert.equal(trPhrase("After Breakfast", "hi"), "नाश्ते के बाद");
  assert.equal(trPhrase("After Breakfast", "as"), "পুৱাৰ আহাৰৰ পিছত");
});

test("formatDoseAndMedicine puts localized dose first and English medicine name after", () => {
  const med = { name: "Telma 40mg", dosage: "1 Tablet", instruction: "After Breakfast" };
  assert.equal(
    formatDoseAndMedicine(med, "hi"),
    "1 गोली — नाश्ते के बाद — Telma 40mg"
  );
  assert.equal(
    formatDoseAndMedicine(med, "as"),
    "১ টা টেবলেট — পুৱাৰ আহাৰৰ পিছত — Telma 40mg"
  );
});

test("getLowStockMedicines filters items with 3 or fewer pills left", () => {
  const meds = [
    { name: "Pan-D", stock: 8 },
    { name: "Telma 40mg", stock: 3 },
    { name: "Vitamin D3", stock: 1 }
  ];
  const low = getLowStockMedicines(meds);
  assert.equal(low.length, 2);
  assert.equal(low[0].name, "Telma 40mg");
});

test("calculateAdherence computes accurate daily completion percentage", () => {
  const meds = [
    { taken: true },
    { taken: true },
    { taken: false },
    { taken: false }
  ];
  assert.deepEqual(calculateAdherence(meds), { taken: 2, total: 4, percent: 50 });
  assert.deepEqual(calculateAdherence([]), { taken: 0, total: 0, percent: 0 });
});

test("parsePrescriptionLines extracts slot, dosage, and English medicine name", () => {
  const parsed = parsePrescriptionLines("1. Metformin 500mg — 0-0-1 (After Food)");
  assert.equal(parsed.length, 1);
  assert.equal(parsed[0].name, "Metformin 500mg");
  assert.equal(parsed[0].slot, "Night");
});
