
/**
 * 大屏初始宽、高
 */
const originalVal = {
  width: 3840,
  height: 1080
}

/**
 * 处理大屏缩放比例
 * @param {*节点ID} domId 
 */
export default function bigScreen(domId) {
  const box = document.getElementById(domId);
  if(!box) return;
  const ratio = window.innerWidth / originalVal.width;
  box.style.cssText = [
    `width: ${originalVal.width}px`,
    `height: ${originalVal.height}px`,
    `transform: scale(${ratio})`,
    'transform-origin: 0% 0%',
    'margin: 0',
    'padding: 0',
    'border: none',
    'overflow: hidden',
    'background: #f0f0f0',
  ].join('; ');

  const handle = () => {
    box.style.setProperty('transform', `scale(${window.innerWidth / originalVal.width})`);
  }

  window.addEventListener('resize', handle);

  window.onbeforeunload = () => {
    console.log('before-unload');
    window.removeEventListener('resize', handle);
  }
}