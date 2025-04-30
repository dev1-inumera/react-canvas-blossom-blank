
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { BlogPost } from '@/data/blog';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-28 pb-20">
        {/* Blog Header */}
        <div className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-darkblue-900 mb-4">
              Blog i-numera
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Découvrez nos articles, conseils et actualités sur la transformation numérique, la cybersécurité et les tendances du secteur.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Link to={`/blog/${post.slug}`}>
          {post.image ? (
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-red-600 text-white text-xs uppercase font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </Link>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min de lecture</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-darkblue-900">
          <Link to={`/blog/${post.slug}`} className="hover:text-darkblue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-darkblue-600 font-medium hover:text-darkblue-800 transition-colors"
        >
          Lire la suite →
        </Link>
      </div>
    </div>
  );
};

export default Blog;
