const toggle = document.getElementById('chatToggle');
const widget = document.getElementById('chatWidget');
const form = document.getElementById('chatForm');
const input = document.getElementById('chatInput');
const log = document.getElementById('chatLog');

const notAvailable = 'This information is not available on the official KASC website.';

const kb = [
  { keys: ['principal', 'who is the principal'], answer: 'Principal information is available on the official KASC website under institutional leadership pages. Please refer to the latest Home/Administration details for the current Principal name.' },
  { keys: ['hostel', 'boys hostel', 'girls hostel', 'does kasc have hostel'], answer: 'Yes. KASC provides separate hostel facilities for both boys and girls with student-focused residential support.' },
  { keys: ['mba'], answer: 'Yes, KASC offers an MBA programme under Management Studies with industry-oriented training and leadership development.' },
  { keys: ['courses', 'programmes', 'what courses are offered', 'ug', 'pg', 'bca', 'bba', 'msw'], answer: 'KASC offers UG, PG, and professional programmes including Tamil, English, Hindi, UG & PG Computer Science, BCA, CT & IT, Mathematics, Commerce (BI/CA/PA), MBA, BBA, BBA CA, Physics, Psychology, Biochemistry, Biotechnology, Social Work (MSW), and Physical Education, along with value-added courses.' },
  { keys: ['grievance', 'raise a grievance', 'complaint', 'anti-ragging', 'icc', 'ugc grievance'], answer: 'Students can raise issues through the KASC Grievance Redressal Cell and related committees (including ICC and Anti-ragging). KASC also follows UGC grievance systems, and relevant external portals are listed (such as UGC Grievance and Cyber Crime Portal).' },
  { keys: ['facility', 'facilities', 'library', 'computer centre', 'media centre', 'transport'], answer: 'KASC facilities include Library, Computer Centre, Media Centre, separate Boys and Girls Hostels, and Transport services.' },
  { keys: ['exam', 'controller of examinations', 'examination section', 'syllabi', 'curriculum', 'obe'], answer: 'Academic and examination information includes Controller of Examinations, Examination Section, Curriculum, OBE framework, Academic Syllabi, and autonomous regulations/policies.' },
  { keys: ['trust', 'trustee', 'governing council', 'academic council'], answer: 'KASC provides governance details under Trust, Trustees, Governing Council, and Academic Council sections.' },
  { keys: ['cells', 'nss', 'ncc', 'yrc', 'rrc', 'women development', 'sc/st', 'placement', 'entrepreneurship', 'ipr', 'industry institute collaboration'], answer: 'Student support at KASC includes NSS, NCC, YRC, RRC, Women Development Cell, SC/ST Cell, ICC, Anti-ragging, Grievance Redressal, Career Guidance & Placement Cell, Entrepreneurship Development Cell, Innovation & IPR Cell, and Industry Institute Collaboration Cell.' },
  { keys: ['research', 'iqac', 'nirf', 'dbt', 'aicte', 'mou'], answer: 'KASC research and quality sections include Research Cell, IQAC, NIRF, DBT, AICTE, and MOUs.' },
  { keys: ['swayam', 'swayam prabha', 'e-pg pathshala', 'vidya lakshmi', 'rti', 'cyber crime portal'], answer: 'KASC lists key external resources including SWAYAM, SWAYAM PRABHA, e-PG Pathshala, Vidya Lakshmi, RTI, UGC Grievance, and Cyber Crime Portal.' },
  { keys: ['policy', 'perspective plan', 'fee refund', 'sedgs', 'ags', 'unnat bharat'], answer: 'KASC publishes policies and documents such as Perspective Plan, Student Grievance Redressal Committee details, Fee Refund Policy, SEDGS, AGS, and Unnat Bharat Abhiyan.' }
];

function getReply(question) {
  const q = question.toLowerCase();
  for (const item of kb) {
    if (item.keys.some((key) => q.includes(key))) return item.answer;
  }
  return notAvailable;
}

function addMessage(text, who) {
  const div = document.createElement('div');
  div.className = `msg ${who}`;
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

toggle?.addEventListener('click', () => widget.classList.toggle('hidden'));

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;
  addMessage(message, 'user');
  addMessage(getReply(message), 'bot');
  input.value = '';
});
