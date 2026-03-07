import React, { useState } from 'react'; //Se importa useState
import PostCard from '../components/PostCard';
import CreatePostModal from '../components/CreatePostModal'; // Se importa el nuevo componente
import './Feed.css';

/**
 * Página del feed principal
 * Muestra las publicaciones de todos los usuarios
 * 
 * TODO: FE-04 - Implementar scroll infinito
 * TODO: FE-06 - Agregar modal para crear publicaciones
 */
const Feed = () => {
  //Se crea el estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Mock data - en producción vendría de la API
  const mockPosts = [
    {
      id: 1,
      author: { name: 'María González', avatar: null },
      content: '¡Acabo de terminar mi primer proyecto en React! 🎉 Fue todo un desafío pero aprendí muchísimo en el camino. ¿Algún consejo para optimizar el rendimiento?',
      createdAt: new Date().toISOString(),
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: { name: 'Carlos Ruiz', avatar: null },
      content: 'Compartiendo mi experiencia con GraphQL. Las queries son increíblemente eficientes comparadas con REST. ¿Alguien más lo está usando?',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      likes: 18,
      comments: 12
    },
    {
      id: 3,
      author: { name: 'Ana Martínez', avatar: null },
      content: 'Busco colaboradores para un proyecto open source de gestión de tareas. ¿Alguien interesado? stack: Node.js + MongoDB + React',
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      likes: 45,
      comments: 23
    }
  ];

  return (
    <div className="feed-page">
      <div className="container">
        <div className="feed-container">
          <div className="feed-header">
            <h2>Feed de Publicaciones</h2>
            <button className="btn btn-primary"
             onClick={() => setIsModalOpen(true)}
            >
              ✏️ Nueva Publicación
            </button>
          </div>

          <div className="posts-list">
            {mockPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="feed-loader">
            <p>Cargando más publicaciones...</p>
          </div>
        </div>
      </div>
      {/* Se renderiza el modal y le pasamos las props necesarias */}
      <CreatePostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Feed;
