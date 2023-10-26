import { Animation } from '@ionic/core';

export function customAnimation(AnimationC: Animation, baseEl: HTMLElement, opts: any): Animation {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;

    const baseAnimation = new AnimationC();

    const enteringAnimation = new AnimationC()
        .addElement(enteringEl)
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)');

    const leavingAnimation = new AnimationC()
        .addElement(leavingEl)
        .fromTo('opacity', 1, 0)
        .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

    return baseAnimation
        .addAnimation([enteringAnimation, leavingAnimation]);
}