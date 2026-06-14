import { REQUIRED_CSV_COLUMNS } from '../data/constants';

export function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) {
    throw new Error('CSV must contain a header row and at least one data row.');
  }

  const headers = lines[0].split(',').map((h) => h.trim());
  const missing = REQUIRED_CSV_COLUMNS.filter((col) => !headers.includes(col));

  if (missing.length > 0) {
    throw new Error(`Missing required columns: ${missing.join(', ')}`);
  }

  const rows = lines.slice(1).map((line, index) => {
    const values = line.split(',').map((v) => v.trim());
    const row = {};
    headers.forEach((header, i) => {
      row[header] = values[i] ?? '';
    });

    REQUIRED_CSV_COLUMNS.forEach((col) => {
      const num = parseFloat(row[col]);
      if (Number.isNaN(num)) {
        throw new Error(`Invalid value at row ${index + 2}, column "${col}"`);
      }
      row[col] = col === 'Mutation_Flag' ? Math.round(num) : num;
    });

    return row;
  });

  return { headers, rows };
}
