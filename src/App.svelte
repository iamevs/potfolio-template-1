<script>
  import avatar from './assets/giphy.gif';
  import one from './assets/1.jpg';
  import two from './assets/2.jpg';
  import three from './assets/3.jpg';
  import four from './assets/4.jpg';
  import five from './assets/5.jpg';
  import six from './assets/6.jpg';
</script>

<main>
  <header class="l-header">
    <nav class="nav bd-grid">
      <div>
        <a href="#home" class="nav__logo">Your Name</a>
      </div>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active">Home</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">Skills</a>
          </li>
          <li class="nav__item"><a href="#work" class="nav__link">Portfolio</a></li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">Contact</a>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu" />
      </div>
    </nav>
  </header>
  <section class="home bd-grid" id="home">
    <div class="home__data">
      <h1 class="home__title">
        Hi there,<br />I'm <span class="home__title-color">Your-Name</span><br />
        Your-desigination
      </h1>

      <a href="#contact" class="button">Contact</a>
    </div>

    <div class="home__social">
      <a href="#linkedin_link" class="home__social-icon"><i class="bx bxl-linkedin" /></a>
      <a href="#behance_link" class="home__social-icon"><i class="bx bxl-behance" /></a>
      <a href="#github_link" class="home__social-icon"><i class="bx bxl-github" /></a>
    </div>

    <div class="home__img">
      <img src="{avatar}" alt="" />
    </div>
  </section>

  <!--===== ABOUT =====-->
  <section class="about section " id="about">
    <h2 class="section-title">About</h2>

    <div class="about__container bd-grid">
      <div class="about__img">
        <!-- img -->
      </div>

      <div>
        <h2 class="about__subtitle">I'am Your-Name</h2>
        <p class="about__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus atque.
        </p>
      </div>
    </div>
  </section>

  <!--===== SKILLS =====-->
  <section class="skills section" id="skills">
    <h2 class="section-title">Skills</h2>

    <div class="skills__container bd-grid">
      <div>
        <h2 class="skills__subtitle">Profesional Skills</h2>
        <p class="skills__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio
          id vero amet, alias architecto consectetur error eum eaque sit.
        </p>
        <div class="skills__data">
          <div class="skills__names">
            <i class="bx bxl-html5 skills__icon" />
            <span class="skills__name">HTML5</span>
          </div>
          <div class="skills__bar skills__html" />
          <div>
            <span class="skills__percentage">90%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class="bx bxl-css3 skills__icon" />
            <span class="skills__name">CSS3</span>
          </div>
          <div class="skills__bar skills__css" />
          <div>
            <span class="skills__percentage">80%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class="bx bxl-javascript skills__icon" />
            <span class="skills__name">JAVASCRIPT</span>
          </div>
          <div class="skills__bar skills__js" />
          <div>
            <span class="skills__percentage">60%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class="bx bxs-paint skills__icon" />
            <span class="skills__name">PHP</span>
          </div>
          <div class="skills__bar skills__ux" />
          <div>
            <span class="skills__percentage">75%</span>
          </div>
        </div>
      </div>

      <div>
        <!-- <img src="{}" alt="image-if-needed" class="skills__img" /> -->
      </div>
    </div>
  </section>

  <!--===== WORK =====-->
  <section class="work section" id="work">
    <h2 class="section-title">Portfolio</h2>

    <div class="work__container bd-grid">
      <div class="work__img">
        <img src="{one}" alt="" />
      </div>
      <div class="work__img">
        <img src="{two}" alt="" />
      </div>
      <div class="work__img">
        <img src="{three}" alt="" />
      </div>
      <div class="work__img">
        <img src="{four}" alt="" />
      </div>
      <div class="work__img">
        <img src="{five}" alt="" />
      </div>
      <div class="work__img">
        <img src="{six}" alt="" />
      </div>
    </div>
  </section>

  <!--===== CONTACT =====-->
  <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>

    <div class="contact__container bd-grid">
      <form action="" class="contact__form">
        <input type="text" placeholder="Name" class="contact__input" />
        <input type="mail" placeholder="Email" class="contact__input" />
        <textarea name="" id="" cols="0" rows="10" class="contact__input" />
        <input type="button" value="Enter" class="contact__button button" />
      </form>
    </div>
  </section>
  <!-- footer -->
  <footer class="footer-area">
    <div class="container">
        <div class="">
            <div class="site-logo">
                <a href="#home"><img src="" alt="your-logo"></a>
            </div>
            <div class="copyrights">
                <p class="para">
                    Copyright ©2022 All rights reserved | This template is made with by
                    <a href="https://www.github.com/iamevs"><span style="color: var(--primary-color);">EVS</span></a>
                </p>
            </div>
        </div>
    </div>
</footer>
</main>
