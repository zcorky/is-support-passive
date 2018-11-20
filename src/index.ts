/**
 * Detect the device is support passive
 * more:
 *  https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 *  https://blog.chromium.org/2016/05/new-apis-to-help-developers-improve.html
 */
let isSupport = false;
try {
  /* istanbul ignore next @TODO nyc bug does not work */
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      isSupport = true;
    },
  });
  window.addEventListener('test', null as any, opts);
} catch (e) {
  //
}

function isSupportPassive() {
  return isSupport;
}

export {
  isSupportPassive,
};

export default isSupportPassive;