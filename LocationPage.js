import React, { useEffect, useState } from "react";

function LocationPage() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // ================= COUNTRIES =================

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoadingCountries(true);

        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/positions",
        );

        const data = await response.json();

        if (!data.error) {
          setCountries(data.data);
        }
      } catch (error) {
        console.error("Countries Error:", error);
      } finally {
        setLoadingCountries(false);
      }
    };

    getCountries();
  }, []);

  // ================= STATES =================

  const handleCountryChange = async (e) => {
    const country = e.target.value;

    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);

    if (!country) return;

    try {
      setLoadingStates(true);

      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: country,
          }),
        },
      );

      const data = await response.json();

      if (!data.error) {
        setStates(data.data.states);
      }
    } catch (error) {
      console.error("States Error:", error);
    } finally {
      setLoadingStates(false);
    }
  };

  // ================= CITIES =================

  const handleStateChange = async (e) => {
    const state = e.target.value;

    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    if (!state || !selectedCountry) return;

    try {
      setLoadingCities(true);

      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: selectedCountry,
            state: state,
          }),
        },
      );

      const data = await response.json();

      if (!data.error) {
        setCities(data.data);
      }
    } catch (error) {
      console.error("Cities Error:", error);
    } finally {
      setLoadingCities(false);
    }
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Country: ${selectedCountry}\nState: ${selectedState}\nCity: ${selectedCity}`,
    );
  };

  return (
    <div className="location-page">
      <div className="location-card">
        <h1>Location Selector</h1>

        <p className="location-description">
          Select your country, state and city using our location API.
        </p>

        <form onSubmit={handleSubmit}>
          {/* COUNTRY */}

          <div className="location-group">
            <label>Country</label>

            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">
                {loadingCountries ? "Loading countries..." : "Select Country"}
              </option>

              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* STATE */}

          <div className="location-group">
            <label>State / Province</label>

            <select
              value={selectedState}
              onChange={handleStateChange}
              disabled={!selectedCountry || loadingStates}
            >
              <option value="">
                {loadingStates ? "Loading states..." : "Select State"}
              </option>

              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* CITY */}

          <div className="location-group">
            <label>City</label>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState || loadingCities}
            >
              <option value="">
                {loadingCities ? "Loading cities..." : "Select City"}
              </option>

              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="location-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LocationPage;
