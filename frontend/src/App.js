import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import './App.css';

const API_BASE_URL = 'http://localhost:5001/api';

function App() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/reviews?limit=20`);
      
      if (response.data.success) {
        setReviews(response.data.data);
      } else {
        setError('Gagal memuat ulasan');
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Tidak dapat terhubung ke server. Pastikan backend berjalan.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (formData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/analyze-review`,
        formData
      );

      if (response.data.success) {
        setReviews([response.data.data, ...reviews]);
        return response.data;
      } else {
        throw new Error(response.data.error || 'Gagal menganalisis ulasan');
      }
    } catch (err) {
      console.error('Error analyzing review:', err);
      throw new Error(
        err.response?.data?.error || 
        err.message || 
        'Gagal menganalisis ulasan'
      );
    }
  };

  return (
    <div className="app">
      {/* Background decoration */}
      <div className="bg-decoration"></div>

      <header className="app-header">
        <div className="header-content">
          <div className="brand-badge">Powered by Gemini AI</div>
          <h1>Product Insight Analyzer</h1>
          <p className="subtitle">Temukan sentimen dan poin penting dari ulasan produk secara instan.</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {error && (
            <div className="error-banner">
              <div className="error-icon">⚠️</div>
              <span>{error}</span>
              <button onClick={fetchReviews} className="retry-link">Coba Lagi</button>
            </div>
          )}

          <ReviewForm onAnalyze={handleAnalyze} />

          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Sedang memuat data...</p>
            </div>
          ) : (
            <ReviewList reviews={reviews} />
          )}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} AI Product Analyzer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;