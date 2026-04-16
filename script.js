const toggle = document.getElementById("toggler-id");
const links = document.querySelectorAll(".mobile-navigation-link");

if (toggle && links.length) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      toggle.checked = false;
    });
  });
}

const projectIds = [
  "246471595",
  "243888523",
  "243436947",
  "242703147",
  "241462089",
  "238862579",
  "229602933",
  "228309341",
  "228841513",
  "207898585",
  "213745371",
  "232377587",
  "208517221",
  "232909365",
  "209004421",
  "237123862",
  "227504659",
  "227507273",
  "208264997",
  "206613889",
  "206616853",
  "209903419",
  "156449885",
  "207070973",
  "206236661",
  "206236439",
  "164109595",
  "156449501",
  "162416745",
  "156496915",
  "167042123",
  "167041979",
];

function getRandomProjects(count = 4) {
  const shuffled = [...projectIds];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

function createIframe(projectId) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.behance.net/embed/project/${projectId}?ilo0=1`;
  iframe.height = "316";
  iframe.width = "404";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.frameBorder = "0";
  iframe.allow = "clipboard-write";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.scrolling = "no";
  return iframe;
}

function loadRandomPortfolio() {
  const container = document.getElementById("random-portfolio");
  if (!container) return;

  container.innerHTML = "";
  const randomIds = getRandomProjects(4);

  randomIds.forEach((id) => {
    const iframe = createIframe(id);
    container.appendChild(iframe);
  });
}

document.addEventListener("DOMContentLoaded", loadRandomPortfolio);
