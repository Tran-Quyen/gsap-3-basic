// 1
// gsap.from(".content", {duration:1, y:-50, opacity: 0});
// 1.1   Show Easings  "steps(5)"   "Power2.easeInOut"  "elastic(1, 0.3)"  https://greensock.com/docs/v2/Easing
// gsap.from(".content", {duration:1, y:-50, opacity: 0, ease: "elastic(1, 0.3)"});
// 2  ADD
// gsap.from("img", {duration: 1, y: 30, opacity: 0});
// gsap.from("aside", {duration: 1, opacity: 0, backgroundPosition: '200px 0px'});
// 3 Show Delay
// gsap.from("img", {duration: 1, delay: 1.4, y: 30, opacity: 0});
// gsap.from("aside", {duration: 1, delay: 1.1, opacity: 0, backgroundPosition: '200px 0px'});
// 4 Show Stagger (add class)
// gsap.from(".anim1", {duration:1, y:-50, opacity: 0, stagger: .6});
// 5 Show text reveal animation (add css span:after)
// <script src="CSSRulePlugin.min.js">
var rule = CSSRulePlugin.getRule('span:after');
// 6 Show Timeline
var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from('.anim1', { y: -50, stagger: 0.6, opacity: 0 })
  .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, '-=2.2')
  .from('aside', { backgroundPosition: '200px 0px', opacity: 0 }, '-=1.5')
  .from('img', { y: 30, opacity: 0 }, '-=.5');
// 7 Show Click reverse
document.getElementById('cta').addEventListener('click', () => {
  console.log('click');
  tl.reversed() ? tl.play() : tl.reverse();
});
