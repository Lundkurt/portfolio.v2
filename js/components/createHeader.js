export default function createHeader() {
  const { pathname } = document.location;
  const header = document.querySelector("header");

  header.innerHTML = `<div class="header-content border-bottom ">
    <a class="logo purple" href="index.html">Kurt Lund</a>
    <nav>
        <ul>
            <li><a class="${
              pathname === "/" || pathname === "/index.html" ? "active" : ""
            }" href="index.html" >Home</a></li>
            <li><a class="${
              pathname === "/skills.html" ? "active" : ""
            }" href="skills.html" >Skills</a></li>
            <li><a class="${
              pathname === "/projects.html" ? "active" : ""
            }" href="projects.html" >Projects</a></li>
            <li><a class="${
              pathname === "/contact.html" ? "active" : ""
            }" href="contact.html" >Contact</a></li>
        </ul>
    </nav>
</div>`;
}
