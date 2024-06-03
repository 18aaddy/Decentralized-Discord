import DarkThemeButton from "./darkThemeToggle";


export default function OffcanvasNavbar() {
    return (<nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
        </div>
        
      <div class="sidebar">
      <div class="channel active">
      <div class="channel-name"><a href="/channels"># general</a></div>
      </div>
     <div class="channel">
      <div class="channel-name"><a href="/channels/#announcements"># announcements</a></div>
      </div>
      <div class="channel">
      <div class="channel-name"><a href="/channels/#random"># random</a></div>
      </div>
     <div class="channel">
      <div class="channel-name"><a href="/channels/#gaming"># gaming</a></div>
      </div>
      </div>
      </div>
       
        <a class="navbar-brand" href="/">ChainTalk</a>
        <DarkThemeButton />
    </div>
  </nav>
    )
}  


