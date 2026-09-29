// ⚠️ 必须在所有 import 最顶部！webpack 要求 __webpack_public_path__ 必须在
//    任何异步 chunk 加载前设置，否则懒加载组件/图片会 404
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ 初始值 null，不立即执行任何 DOM 操作
let root = null;

function render(props = {}) {
  const { container } = props;
  const dom = container
    ? container.querySelector('#root')
    : document.getElementById('root');
  if (!dom) return;
  root = ReactDOM.createRoot(dom);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
// 独立运行：window.__POWERED_BY_QIANKUN__ 是乾坤注入的标记，没有就是独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 👇 以下 3 个是乾坤必选的生命周期钩子（必须用 named export，不能 default）

/** 子应用初始化：仅第一次加载时调用 1 次（适合做全局配置、请求公共数据） */
export async function bootstrap() {
  console.log('[my-react-app] bootstrap');
}

/** 子应用挂载：每次进入子应用路由时调用（在这里渲染 React！） */
export async function mount(props) {
  console.log('[my-react-app] mount', props);
  // props 包含：container、主应用传的 props 数据、snapshot 快照状态等
  render(props);
}

/** 子应用卸载：每次离开子应用路由时调用（必须清理 React，否则内存泄漏！） */
export async function unmount() {
  console.log('[my-react-app] unmount');
  // React 18+ 正确卸载方式（旧的 ReactDOM.unmountComponentAtNode 已废弃）
  // 会触发所有组件的 useEffect cleanup 函数
  root?.unmount();
  root = null; // 清空引用，防止内存泄漏
}

/** 可选：主应用主动调用 props.onGlobalStateChange 更新子应用时触发 */
export async function update(props) {
  console.log('[my-react-app] update', props);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
