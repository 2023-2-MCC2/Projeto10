import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-bottom: 16px;
  padding: 8px 16px;
`;

const Modal = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 200px;
    height: auto;
    margin-right: 16px;
    margin-bottom: 16px;
  }
`;

const PostagemForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();

    const { name, image } = event.target.elements;

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('file', image.files[0]);

    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      setImages([...images, data]);
      closeModal();
    } else {
      console.error('Image upload failed');
    }
  };

  const handleImageDelete = async (id) => {
    await fetch(`http://localhost:3000/delete/${id}`, {
      method: 'DELETE',
    });

    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('http://localhost:3000/images');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Aplicação de Cadastro de Imagens</h1>

      <Button onClick={openModal}>Cadastrar Imagem</Button>

      <Modal open={modalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <h2>Cadastrar Imagem</h2>
          <form onSubmit={handleImageSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
            <br /><br />
            <label htmlFor="image">Imagem:</label>
            <input type="file" id="image" name="image" />
            <br /><br />
            <button type="submit">Salvar</button>
          </form>
        </ModalContent>
      </Modal>

      <ImageList>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.name} />
            <p>{image.name}</p>
            <button onClick={() => handleImageDelete(image.id)}>Deletar</button>
          </div>
        ))}
      </ImageList>
    </div>
  );
};

export default PostagemForm;
