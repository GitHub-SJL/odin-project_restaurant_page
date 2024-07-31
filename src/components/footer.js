function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} GitHub-SJL`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/GitHub-SJL";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

export default createFooter;
