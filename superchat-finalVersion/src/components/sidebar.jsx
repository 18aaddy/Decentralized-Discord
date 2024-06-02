import "../App.css";
import DarkThemeButton from "./darkThemeToggle";

export default function Navbar() {
    return (<>
   
  {/* Top Bar (Nav) */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#Navbar">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <DarkThemeButton />
      <form class="d-flex" role="search">
        <input style={{"marginLeft": "20px"}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
    )
}

export function SideBar() {
  {/* Side Bar  */}
  <div  class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="Navbar" aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
    <button data-bs-toggle="collapse" type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Place offcanvas content here.</p>
  </div>
  </div>
}