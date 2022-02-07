function Error({ status, statusText, msg }) {
  return (
    <main>
      <h1>{status} {statusText}</h1>
      <p>{msg}</p>
    </main>
  );
}

export default Error;