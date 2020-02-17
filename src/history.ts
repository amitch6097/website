import createHistory from 'history/createBrowserHistory';
const history = createHistory();
//@ts-ignore
window.h = history;
export default history;