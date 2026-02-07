import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import BlogPostPage from './pages/BlogPostPage';
import ProjectPage from './pages/ProjectPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'blog/:id',
                element: <BlogPostPage />
            },
            {
                path: 'project/:id',
                element: <ProjectPage />
            }
        ]
    }
]);
