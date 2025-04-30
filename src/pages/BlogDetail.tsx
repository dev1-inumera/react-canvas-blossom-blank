
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API
    setLoading(true);
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Skeleton className="h-8 w-32 mb-6" />
              <Skeleton className="h-12 w-full max-w-3xl mb-4" />
              <Skeleton className="h-6 w-48 mb-10" />
            </div>
            <Skeleton className="h-80 w-full max-w-4xl mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full max-w-4xl" />
              <Skeleton className="h-6 w-full max-w-4xl" />
              <Skeleton className="h-6 w-3/4 max-w-4xl" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Article introuvable</h1>
            <p className="text-gray-600 mb-8">
              L'article que vous recherchez n'existe pas ou a été déplacé.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux articles
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-darkblue-600 hover:text-darkblue-800 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>
          </div>

          {/* Category tag */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-red-600 text-white text-xs uppercase font-medium rounded-full">
              {post.category}
            </span>
          </div>

          {/* Article title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue-900 mb-4 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-3 md:gap-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime} min de lecture</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full max-w-4xl h-auto rounded-lg shadow-md" 
            />
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-4xl mb-12">
            <p className="text-lg mb-6">{post.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Since our sample data has placeholder content, let's add some more content */}
            <p className="mb-4">
              La transformation numérique est au cœur des préoccupations des entreprises modernes. 
              Face à l'évolution rapide des technologies et des attentes des consommateurs, 
              il est essentiel de rester à la pointe pour maintenir sa compétitivité.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Les enjeux majeurs</h2>
            <p className="mb-4">
              Les organisations font face à de nombreux défis dans leur parcours de numérisation :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">L'adaptation des infrastructures existantes</li>
              <li className="mb-2">La formation des équipes aux nouvelles technologies</li>
              <li className="mb-2">La sécurisation des données sensibles</li>
              <li className="mb-2">L'intégration harmonieuse des outils numériques</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Notre approche</h2>
            <p className="mb-4">
              Chez i-numera, nous accompagnons nos clients avec une méthodologie éprouvée,
              qui s'adapte à leurs besoins spécifiques tout en garantissant des résultats concrets.
            </p>
          </div>

          {/* Related posts placeholder */}
          <div className="border-t pt-10">
            <h3 className="text-2xl font-bold mb-6">Articles similaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
                .slice(0, 3)
                .map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold mb-2 text-darkblue-900">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-500">{relatedPost.date}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
