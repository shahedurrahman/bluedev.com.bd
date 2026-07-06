const MEMBERS = {
  "01ec916b166a": {
    name: "Shahedur Rahman",
    photo: "photos/shahedur_rahman.jpg",
    active: true
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const rawId = (new URLSearchParams(location.search).get('id') || '').trim().toLowerCase();
  const member = MEMBERS[rawId];
  const foundState = document.getElementById('foundState');
  const notFoundState = document.getElementById('notFoundState');

  if (member) {
    const photo = document.getElementById('memberPhoto');
    photo.src = member.photo;
    photo.alt = member.name;
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberIdLabel').textContent = 'ID: ' + rawId;
    const badge = document.getElementById('memberBadge');
    if (member.active) {
      badge.className = 'verify-badge badge-active';
      badge.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5L19.5 6"/></svg>Active';
    } else {
      badge.className = 'verify-badge badge-inactive';
      badge.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>Inactive';
    }
  } else {
    foundState.hidden = true;
    notFoundState.hidden = false;
  }
});
