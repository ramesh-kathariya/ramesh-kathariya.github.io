/*
 * Fetches live observation/species/identification counts from the
 * public iNaturalist API (no API key required) and fills in any
 * element on the page with a matching id. If the request fails
 * (offline, API down, CORS issue), the static numbers already in
 * the HTML are left untouched — this is a progressive enhancement,
 * not a hard dependency.
 *
 * Docs: https://api.inaturalist.org/v1/docs/#!/Observations/get_observations_observers
 */
(function () {
  var USER_LOGIN = "rameshkathariya";
  var ENDPOINT =
    "https://api.inaturalist.org/v1/observations/observers?user_login=" +
    USER_LOGIN +
    "&per_page=1";

  function setText(id, value) {
    if (value === undefined || value === null) return;
    var el = document.getElementById(id);
    if (el) el.textContent = Number(value).toLocaleString();
  }

  fetch(ENDPOINT)
    .then(function (res) {
      if (!res.ok) throw new Error("iNaturalist API returned " + res.status);
      return res.json();
    })
    .then(function (data) {
      var row = data && data.results && data.results[0];
      if (!row) return;
      setText("inat-obs-count", row.observation_count);
      setText("inat-species-count", row.species_count);
      if (row.user) setText("inat-ident-count", row.user.identifications_count);
    })
    .catch(function () {
      // Silently keep the static fallback numbers already in the page.
    });
})();
