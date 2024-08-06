import { lazy, Suspense } from 'react';
import './App.scss';
import Home from './components/home/home';
import Counter from 'components/count/counter';
import UseMemoExample from 'components/useMemoExample/useMemoHook';
// import ImageComponent from './components/imageLoading/imageLoading';
const ImageLoading = lazy(
  () => import('./components/lazyImageLoading/lazyImageLoading')
);
// const ImageLoad = lazy(() => import('./components/imageLoading/imageLoading'));

function App(): JSX.Element {
  return (
    <div className="App">
      <Home />
      <Counter />
      <br />
      <UseMemoExample />
      {/* <ImageComponent /> */}
      <Suspense
        fallback={
          <p style={{ textAlign: 'center', fontSize: '16px', color: 'red' }}>
            load image component....
          </p>
        }
      >
        <ImageLoading />
      </Suspense>

      {/* <Suspense
        fallback={
          <p style={{ textAlign: 'center', fontSize: '16px', color: 'red' }}>
            Page load
          </p>
        }
      >
        <ImageLoad />
      </Suspense> */}
    </div>
  );
}

export default App;
