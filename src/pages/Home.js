import React, { useEffect } from 'react';
import Layout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import Categories from '../pages/Categories'
export default function Home() {
  return (
    <Layout>
      <HeroSection />


      <Categories />
      
      
    </Layout>
  );
}
