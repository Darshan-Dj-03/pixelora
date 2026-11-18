const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.topbar nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));const revealTargets=document.querySelectorAll('.section-head,.project,.manifesto,.contact');revealTargets.forEach(el=>el.classList.add('reveal'));if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(el=>observer.observe(el))}else{revealTargets.forEach(el=>el.classList.add('visible'))}
// Loop the Pixelora wordmark like a typewriter: type, pause, erase, repeat.
const wordmark = document.querySelector('.brand-object-word');
if (wordmark && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const name = 'pixelora.';
  wordmark.replaceChildren();
  const caret = document.createElement('span');
  caret.className = 'type-caret';
  caret.setAttribute('aria-hidden', 'true');
  wordmark.append(caret);
  let index = 0;
  let deleting = false;
  const tick = () => {
    if (!deleting) {
      const character = document.createElement('span');
      character.className = name[index] === '.' ? 'typed-letter typed-period' : 'typed-letter';
      character.textContent = name[index++];
      wordmark.insertBefore(character, caret);
      if (index === name.length) {
        deleting = true;
        window.setTimeout(tick, 1600);
      } else {
        window.setTimeout(tick, 125);
      }
      return;
    }
    const letters = wordmark.querySelectorAll('.typed-letter');
    if (letters.length) {
      letters[letters.length - 1].remove();
      index--;
      window.setTimeout(tick, 70);
      return;
    }
    deleting = false;
    window.setTimeout(tick, 450);
  };
  window.setTimeout(tick, 550);
}
