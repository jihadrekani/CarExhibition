import React, { useEffect } from 'react';
import Layout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import Categories from '../pages/Categories'
import MultiSlider from '../components/MultiSlider';
import FilterForm from '../components/FilterForm';
export default function Home() {
  return (
    <Layout>

      <HeroSection />


      <MultiSlider  />
      
      
    </Layout>
  );
}
