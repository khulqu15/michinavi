import { AnimationController } from '@ionic/vue';

export const customAnimation = (baseEl, opts) => {
  const animationCtrl = new AnimationController();
  const rootAnimation = animationCtrl.create()
    .addElement(baseEl)
    .duration(500)
    .easing('cubic-bezier(0.36,0.66,0.04,1)');

  const enteringPage = animationCtrl.create()
    .addElement(opts.enteringEl)
    .fromTo('opacity', 0, 1)
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');

  const leavingPage = animationCtrl.create()
    .addElement(opts.leavingEl)
    .fromTo('opacity', 1, 0)
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

  return rootAnimation
    .addAnimation([enteringPage, leavingPage]);
};
