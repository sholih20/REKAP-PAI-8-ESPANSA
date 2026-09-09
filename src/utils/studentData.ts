import { Student } from '../types';

export const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOb7TE7Xy4EZ9lUtqivFfHbYfox-bNnx8AGrRYd9GcmdgB3zOXgSWmwmzgsklkgA/pub?output=csv';

export function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      row.push(value.trim());
      value = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      row.push(value.trim());
      if (row.some((cell) => cell !== '')) rows.push(row);
      row = [];
      value = '';
    } else {
      value += char;
    }
  }

  row.push(value.trim());
  if (row.some((cell) => cell !== '')) rows.push(row);
  return rows;
}

export function mapRowToStudent(row: string[]): Student {
  const prestasiList = [
    row[18] || '', row[19] || '', row[20] || '', row[21] || '', row[22] || '',
    row[23] || '', row[24] || '', row[25] || '', row[26] || '', row[27] || '',
    row[28] || '', row[29] || '', row[30] || '', row[31] || '', row[32] || '',
    row[33] || '', row[34] || '', row[35] || '', row[36] || '', row[37] || '',
    row[38] || '', row[39] || '', row[40] || '',
  ];

  return {
    nis: (row[0] || '').trim(),
    name: (row[1] || '').trim(),
    gender: (row[2] || '').trim(),
    className: (row[3] || '').trim(),

    // PAI Bab 1 - 5
    b1Writing: (row[4] || '').trim(),
    b1Reading: (row[5] || '').trim(),
    b1Test: (row[6] || '').trim(),

    b2Infographic: (row[7] || '').trim(),
    b2Presentation: (row[8] || '').trim(),
    b2Test: (row[9] || '').trim(),

    b3Video: (row[10] || '').trim(),
    b3Test: (row[11] || '').trim(),

    b4Practice: (row[12] || '').trim(),
    b4Test: (row[13] || '').trim(),

    b5Ppt: (row[14] || '').trim(),
    b5Test: (row[15] || '').trim(),

    totalScore: (row[16] || '').trim(),
    average: (row[17] || '').trim(),

    // Semester 1
    alLail: (row[18] || '').trim(),
    asySyams: (row[19] || '').trim(),
    alBalad: (row[20] || '').trim(),
    alFajr: (row[21] || '').trim(),
    alGhasiyyah: (row[22] || '').trim(),
    hadits1: (row[23] || '').trim(),
    hadits2: (row[24] || '').trim(),
    anNisa102: (row[25] || '').trim(),
    praktikJenazah: (row[26] || '').trim(),
    refleksiS1: (row[27] || '').trim(),

    // Semester 2
    alAla: (row[28] || '').trim(),
    athThariq: (row[29] || '').trim(),
    alBuruj: (row[30] || '').trim(),
    alInsyiqaq: (row[31] || '').trim(),
    alMuthaffifin: (row[32] || '').trim(),
    alInfithar: (row[33] || '').trim(),
    alBaqoroh183: (row[34] || '').trim(),
    hadits3: (row[35] || '').trim(),
    hadits4: (row[36] || '').trim(),
    mengkafani: (row[37] || '').trim(),
    bacaanShalat: (row[38] || '').trim(),
    khat: (row[39] || '').trim(),
    refleksiS2: (row[40] || '').trim(),

    prestasiList,
  };
}

export function isItemCompleted(val: string): boolean {
  const v = (val || '').trim();
  return v !== '' && v !== '-' && v !== '—' && v !== '0';
}
