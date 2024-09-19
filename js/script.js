const yearEl = document.querySelector('.year');
const date = new Date();
const dateYear = date.getFullYear();

yearEl.textContent = dateYear;

const headerElement = document.querySelector('.header');

headerElement.addEventListener('click', function (e) {
  const btnClicked = e.target.closest('.btn-mobile-nav');
  if (!btnClicked) return;
  console.log();
  document.querySelector('.header').classList.toggle('nav-open');
  console.log(btnClicked);
})

//Smooth scrolling 

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);
    //Scroll back to the top 
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" })

    }
    if (link.classList.contains("main-nav-link")) headerElement.classList.toggle("nav-open");
  })

})
///////////////////////////////////////////////////
// STICKY NAVIGATION
const sectionHero = document.querySelector('.section-hero');
console.log(sectionHero);
const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent);
  if (!ent.isIntersecting)
    document.body.classList.add('sticky');
  if (ent.isIntersecting)
    document.body.classList.remove('sticky');

},
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px'

  });
observer.observe(sectionHero)
