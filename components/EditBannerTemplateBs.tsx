import React, { useState, ChangeEvent } from 'react';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

interface EditBannerTemplateBsProps {
  banner: Banner;
  onSave: (updatedBanner: Banner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, onSave, onClose }) => {
  const [updatedBanner, setUpdatedBanner] = useState<Banner>(banner);
  const [imagePreview, setImagePreview] = useState<string>(banner.image);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedBanner({ ...updatedBanner, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setUpdatedBanner({ ...updatedBanner, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSave(updatedBanner);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-xl mb-4">Edit Banner</h2>
        <input
          name="title"
          value={updatedBanner.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="description"
          value={updatedBanner.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="cta"
          value={updatedBanner.cta}
          onChange={handleChange}
          placeholder="CTA"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="background"
          value={updatedBanner.background}
          onChange={handleChange}
          placeholder="Background Color"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full mb-2 p-2 border rounded"
        />
        {imagePreview && (
          <img src={imagePreview} alt="Image Preview" className="w-full mb-2 rounded" />
        )}
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 p-2 bg-gray-500 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
