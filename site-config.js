// Customize this file for each team. Use a unique storageKey per project.
window.SITE_CONFIG = {
  organization: "Your Organization",
  project: "Your Project",
  location: "Your Location",
  tagline: "People. Purpose. Progress.",
  introduction: "Expertise, perspective, and a shared purpose. Meet the people making this project happen.",
  footer: "Illustrative demo profiles. Replace with your team’s approved information.",
  storageKey: "team-atlas-your-project-v1",
  featuredNames: ["Alex Morgan", "Jordan Lee", "Taylor Rivera"]
};
document.addEventListener('DOMContentLoaded', () => {
  const c = window.SITE_CONFIG;
  const set = (selector, value) => { const el = document.querySelector(selector); if(el) el.textContent = value; };
  document.title = `The People Behind the Project | ${c.project}`;
  set('.logo-words b', c.organization);
  set('.logo-words small', c.tagline);
  set('.footer-wordmark', c.organization);
  set('.header-project', `${c.organization} / ${c.project}`);
  set('.masthead-copy > p', c.introduction);
  set('.hero-side-label', c.location);
  set('.closing-bottom', c.project);
  set('.footer-note', c.footer);
  const portraits = (window.TEAM_DATA || []).filter(p => p.photo).slice(0,3);
  document.querySelectorAll('.masthead-art .photo-frame').forEach((frame, i) => {
    const person = portraits[i];
    if(person && /^(photos\/[\w.-]+\.(webp|png|jpg|jpeg)|data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+)$/.test(person.photo)) {
      const img = document.createElement('img'); img.src = person.photo; img.alt = ''; frame.replaceChildren(img);
    }
  });
});
