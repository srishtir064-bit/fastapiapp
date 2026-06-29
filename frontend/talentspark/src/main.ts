const app = document.getElementById('app');

app.innerHTML = `
  <main>
    <h1>TalentSpark</h1>
    <p>Simple frontend starter for the FastAPI app.</p>
    <button id="loadCompanies">Load Companies</button>
    <div id="output"></div>
  </main>
`;

document.getElementById('loadCompanies').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.textContent = 'Loading...';
  try {
    const response = await fetch('/companies');
    const companies = await response.json();
    output.textContent = JSON.stringify(companies, null, 2);
  } catch (error) {
    output.textContent = 'Error loading companies.';
  }
});
