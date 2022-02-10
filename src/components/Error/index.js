import TopLayerBody from '@components/TopLayerBody';

function Error({ status, statusText, msg }) {
  return (
    <main>
      <TopLayerBody>

        <h1>{status} {statusText}</h1>
        <p>{msg}</p>
      </TopLayerBody>
    </main>
  );
}

export default Error;