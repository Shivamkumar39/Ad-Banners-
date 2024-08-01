import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannersData from '../public/banners.json';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(bannersData);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleEdit = (id: number) => {
    const banner = banners.find(b => b.id === id);
    setEditingBanner(banner || null);
  };

  const handleSave = (updatedBanner: Banner) => {
    setBanners(banners.map(banner => (banner.id === updatedBanner.id ? updatedBanner : banner)));
    setEditingBanner(null);
  };

  const handleEditClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
      {banners.map(banner => (
        <BannerImageComp
          key={banner.id}
          id={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={handleEdit}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleEditClose}
        />
      )}
    </div>
  );
};

export default HomePage;
