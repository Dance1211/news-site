import TopLayerBody from '@components/TopLayerBody';
import './styles.css';

function Error({ status = 404, statusText = "Page not found", msg = "Cannot find the requested page" }) {
  return (
    <main className="Error">
      <TopLayerBody>

        <h1>{status} {statusText}</h1>
        <p>{msg}</p>
      </TopLayerBody>
    </main>
  );
}

export default Error;